import { useEffect, useMemo, useState } from "react";
import { LevelData } from "../../levels/types";
import { playConnect, playSwipe, playWin } from "../../utils/sound";
import { getCellFromTouch, isAdjacent } from "./gridHelpers";

export const useGridLogic = (
  levelData: LevelData,
  cellSize: number,
  onWin: () => void,
  undoToken = 0,
  hintToken = 0,
) => {
  const { size, endpoints, blocked = [], connectors = [] } = levelData;

  const totalCells = size * size;
  const playableCells = totalCells - blocked.length - connectors.length;

  const gridData = useMemo(() => {
    const data = Array.from({ length: totalCells }, (_, i) => ({
      id: i,
      color: undefined as string | undefined,
      blocked: blocked.includes(i),
      connector: connectors.includes(i),
    }));

    endpoints.forEach((p) => {
      data[p.index].color = p.color;
    });

    return data;
  }, [blocked, connectors, endpoints, totalCells]);

  const uniqueColors = useMemo(
    () => [...new Set(endpoints.map((e) => e.color))],
    [endpoints],
  );

  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<number[]>([]);
  const [lockedPaths, setLockedPaths] = useState<
    { color: string; cells: number[] }[]
  >([]);
  const [hintedColor, setHintedColor] = useState<string | null>(null);

  useEffect(() => {
    setActiveColor(null);
    setCurrentPath([]);
    setLockedPaths([]);
    setHintedColor(null);
  }, [levelData]);

  useEffect(() => {
    if (!undoToken) return;

    setHintedColor(null);

    if (currentPath.length > 1) {
      setCurrentPath((prev) => prev.slice(0, -1));
      return;
    }

    if (currentPath.length === 1) {
      setCurrentPath([]);
      setActiveColor(null);
      return;
    }

    setLockedPaths((prev) => prev.slice(0, -1));
  }, [undoToken, currentPath.length]);

  useEffect(() => {
    if (!hintToken) return;

    const lockedColors = new Set(lockedPaths.map((p) => p.color));
    const nextColor = uniqueColors.find((color) => !lockedColors.has(color));

    setHintedColor(nextColor ?? null);
  }, [hintToken, lockedPaths, uniqueColors]);

  const lockedMap = useMemo(() => {
    const map = new Map<number, string>();
    lockedPaths.forEach((p) => {
      p.cells.forEach((c) => map.set(c, p.color));
    });
    return map;
  }, [lockedPaths]);

  const isCellOccupied = (id: number) => {
    if (gridData[id].connector) return false;

    const occupiedColor = lockedMap.get(id);

    if (occupiedColor && occupiedColor !== activeColor) {
      setLockedPaths((prev) => prev.filter((p) => p.color !== occupiedColor));
      return false;
    }

    return occupiedColor !== undefined;
  };

  const handleGesture = (event: any) => {
    const { x, y } = event.nativeEvent;
    const index = getCellFromTouch(x, y, cellSize, size);
    if (index === null) return;

    const cell = gridData[index];
    if (cell.blocked) return;

    if (!activeColor) {
      if (cell.color) {
        setLockedPaths((prev) => prev.filter((p) => p.color !== cell.color));
        setActiveColor(cell.color);
        setCurrentPath([index]);
        playSwipe();
      }
      return;
    }

    const last = currentPath[currentPath.length - 1];
    const secondLast =
      currentPath.length > 1 ? currentPath[currentPath.length - 2] : null;

    if (index === secondLast) {
      setCurrentPath((prev) => prev.slice(0, -1));
      return;
    }

    if (
      !currentPath.includes(index) &&
      isAdjacent(last, index, size) &&
      !isCellOccupied(index) &&
      (!cell.color || cell.color === activeColor)
    ) {
      setCurrentPath((prev) => [...prev, index]);
      playSwipe();
    }
  };

  const handleEnd = () => {
    if (!activeColor) return;

    const last = currentPath[currentPath.length - 1];
    const cell = gridData[last];

    if (cell?.color === activeColor && currentPath.length > 1) {
      const newLocked = [
        ...lockedPaths,
        { color: activeColor, cells: currentPath },
      ];

      setLockedPaths(newLocked);
      playConnect();

      if (newLocked.length === uniqueColors.length) {
        const filled = newLocked.flatMap((p) => p.cells);
        const uniqueFilled = [...new Set(filled)];

        // ✅ kiểm tra lấp đầy tất cả playable cells (không tính connector)
        const validFilled = uniqueFilled.filter(
          (id) => !connectors.includes(id),
        );

        const allPlayableFilled = validFilled.length === playableCells;

        // ✅ kiểm tra tất cả connector đã được đi qua ít nhất 1 lần
        const allConnectorsUsed = connectors.every((connectorId) =>
          uniqueFilled.includes(connectorId),
        );

        if (allPlayableFilled && allConnectorsUsed) {
          playWin();
          onWin();
        }
      }
    }

    setCurrentPath([]);
    setActiveColor(null);
  };

  return {
    size,
    gridData,
    activeColor,
    currentPath,
    lockedPaths,
    lockedMap,
    connectors,
    hintedColor,
    handleGesture,
    handleEnd,
  };
};
