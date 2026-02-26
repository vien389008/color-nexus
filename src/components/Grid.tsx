import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { LevelData } from "../levels/types";
import GridCell from "./grid/GridCell";
import GridLines from "./grid/GridLines";
import { useGridLogic } from "./grid/useGridLogic";

type Props = {
  levelData: LevelData;
  onWin: () => void;
  hintRequestCount?: number;
  onHintStateChange?: (hasHint: boolean) => void;
};

const screenWidth = Dimensions.get("window").width;

export default function Grid({
  levelData,
  onWin,
  hintRequestCount = 0,
  onHintStateChange,
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
    hintPath,
    handleGesture,
    handleEnd,
    computeHintPath,
  } = useGridLogic(levelData, cellSize, onWin);

  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    if (!hintPath) {
      setHintVisible(true);
      onHintStateChange?.(false);
      return;
    }

    onHintStateChange?.(true);
    const timer = setInterval(() => {
      setHintVisible((prev) => !prev);
    }, 350);

    return () => clearInterval(timer);
  }, [hintPath, onHintStateChange]);

  useEffect(() => {
    if (hintRequestCount <= 0) return;
    computeHintPath();
  }, [computeHintPath, hintRequestCount]);

  return (
    <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleEnd}>
      <View style={[styles.grid, { width: gridSize, height: gridSize }]}>
        <GridLines size={size} cellSize={cellSize} gridSize={gridSize} />

        {gridData.map((cell) => {
          let pathCells: number[] = [];
          let color = lockedMap.get(cell.id) ?? "transparent";

          if (currentPath.includes(cell.id)) {
            pathCells = currentPath;
            color = activeColor ?? "transparent";
          } else if (lockedMap.has(cell.id)) {
            const locked = lockedPaths.find((path) => path.cells.includes(cell.id));
            if (locked) {
              pathCells = locked.cells;
              color = locked.color;
            }
          }

          const inHintPath = hintPath?.cells.includes(cell.id) ?? false;

          return (
            <GridCell
              key={cell.id}
              cell={cell}
              cellSize={cellSize}
              pipeWidth={pipeWidth}
              color={inHintPath ? (hintPath?.color ?? color) : color}
              pathCells={inHintPath ? (hintPath?.cells ?? pathCells) : pathCells}
              size={size}
              showHint={inHintPath}
              hintOpacity={hintVisible ? 0.45 : 0.12}
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
