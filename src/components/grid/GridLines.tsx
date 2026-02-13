import React from "react";
import { View } from "react-native";

type Props = {
  size: number;
  cellSize: number;
  gridSize: number;
};

export default function GridLines({ size, cellSize, gridSize }: Props) {
  return (
    <>
      {/* Horizontal lines */}
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

      {/* Vertical lines */}
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
            zIndex: 1,
          }}
        />
      ))}
    </>
  );
}
