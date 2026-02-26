import React from "react";
import { Image, View } from "react-native";

type Props = {
  cell: any;
  cellSize: number;
  pipeWidth: number;
  color: string;
  pathCells: number[];
  size: number;
  showHint?: boolean;
  hintOpacity?: number;
};

export default function GridCell({
  cell,
  cellSize,
  pipeWidth,
  color,
  pathCells,
  size,
  showHint = false,
  hintOpacity = 1,
}: Props) {
  const indexInPath = pathCells.indexOf(cell.id);
  const prev = indexInPath > 0 ? pathCells[indexInPath - 1] : null;
  const next =
    indexInPath !== -1 && indexInPath < pathCells.length - 1
      ? pathCells[indexInPath + 1]
      : null;

  const connectTop = prev === cell.id - size || next === cell.id - size;
  const connectBottom = prev === cell.id + size || next === cell.id + size;
  const connectLeft = prev === cell.id - 1 || next === cell.id - 1;
  const connectRight = prev === cell.id + 1 || next === cell.id + 1;

  const hintColor = showHint ? color : "transparent";

  return (
    <View
      style={{
        width: cellSize,
        height: cellSize,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cell.blocked && (
        <Image
          source={require("../../../assets/images/block.png")}
          style={{
            position: "absolute",
            width: cellSize,
            height: cellSize,
            resizeMode: "cover",
            zIndex: 0,
          }}
        />
      )}

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

      {showHint && indexInPath !== -1 && (
        <>
          <View
            style={{
              position: "absolute",
              width: pipeWidth,
              height: pipeWidth,
              borderRadius: pipeWidth / 2,
              backgroundColor: hintColor,
              opacity: hintOpacity,
              zIndex: 15,
            }}
          />

          {connectTop && (
            <View
              style={{
                position: "absolute",
                width: pipeWidth,
                height: cellSize / 2,
                backgroundColor: hintColor,
                opacity: hintOpacity,
                top: 0,
                zIndex: 14,
              }}
            />
          )}

          {connectBottom && (
            <View
              style={{
                position: "absolute",
                width: pipeWidth,
                height: cellSize / 2,
                backgroundColor: hintColor,
                opacity: hintOpacity,
                bottom: 0,
                zIndex: 14,
              }}
            />
          )}

          {connectLeft && (
            <View
              style={{
                position: "absolute",
                height: pipeWidth,
                width: cellSize / 2,
                backgroundColor: hintColor,
                opacity: hintOpacity,
                left: 0,
                zIndex: 14,
              }}
            />
          )}

          {connectRight && (
            <View
              style={{
                position: "absolute",
                height: pipeWidth,
                width: cellSize / 2,
                backgroundColor: hintColor,
                opacity: hintOpacity,
                right: 0,
                zIndex: 14,
              }}
            />
          )}
        </>
      )}

      {cell.connector && (
        <Image
          source={require("../../../assets/images/connectors.png")}
          style={{
            position: "absolute",
            width: cellSize * 0.8,
            height: cellSize * 0.8,
            resizeMode: "contain",
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
}
