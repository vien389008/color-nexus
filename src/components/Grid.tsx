import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { LevelData } from "../levels/types";
import GridCell from "./grid/GridCell";
import GridLines from "./grid/GridLines";
import { useGridLogic } from "./grid/useGridLogic";

type Props = {
  levelData: LevelData;
  onWin: () => void;
  undoToken?: number;
  hintToken?: number;
};

const screenWidth = Dimensions.get("window").width;

export default function Grid({ levelData, onWin, undoToken = 0, hintToken = 0 }: Props) {
  const { size } = levelData;

  /* ===== GRID SIZE CALC (GIỮ NGUYÊN FIX SỐ LẺ) ===== */
  const rawGridSize = screenWidth * 0.9;
  const cellSize = Math.floor(rawGridSize / size);
  const gridSize = cellSize * size;
  const pipeWidth = cellSize * 0.5;

  /* ===== LOGIC ===== */
  const {
    gridData,
    currentPath,
    lockedPaths,
    lockedMap,
    activeColor,
    handleGesture,
    handleEnd,
    hintedColor,
  } = useGridLogic(levelData, cellSize, onWin, undoToken, hintToken);

  return (
    <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleEnd}>
      <View style={[styles.grid, { width: gridSize, height: gridSize }]}>
        {/* ===== GRID LINES (KHÔNG ĐƯỢC MẤT) ===== */}
        <GridLines size={size} cellSize={cellSize} gridSize={gridSize} />


        {hintedColor && (
          <View style={styles.hintBadge}>
            <View style={[styles.hintDot, { backgroundColor: hintedColor }]} />
          </View>
        )}

        {/* ===== CELLS ===== */}
        {gridData.map((cell) => {
          let pathCells: number[] = [];

          if (currentPath.includes(cell.id)) {
            pathCells = currentPath;
          } else if (lockedMap.has(cell.id)) {
            const locked = lockedPaths.find((p) => p.cells.includes(cell.id));
            if (locked) pathCells = locked.cells;
          }

          const color =
            currentPath.includes(cell.id) && activeColor
              ? activeColor
              : (lockedMap.get(cell.id) ?? "transparent");

          return (
            <GridCell
              key={cell.id}
              cell={cell}
              cellSize={cellSize}
              pipeWidth={pipeWidth}
              color={color}
              pathCells={pathCells}
              size={size}
            />
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
  hintBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 300,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "rgba(255,255,255,0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  hintDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
