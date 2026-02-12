import { Level, Path } from "./types";

export const checkWin = (level: Level, lockedPaths: Path[]): boolean => {
  const uniqueColors = Array.from(new Set(level.dots.map((d) => d.color)));

  return lockedPaths.length === uniqueColors.length;
};
