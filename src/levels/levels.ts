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

  // Map 1
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 12, color: "#ff4d4d" },
      { index: 1, color: "#4d79ff" },
      { index: 13, color: "#4d79ff" },
      { index: 2, color: "#33cc99" },
      { index: 14, color: "#33cc99" },
      { index: 3, color: "#ffcc33" },
      { index: 15, color: "#ffcc33" },
    ],
  },

  // Map 2
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 3, color: "#ff4d4d" },
      { index: 4, color: "#4d79ff" },
      { index: 7, color: "#4d79ff" },
      { index: 8, color: "#33cc99" },
      { index: 11, color: "#33cc99" },
      { index: 12, color: "#ffcc33" },
      { index: 15, color: "#ffcc33" },
    ],
  },

  // Map 3
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 5, color: "#ff4d4d" },
      { index: 3, color: "#4d79ff" },
      { index: 6, color: "#4d79ff" },
      { index: 12, color: "#33cc99" },
      { index: 15, color: "#33cc99" },
      { index: 9, color: "#ffd24d" },
      { index: 10, color: "#ffd24d" },
    ],
  },

  // Map 4
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 8, color: "#ff4d4d" },
      { index: 2, color: "#4d79ff" },
      { index: 10, color: "#4d79ff" },
      { index: 5, color: "#33cc99" },
      { index: 7, color: "#33cc99" },
      { index: 12, color: "#ffcc33" },
      { index: 15, color: "#ffcc33" },
    ],
  },

  // Map 5
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 12, color: "#ff4d4d" },
      { index: 3, color: "#4d79ff" },
      { index: 15, color: "#4d79ff" },
      { index: 1, color: "#33cc99" },
      { index: 13, color: "#33cc99" },
      { index: 2, color: "#ffcc33" },
      { index: 14, color: "#ffcc33" },
    ],
  },

  // Map 6
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 12, color: "#ff4d4d" },
      { index: 1, color: "#4d79ff" },
      { index: 13, color: "#4d79ff" },
      { index: 2, color: "#33cc99" },
      { index: 10, color: "#33cc99" },
      { index: 3, color: "#ffcc33" },
      { index: 11, color: "#ffcc33" },
    ],
  },

  // Map 7
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 3, color: "#ff4d4d" },
      { index: 4, color: "#4d79ff" },
      { index: 15, color: "#4d79ff" },
      { index: 7, color: "#33cc99" },
      { index: 8, color: "#33cc99" },
      { index: 11, color: "#ffcc33" },
      { index: 12, color: "#ffcc33" },
    ],
  },

  // Map 8
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 5, color: "#ff4d4d" },
      { index: 2, color: "#4d79ff" },
      { index: 7, color: "#4d79ff" },
      { index: 8, color: "#33cc99" },
      { index: 13, color: "#33cc99" },
      { index: 10, color: "#ffcc33" },
      { index: 15, color: "#ffcc33" },
    ],
  },

  // Map 9
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ff4d4d" },
      { index: 15, color: "#ff4d4d" },
      { index: 3, color: "#4d79ff" },
      { index: 12, color: "#4d79ff" },
      { index: 1, color: "#33cc99" },
      { index: 2, color: "#33cc99" },
      { index: 13, color: "#ffd24d" },
      { index: 14, color: "#ffd24d" },
    ],
  },

  // Map 10
  {
    size: 4,
    endpoints: [
      { index: 4, color: "#ff4d4d" },
      { index: 7, color: "#ff4d4d" },
      { index: 8, color: "#4d79ff" },
      { index: 11, color: "#4d79ff" },
      { index: 0, color: "#33cc99" },
      { index: 12, color: "#33cc99" },
      { index: 3, color: "#ffd24d" },
      { index: 15, color: "#ffd24d" },
    ],
  },

  // Map 11
  {
    size: 4,
    endpoints: [
      { index: 5, color: "#ff4d4d" },
      { index: 10, color: "#ff4d4d" },
      { index: 1, color: "#4d79ff" },
      { index: 14, color: "#4d79ff" },
      { index: 2, color: "#33cc99" },
      { index: 13, color: "#33cc99" },
      { index: 4, color: "#ffd24d" },
      { index: 11, color: "#ffd24d" },
    ],
  },

  // Map 12
  {
    size: 4,
    endpoints: [
      { index: 6, color: "#ff4d4d" },
      { index: 9, color: "#ff4d4d" },
      { index: 0, color: "#4d79ff" },
      { index: 3, color: "#4d79ff" },
      { index: 12, color: "#33cc99" },
      { index: 15, color: "#33cc99" },
      { index: 5, color: "#ffd24d" },
      { index: 10, color: "#ffd24d" },
    ],
  },

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
