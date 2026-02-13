import { level3x3 } from "./level_3x3";
import { level5x5Block } from "./level_5x5_block";
import { LevelData } from "./types";

// Fisher–Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export const levels: LevelData[] = [
  ...shuffleArray(level3x3),
  ...shuffleArray(level5x5Block),
];
