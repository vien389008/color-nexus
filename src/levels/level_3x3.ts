import { LevelData } from "./types";

export const level3x3: LevelData[] = [
  {
    size: 3,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 6, color: "#ff4d4d" },

      { index: 1, color: "#4d79ff" },
      { index: 7, color: "#4d79ff" },

      { index: 2, color: "#33cc99" },
      { index: 8, color: "#33cc99" },
    ],
  },
  {
    size: 3,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 2, color: "#ff4d4d" },

      { index: 3, color: "#4d79ff" },
      { index: 5, color: "#4d79ff" },

      { index: 6, color: "#33cc99" },
      { index: 8, color: "#33cc99" },
    ],
  },
  {
    size: 5,
    endpoints: [
      { index: 2, color: "#d8d2c2" },
      { index: 22, color: "#d8d2c2" },
      { index: 10, color: "#2f4f4f" },
      { index: 14, color: "#2f4f4f" },
    ],
    blocked: [0, 1, 3, 4, 5, 6, 8, 9, 15, 16, 18, 19, 20, 21, 23, 24],
    connectors: [12],
  },
];
