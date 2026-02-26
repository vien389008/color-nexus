import { useEffect, useMemo, useState } from "react";
import { LevelData } from "../../levels/types";
import { playConnect, playSwipe, playWin } from "../../utils/sound";
import { getCellFromTouch, isAdjacent } from "./gridHelpers";

const getNeighbors = (index: number, size: number) => {
  const row = Math.floor(index / size);
  const col = index % size;
  const neighbors: number[] = [];

  if (row > 0) neighbors.push(index - size);
  if (row < size - 1) neighbors.push(index + size);
  if (col > 0) neighbors.push(index - 1);
  if (col < size - 1) neighbors.push(index + 1);

  return neighbors;
};

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
  const [hintPath, setHintPath] = useState<number[]>([]);
  const [hintProgress, setHintProgress] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);

  const lockedMap = useMemo(() => {
    const map = new Map<number, string>();
    lockedPaths.forEach((p) => {
      p.cells.forEach((c) => map.set(c, p.color));
    });
    return map;
  }, [lockedPaths]);

  useEffect(() => {
    setActiveColor(null);
    setCurrentPath([]);
    setLockedPaths([]);
    setHintedColor(null);
    setHintPath([]);
    setHintProgress(0);
    setHintVisible(true);
  }, [levelData]);

  useEffect(() => {
    if (!undoToken) return;

    setHintedColor(null);
    setHintPath([]);
    setHintProgress(0);

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
    const unfinishedColors = uniqueColors.filter((color) => !lockedColors.has(color));

    if (!unfinishedColors.length) {
      setHintedColor(null);
      setHintPath([]);
      setHintProgress(0);
      return;
    }

    const nextColor = unfinishedColors[Math.floor(Math.random() * unfinishedColors.length)];
    const endpointsOfColor = endpoints.filter((e) => e.color === nextColor);

    if (endpointsOfColor.length !== 2) {
      setHintedColor(null);
      setHintPath([]);
      setHintProgress(0);
      return;
    }

    const [start, end] = endpointsOfColor;
    const blockedSet = new Set(blocked);

    const forbiddenEndpoints = new Set(
      endpoints
        .filter((e) => e.color !== nextColor)
        .map((e) => e.index),
    );

    const occupiedByOtherColors = new Set<number>();
    lockedPaths.forEach((p) => {
      if (p.color === nextColor) return;
      p.cells.forEach((cell) => occupiedByOtherColors.add(cell));
    });

    const queue: number[] = [start.index];
    const visited = new Set<number>([start.index]);
    const parent = new Map<number, number>();

    while (queue.length) {
      const node = queue.shift()!;
      if (node === end.index) break;

      for (const neighbor of getNeighbors(node, size)) {
        if (visited.has(neighbor)) continue;
        if (blockedSet.has(neighbor)) continue;
        if (forbiddenEndpoints.has(neighbor)) continue;
        if (occupiedByOtherColors.has(neighbor)) continue;

        visited.add(neighbor);
        parent.set(neighbor, node);
        queue.push(neighbor);
      }
    }

    if (!visited.has(end.index)) {
      setHintedColor(nextColor);
      setHintPath([start.index, end.index]);
      setHintProgress(0);
      return;
    }

    const reconstructed: number[] = [];
    let current = end.index;
    reconstructed.push(current);

    while (current !== start.index) {
      current = parent.get(current)!;
      reconstructed.push(current);
    }

    reconstructed.reverse();

    setHintedColor(nextColor);
    setHintPath(reconstructed);
    setHintProgress(0);
    setHintVisible(true);
  }, [hintToken, lockedPaths, uniqueColors, endpoints, blocked, size]);

  useEffect(() => {
    if (!hintedColor) return;

    const isSolved = lockedPaths.some((path) => path.color === hintedColor);
    if (!isSolved) return;

    setHintedColor(null);
    setHintPath([]);
    setHintProgress(0);
  }, [hintedColor, lockedPaths]);

  useEffect(() => {
    if (!hintPath.length || !hintedColor) return;

    setHintVisible(true);
    setHintProgress(1);

    const drawTimer = setInterval(() => {
      setHintProgress((prev) => {
        if (prev >= hintPath.length) {
          return prev;
        }
        return prev + 1;
      });
    }, 120);

    return () => clearInterval(drawTimer);
  }, [hintPath, hintedColor]);

  useEffect(() => {
    if (!hintPath.length || !hintedColor || hintProgress < hintPath.length) return;

    const blinkTimer = setInterval(() => {
      setHintVisible((prev) => !prev);
    }, 350);

    return () => clearInterval(blinkTimer);
  }, [hintPath.length, hintProgress, hintedColor]);

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
        setHintedColor(null);
        setHintPath([]);
        setHintProgress(0);

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

        const validFilled = uniqueFilled.filter((id) => !connectors.includes(id));
        const allPlayableFilled = validFilled.length === playableCells;

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
    hintPath,
    hintProgress,
    hintVisible,
    handleGesture,
    handleEnd,
  };
};
