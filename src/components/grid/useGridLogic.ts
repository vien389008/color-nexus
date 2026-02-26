import { useCallback, useEffect, useMemo, useState } from "react";
import { LevelData } from "../../levels/types";
import { playConnect, playSwipe, playWin } from "../../utils/sound";
import { findShortestPath, getCellFromTouch, isAdjacent } from "./gridHelpers";

const EMPTY_PATH: number[] = [];

type LockedPath = { color: string; cells: number[] };
type HintPath = { color: string; cells: number[] } | null;

export const useGridLogic = (
  levelData: LevelData,
  cellSize: number,
  onWin: () => void,
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

  const endpointMap = useMemo(() => {
    const map = new Map<string, number[]>();

    endpoints.forEach((endpoint) => {
      const indexes = map.get(endpoint.color) ?? [];
      map.set(endpoint.color, [...indexes, endpoint.index]);
    });

    return map;
  }, [endpoints]);

  const uniqueColors = useMemo(
    () => [...new Set(endpoints.map((e) => e.color))],
    [endpoints],
  );

  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<number[]>([]);
  const [lockedPaths, setLockedPaths] = useState<LockedPath[]>([]);
  const [hintPath, setHintPath] = useState<HintPath>(null);

  useEffect(() => {
    setActiveColor(null);
    setCurrentPath(EMPTY_PATH);
    setLockedPaths([]);
    setHintPath(null);
  }, [levelData]);

  const lockedMap = useMemo(() => {
    const map = new Map<number, string>();

    lockedPaths.forEach((path) => {
      path.cells.forEach((cell) => map.set(cell, path.color));
    });

    return map;
  }, [lockedPaths]);

  const isCellOccupied = (id: number, movingColor: string | null = activeColor) => {
    if (gridData[id].connector) return false;

    const occupiedColor = lockedMap.get(id);

    if (occupiedColor && occupiedColor !== movingColor) {
      setLockedPaths((prev) => prev.filter((path) => path.color !== occupiedColor));
      return false;
    }

    return occupiedColor !== undefined;
  };

  const isBoardSolved = (paths: LockedPath[]) => {
    if (paths.length !== uniqueColors.length) return false;

    const filled = paths.flatMap((path) => path.cells);
    const uniqueFilled = [...new Set(filled)];

    const validFilled = uniqueFilled.filter((id) => !connectors.includes(id));
    const allPlayableFilled = validFilled.length === playableCells;

    const allConnectorsUsed = connectors.every((connectorId) =>
      uniqueFilled.includes(connectorId),
    );

    return allPlayableFilled && allConnectorsUsed;
  };

  const computeHintPath = useCallback(() => {
    const lockedColorSet = new Set(lockedPaths.map((path) => path.color));
    const hintColor = uniqueColors.find((color) => !lockedColorSet.has(color));

    if (!hintColor) {
      setHintPath(null);
      return;
    }

    const endpointsForColor = endpointMap.get(hintColor);
    if (!endpointsForColor || endpointsForColor.length < 2) {
      setHintPath(null);
      return;
    }

    const [start, target] = endpointsForColor;
    const blockedByOtherColors = new Set<number>();

    lockedPaths.forEach((path) => {
      if (path.color !== hintColor) {
        path.cells.forEach((cellId) => blockedByOtherColors.add(cellId));
      }
    });

    const path = findShortestPath(start, target, size, (cellId) => {
      if (gridData[cellId].blocked) return false;
      if (blockedByOtherColors.has(cellId)) return false;
      return true;
    });

    if (!path || path.length < 2) {
      setHintPath(null);
      return;
    }

    setHintPath({ color: hintColor, cells: path });
  }, [endpointMap, gridData, lockedPaths, size, uniqueColors]);

  const handleGesture = (event: any) => {
    const { x, y } = event.nativeEvent;
    const index = getCellFromTouch(x, y, cellSize, size);
    if (index === null) return;

    const cell = gridData[index];
    if (cell.blocked) return;

    if (!activeColor) {
      if (cell.color) {
        setLockedPaths((prev) => prev.filter((path) => path.color !== cell.color));
        setHintPath((prev) => (prev?.color === cell.color ? null : prev));
        setActiveColor(cell.color);
        setCurrentPath([index]);
        playSwipe();
      }
      return;
    }

    const last = currentPath[currentPath.length - 1];
    const secondLast = currentPath.length > 1 ? currentPath[currentPath.length - 2] : null;

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
      const newLocked = [...lockedPaths, { color: activeColor, cells: currentPath }];

      setLockedPaths(newLocked);
      setHintPath((prev) => (prev?.color === activeColor ? null : prev));
      playConnect();

      if (isBoardSolved(newLocked)) {
        playWin();
        onWin();
      }
    }

    setCurrentPath(EMPTY_PATH);
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
    hintPath,
    handleGesture,
    handleEnd,
    computeHintPath,
  };
};
