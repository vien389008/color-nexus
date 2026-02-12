export type LevelData = {
  size: number;
  endpoints: {
    index: number;
    color: string;
  }[];
  blocked?: number[];
  connectors?: number[];
};

export const levels: LevelData[] = [
  // ================= LEVEL 1 (3x3 - full grid cơ bản)
  // 3 cột song song
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

  // ================= LEVEL 2 (4x4 - full grid, 4 cột)

  // ================= LEVEL 3 (4x4 - có block)
  {
    size: 5,
    endpoints: [
      { index: 2, color: "#d8d2c2" }, // vàng nhạt
      { index: 22, color: "#d8d2c2" },

      { index: 10, color: "#2f4f4f" }, // xanh đậm
      { index: 14, color: "#2f4f4f" },
    ],
    blocked: [0, 1, 3, 4, 5, 6, 8, 9, 15, 16, 18, 19, 20, 21, 23, 24],
    connectors: [12], // ô trung tâm cho phép cắt nhau
  },

  // ================= LEVEL 4 (5x5 - full grid 5 cột)
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 20, color: "#ff4d4d" },

      { index: 1, color: "#4d79ff" },
      { index: 21, color: "#4d79ff" },

      { index: 2, color: "#33cc99" },
      { index: 22, color: "#33cc99" },

      { index: 3, color: "#ffd24d" },
      { index: 23, color: "#ffd24d" },

      { index: 4, color: "#cc66ff" },
      { index: 24, color: "#cc66ff" },
    ],
  },

  // ================= LEVEL 5 (6x6 - full grid 6 cột)
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 30, color: "#ff4d4d" },

      { index: 1, color: "#4d79ff" },
      { index: 31, color: "#4d79ff" },

      { index: 2, color: "#33cc99" },
      { index: 32, color: "#33cc99" },

      { index: 3, color: "#ffd24d" },
      { index: 33, color: "#ffd24d" },

      { index: 4, color: "#cc66ff" },
      { index: 34, color: "#cc66ff" },

      { index: 5, color: "#ff944d" },
      { index: 35, color: "#ff944d" },
    ],
  },
];
