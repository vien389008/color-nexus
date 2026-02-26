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

export default function Grid({
  levelData,
  onWin,
  undoToken = 0,
  hintToken = 0,
}: Props) {
  const { size } = levelData;

  const rawGridSize = screenWidth * 0.9;
  const cellSize = Math.floor(rawGridSize / size);
  const gridSize = cellSize * size;
  const pipeWidth = cellSize * 0.5;

  const {
    gridData,
    currentPath,
    lockedPaths,
    lockedMap,
    activeColor,
    handleGesture,
    handleEnd,
    hintedColor,
    hintPath,
    hintProgress,
    hintVisible,
  } = useGridLogic(levelData, cellSize, onWin, undoToken, hintToken);

  const visibleHintPath = hintPath.slice(0, hintProgress);

  return (
    <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleEnd}>
      <View style={[styles.grid, { width: gridSize, height: gridSize }]}>
        <GridLines size={size} cellSize={cellSize} gridSize={gridSize} />

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
              hintColor={hintedColor}
              hintPathCells={visibleHintPath}
              hintVisible={hintVisible}
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
});
