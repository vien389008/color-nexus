import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { LevelData } from "../levels/levels";
import { playConnect, playSwipe, playWin } from "../utils/sound";

type Props = {
  levelData: LevelData;
  onWin: () => void;
  onLose?: () => void;
};

const screenWidth = Dimensions.get("window").width;

export default function Grid({ levelData, onWin }: Props) {
  const { size, endpoints, blocked = [], connectors = [] } = levelData;

  const rawGridSize = screenWidth * 0.9;
  const cellSize = Math.floor(rawGridSize / size);
  const gridSize = cellSize * size;

  const pipeWidth = cellSize * 0.5;
  const totalCells = size * size;
  const playableCells = totalCells - blocked.length - connectors.length;

  /* ================= GRID DATA ================= */

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
  }, [levelData]);

  const uniqueColors = [...new Set(endpoints.map((e) => e.color))];

  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<number[]>([]);
  const [lockedPaths, setLockedPaths] = useState<
    { color: string; cells: number[] }[]
  >([]);

  const [lastTap, setLastTap] = useState<{
    index: number;
    color: string;
    time: number;
  } | null>(null);

  useEffect(() => {
    setActiveColor(null);
    setCurrentPath([]);
    setLockedPaths([]);
    setLastTap(null);
  }, [levelData]);

  /* ================= OPTIMIZE LOOKUP ================= */

  const lockedMap = useMemo(() => {
    const map = new Map<number, string>();
    lockedPaths.forEach((p) => {
      p.cells.forEach((c) => {
        map.set(c, p.color);
      });
    });
    return map;
  }, [lockedPaths]);

  /* ================= HELPERS ================= */

  const getCellFromTouch = (x: number, y: number) => {
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    if (row < 0 || row >= size || col < 0 || col >= size) return null;
    return row * size + col;
  };

  const isAdjacent = (a: number, b: number) => {
    const ar = Math.floor(a / size);
    const ac = a % size;
    const br = Math.floor(b / size);
    const bc = b % size;

    return (
      (Math.abs(ar - br) === 1 && ac === bc) ||
      (Math.abs(ac - bc) === 1 && ar === br)
    );
  };

  const isOtherEndpoint = (index: number) => {
    const cell = gridData[index];
    return (
      cell.color === activeColor &&
      currentPath.length > 0 &&
      index !== currentPath[0]
    );
  };

  const isCellOccupied = (id: number) => {
    if (gridData[id].connector) return false;

    const occupiedColor = lockedMap.get(id);

    if (occupiedColor && occupiedColor !== activeColor) {
      setLockedPaths((prev) => prev.filter((p) => p.color !== occupiedColor));
      return false;
    }

    return occupiedColor !== undefined;
  };

  const getCellColor = (id: number) => {
    if (currentPath.includes(id) && activeColor) return activeColor;
    return lockedMap.get(id) ?? "transparent";
  };

  /* ================= GESTURE ================= */

  const handleGesture = (event: any) => {
    const { x, y } = event.nativeEvent;
    const index = getCellFromTouch(x, y);
    if (index === null) return;

    const cell = gridData[index];
    if (cell.blocked) return;

    if (!activeColor) {
      if (cell.color) {
        const now = Date.now();

        // Double tap -> delete path
        if (
          lastTap &&
          lastTap.index === index &&
          lastTap.color === cell.color &&
          now - lastTap.time < 300
        ) {
          setLockedPaths((prev) => prev.filter((p) => p.color !== cell.color));
          setLastTap(null);
          return;
        }

        setLastTap({
          index,
          color: cell.color,
          time: now,
        });

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
      isAdjacent(last, index) &&
      !isCellOccupied(index) &&
      (!cell.color || cell.color === activeColor)
    ) {
      // Nếu chạm endpoint còn lại -> thêm rồi dừng
      if (isOtherEndpoint(index)) {
        setCurrentPath((prev) => [...prev, index]);
        playSwipe();
        return;
      }

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
        const validFilled = uniqueFilled.filter(
          (id) => !connectors.includes(id),
        );

        if (validFilled.length === playableCells) {
          playWin();
          onWin();
        }
      }
    }

    setCurrentPath([]);
    setActiveColor(null);
  };

  /* ================= RENDER ================= */

  return (
    <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleEnd}>
      <View style={[styles.grid, { width: gridSize, height: gridSize }]}>
        {Array.from({ length: size + 1 }).map((_, i) => (
          <View
            key={"h-" + i}
            pointerEvents="none"
            style={{
              position: "absolute",
              top: i * cellSize,
              left: 0,
              width: gridSize,
              height: 1,
              backgroundColor: "#333",
              zIndex: 1,
            }}
          />
        ))}

        {Array.from({ length: size + 1 }).map((_, i) => (
          <View
            key={"v-" + i}
            pointerEvents="none"
            style={{
              position: "absolute",
              left: i * cellSize,
              top: 0,
              height: gridSize,
              width: 1,
              backgroundColor: "#333",
              zIndex: -1,
            }}
          />
        ))}

        {gridData.map((cell) => {
          const color = getCellColor(cell.id);

          let pathCells: number[] = [];

          if (currentPath.includes(cell.id)) {
            pathCells = currentPath;
          } else if (lockedMap.has(cell.id)) {
            const locked = lockedPaths.find((p) => p.cells.includes(cell.id));
            if (locked) pathCells = locked.cells;
          }

          const indexInPath = pathCells.indexOf(cell.id);
          const prev = indexInPath > 0 ? pathCells[indexInPath - 1] : null;
          const next =
            indexInPath !== -1 && indexInPath < pathCells.length - 1
              ? pathCells[indexInPath + 1]
              : null;

          const connectTop = prev === cell.id - size || next === cell.id - size;
          const connectBottom =
            prev === cell.id + size || next === cell.id + size;
          const connectLeft = prev === cell.id - 1 || next === cell.id - 1;
          const connectRight = prev === cell.id + 1 || next === cell.id + 1;

          return (
            <View
              key={cell.id}
              style={[
                styles.cell,
                {
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: cell.blocked ? "#643232" : "transparent",
                },
              ]}
            >
              {indexInPath !== -1 && (
                <>
                  <View
                    style={{
                      position: "absolute",
                      width: pipeWidth,
                      height: pipeWidth,
                      borderRadius: pipeWidth / 2,
                      backgroundColor: color,
                      zIndex: 10,
                    }}
                  />

                  {connectTop && (
                    <View
                      style={{
                        position: "absolute",
                        width: pipeWidth,
                        height: cellSize / 2,
                        backgroundColor: color,
                        top: 0,
                        zIndex: 9,
                      }}
                    />
                  )}

                  {connectBottom && (
                    <View
                      style={{
                        position: "absolute",
                        width: pipeWidth,
                        height: cellSize / 2,
                        backgroundColor: color,
                        bottom: 0,
                        zIndex: 9,
                      }}
                    />
                  )}

                  {connectLeft && (
                    <View
                      style={{
                        position: "absolute",
                        height: pipeWidth,
                        width: cellSize / 2,
                        backgroundColor: color,
                        left: 0,
                        zIndex: 9,
                      }}
                    />
                  )}

                  {connectRight && (
                    <View
                      style={{
                        position: "absolute",
                        height: pipeWidth,
                        width: cellSize / 2,
                        backgroundColor: color,
                        right: 0,
                        zIndex: 9,
                      }}
                    />
                  )}
                </>
              )}

              {cell.connector && (
                <View
                  style={{
                    position: "absolute",
                    width: cellSize * 0.7,
                    height: cellSize * 0.7,
                    borderRadius: (cellSize * 0.7) / 2,
                    backgroundColor: "#444",
                    zIndex: 1,
                  }}
                />
              )}

              {cell.color && !cell.blocked && (
                <View
                  style={{
                    width: cellSize * 0.8,
                    height: cellSize * 0.8,
                    borderRadius: (cellSize * 0.8) / 2,
                    backgroundColor: cell.color,
                    zIndex: 20,
                  }}
                />
              )}
            </View>
          );
        })}
      </View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#1C1C1C",
    borderRadius: 12,
    overflow: "hidden",
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
  },
});
