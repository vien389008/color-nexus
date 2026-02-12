import React, { useMemo, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

type Props = {
  size: number;
  onWin: () => void;
};

const screenWidth = Dimensions.get("window").width;

export default function Grid({ size, onWin }: Props) {
  const gridSize = screenWidth * 0.9;
  const cellSize = gridSize / size;
  const pipeWidth = cellSize * 0.45;
  const pipeLength = cellSize * 0.95;

  const totalCells = size * size;

  // ===== TẠO GRID =====
  const gridData = useMemo(() => {
    const data = Array.from({ length: totalCells }, (_, i) => ({
      id: i,
      color: undefined as string | undefined,
    }));

    const topLeft = 0;
    const topRight = size - 1;
    const bottomLeft = totalCells - size;
    const bottomRight = totalCells - 1;

    data[topLeft].color = "red";
    data[bottomLeft].color = "red";
    data[topRight].color = "blue";
    data[bottomRight].color = "blue";

    return data;
  }, [size]);

  const uniqueColors = ["red", "blue"];

  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<number[]>([]);
  const [lockedPaths, setLockedPaths] = useState<
    { color: string; cells: number[] }[]
  >([]);

  // ===== UTILS =====
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

  const isCellOccupied = (id: number) => {
    for (let p of lockedPaths) {
      if (p.cells.includes(id)) return true;
    }
    return false;
  };

  const getCellColor = (id: number) => {
    if (currentPath.includes(id) && activeColor) return activeColor;

    for (let p of lockedPaths) {
      if (p.cells.includes(id)) return p.color;
    }

    return "transparent";
  };

  // ===== GESTURE =====
  const handleGesture = (event: any) => {
    const { x, y } = event.nativeEvent;
    const index = getCellFromTouch(x, y);
    if (index === null) return;

    const cell = gridData[index];

    // ===== BẮT ĐẦU VẼ =====
    if (!activeColor) {
      if (cell.color) {
        // nếu màu đã tồn tại → xóa path cũ
        setLockedPaths((prev) => prev.filter((p) => p.color !== cell.color));

        setActiveColor(cell.color);
        setCurrentPath([index]);
      }
      return;
    }

    const last = currentPath[currentPath.length - 1];

    // ===== BACKTRACK =====
    if (currentPath.length >= 2) {
      const secondLast = currentPath[currentPath.length - 2];
      if (index === secondLast) {
        setCurrentPath(currentPath.slice(0, -1));
        return;
      }
    }

    // ===== VẼ TIẾP =====
    if (
      !currentPath.includes(index) &&
      isAdjacent(last, index) &&
      (!isCellOccupied(index) || cell.color === activeColor)
    ) {
      setCurrentPath([...currentPath, index]);
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

      if (newLocked.length === uniqueColors.length) {
        onWin();
      }
    }

    setCurrentPath([]);
    setActiveColor(null);
  };

  // ===== RENDER =====
  return (
    <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleEnd}>
      <View style={[styles.grid, { width: gridSize, height: gridSize }]}>
        {gridData.map((cell) => {
          const color = getCellColor(cell.id);

          let pathCells: number[] = [];

          if (currentPath.includes(cell.id)) {
            pathCells = currentPath;
          } else {
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
              style={[styles.cell, { width: cellSize, height: cellSize }]}
            >
              {/* PIPE */}
              {indexInPath !== -1 && (
                <>
                  {/* CENTER DOT (node) */}
                  <View
                    style={{
                      position: "absolute",
                      width: pipeWidth,
                      height: pipeWidth,
                      borderRadius: pipeWidth / 2,
                      backgroundColor: color,
                      zIndex: 5,
                    }}
                  />

                  {/* TOP */}
                  {connectTop && (
                    <View
                      style={{
                        position: "absolute",
                        width: pipeWidth,
                        height: cellSize / 2,
                        backgroundColor: color,
                        top: 0,
                      }}
                    />
                  )}

                  {/* BOTTOM */}
                  {connectBottom && (
                    <View
                      style={{
                        position: "absolute",
                        width: pipeWidth,
                        height: cellSize / 2,
                        backgroundColor: color,
                        bottom: 0,
                      }}
                    />
                  )}

                  {/* LEFT */}
                  {connectLeft && (
                    <View
                      style={{
                        position: "absolute",
                        height: pipeWidth,
                        width: cellSize / 2,
                        backgroundColor: color,
                        left: 0,
                      }}
                    />
                  )}

                  {/* RIGHT */}
                  {connectRight && (
                    <View
                      style={{
                        position: "absolute",
                        height: pipeWidth,
                        width: cellSize / 2,
                        backgroundColor: color,
                        right: 0,
                      }}
                    />
                  )}
                </>
              )}

              {/* DOT */}
              {cell.color && (
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
    borderWidth: 0.5,
    borderColor: "#333",
  },
});
