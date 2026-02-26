import React from "react";
import { Image, View } from "react-native";

type Props = {
  cell: any;
  cellSize: number;
  pipeWidth: number;
  color: string;
  pathCells: number[];
  size: number;
  hintColor: string | null;
  hintPathCells: number[];
  hintVisible: boolean;
};

const PipeLayer = ({
  indexInPath,
  cell,
  pathCells,
  size,
  cellSize,
  pipeWidth,
  color,
  zIndex,
  opacity,
}: {
  indexInPath: number;
  cell: any;
  pathCells: number[];
  size: number;
  cellSize: number;
  pipeWidth: number;
  color: string;
  zIndex: number;
  opacity?: number;
}) => {
  if (indexInPath === -1) return null;

  const prev = indexInPath > 0 ? pathCells[indexInPath - 1] : null;
  const next =
    indexInPath !== -1 && indexInPath < pathCells.length - 1
      ? pathCells[indexInPath + 1]
      : null;

  const connectTop = prev === cell.id - size || next === cell.id - size;
  const connectBottom = prev === cell.id + size || next === cell.id + size;
  const connectLeft = prev === cell.id - 1 || next === cell.id - 1;
  const connectRight = prev === cell.id + 1 || next === cell.id + 1;

  return (
    <>
      <View
        style={{
          position: "absolute",
          width: pipeWidth,
          height: pipeWidth,
          borderRadius: pipeWidth / 2,
          backgroundColor: color,
          zIndex,
          opacity,
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
            zIndex,
            opacity,
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
            zIndex,
            opacity,
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
            zIndex,
            opacity,
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
            zIndex,
            opacity,
          }}
        />
      )}
    </>
  );
};

export default function GridCell({
  cell,
  cellSize,
  pipeWidth,
  color,
  pathCells,
  size,
  hintColor,
  hintPathCells,
  hintVisible,
}: Props) {
  const indexInPath = pathCells.indexOf(cell.id);
  const indexInHintPath = hintPathCells.indexOf(cell.id);

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

      {hintColor && hintVisible && (
        <PipeLayer
          indexInPath={indexInHintPath}
          cell={cell}
          pathCells={hintPathCells}
          size={size}
          cellSize={cellSize}
          pipeWidth={pipeWidth}
          color={hintColor}
          zIndex={7}
          opacity={0.45}
        />
      )}

      <PipeLayer
        indexInPath={indexInPath}
        cell={cell}
        pathCells={pathCells}
        size={size}
        cellSize={cellSize}
        pipeWidth={pipeWidth}
        color={color}
        zIndex={10}
      />

      {cell.connector && (
        <Image
          source={require("../../../assets/images/connectors.png")}
          style={{
            position: "absolute",
            width: cellSize,
            height: cellSize,
            resizeMode: "contain",
            zIndex: 100,
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
