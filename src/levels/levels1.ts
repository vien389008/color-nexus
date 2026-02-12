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
      { index: 0, color: "#917dc5" },
      { index: 2, color: "#917dc5" },
      { index: 3, color: "#6e8dc5" },
      { index: 11, color: "#6e8dc5" },
      { index: 4, color: "#95c17f" },
      { index: 10, color: "#95c17f" },
      { index: 12, color: "#8bbf47" },
      { index: 15, color: "#8bbf47" },
    ],
  },

  // Map 2
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#b6bbc5" },
      { index: 5, color: "#b6bbc5" },
      { index: 2, color: "#9458a2" },
      { index: 7, color: "#9458a2" },
      { index: 4, color: "#ac8976" },
      { index: 9, color: "#ac8976" },
      { index: 6, color: "#6a4f82" },
      { index: 12, color: "#6a4f82" },
    ],
  },

  // Map 3
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#574668" },
      { index: 5, color: "#574668" },
      { index: 1, color: "#4052a8" },
      { index: 3, color: "#4052a8" },
      { index: 6, color: "#39419a" },
      { index: 9, color: "#39419a" },
      { index: 7, color: "#36b672" },
      { index: 8, color: "#36b672" },
    ],
  },

  // Map 4
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#c1775b" },
      { index: 5, color: "#c1775b" },
      { index: 1, color: "#38c76e" },
      { index: 3, color: "#38c76e" },
      { index: 6, color: "#af46b5" },
      { index: 11, color: "#af46b5" },
      { index: 8, color: "#3d79bf" },
      { index: 15, color: "#3d79bf" },
    ],
  },

  // Map 5
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#a0458d" },
      { index: 8, color: "#a0458d" },
      { index: 1, color: "#933a47" },
      { index: 6, color: "#933a47" },
      { index: 3, color: "#5b5367" },
      { index: 5, color: "#5b5367" },
      { index: 12, color: "#627f33" },
      { index: 15, color: "#627f33" },
    ],
  },

  // Map 6
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#a29e69" },
      { index: 8, color: "#a29e69" },
      { index: 1, color: "#413d61" },
      { index: 3, color: "#413d61" },
      { index: 5, color: "#bbb83b" },
      { index: 7, color: "#bbb83b" },
      { index: 9, color: "#439e3b" },
      { index: 12, color: "#439e3b" },
    ],
  },

  // Map 7
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#60b777" },
      { index: 2, color: "#60b777" },
      { index: 3, color: "#993db8" },
      { index: 6, color: "#993db8" },
      { index: 4, color: "#63c35d" },
      { index: 9, color: "#63c35d" },
      { index: 8, color: "#5d9ec1" },
      { index: 15, color: "#5d9ec1" },
    ],
  },

  // Map 8
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#5d6cab" },
      { index: 8, color: "#5d6cab" },
      { index: 1, color: "#a09a4e" },
      { index: 6, color: "#a09a4e" },
      { index: 3, color: "#7f66bf" },
      { index: 5, color: "#7f66bf" },
      { index: 12, color: "#9aba4e" },
      { index: 15, color: "#9aba4e" },
    ],
  },

  // Map 9
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#4b3f9a" },
      { index: 5, color: "#4b3f9a" },
      { index: 1, color: "#5c8d3f" },
      { index: 3, color: "#5c8d3f" },
      { index: 6, color: "#ab575e" },
      { index: 11, color: "#ab575e" },
      { index: 8, color: "#46b33e" },
      { index: 15, color: "#46b33e" },
    ],
  },

  // Map 10
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#975e4d" },
      { index: 8, color: "#975e4d" },
      { index: 1, color: "#4fbb60" },
      { index: 6, color: "#4fbb60" },
      { index: 3, color: "#514a96" },
      { index: 15, color: "#514a96" },
      { index: 5, color: "#899595" },
      { index: 12, color: "#899595" },
    ],
  },

  // Map 11
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#6c883a" },
      { index: 5, color: "#6c883a" },
      { index: 1, color: "#71a499" },
      { index: 6, color: "#71a499" },
      { index: 3, color: "#a2437c" },
      { index: 11, color: "#a2437c" },
      { index: 8, color: "#324383" },
      { index: 15, color: "#324383" },
    ],
  },

  // Map 12
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#505854" },
      { index: 2, color: "#505854" },
      { index: 3, color: "#b4788c" },
      { index: 6, color: "#b4788c" },
      { index: 4, color: "#9fb737" },
      { index: 12, color: "#9fb737" },
      { index: 5, color: "#c681ae" },
      { index: 10, color: "#c681ae" },
    ],
  },

  // Map 13
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#827499" },
      { index: 2, color: "#827499" },
      { index: 3, color: "#5a7594" },
      { index: 11, color: "#5a7594" },
      { index: 4, color: "#9b667b" },
      { index: 10, color: "#9b667b" },
      { index: 12, color: "#95796d" },
      { index: 15, color: "#95796d" },
    ],
  },

  // Map 14
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#c432a3" },
      { index: 8, color: "#c432a3" },
      { index: 1, color: "#8667af" },
      { index: 3, color: "#8667af" },
      { index: 5, color: "#816b99" },
      { index: 7, color: "#816b99" },
      { index: 9, color: "#72b5c2" },
      { index: 12, color: "#72b5c2" },
    ],
  },

  // Map 15
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#50a691" },
      { index: 5, color: "#50a691" },
      { index: 2, color: "#938a69" },
      { index: 7, color: "#938a69" },
      { index: 4, color: "#358bc3" },
      { index: 12, color: "#358bc3" },
      { index: 6, color: "#423595" },
      { index: 11, color: "#423595" },
    ],
  },

  // Map 16
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ac6c66" },
      { index: 8, color: "#ac6c66" },
      { index: 1, color: "#9a8a89" },
      { index: 6, color: "#9a8a89" },
      { index: 2, color: "#68685b" },
      { index: 7, color: "#68685b" },
      { index: 9, color: "#6e8a96" },
      { index: 12, color: "#6e8a96" },
    ],
  },

  // Map 17
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#889bba" },
      { index: 2, color: "#889bba" },
      { index: 3, color: "#6d49a6" },
      { index: 6, color: "#6d49a6" },
      { index: 4, color: "#6cbd89" },
      { index: 9, color: "#6cbd89" },
      { index: 8, color: "#7073b0" },
      { index: 15, color: "#7073b0" },
    ],
  },

  // Map 18
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#8e8f38" },
      { index: 2, color: "#8e8f38" },
      { index: 3, color: "#5366ad" },
      { index: 6, color: "#5366ad" },
      { index: 4, color: "#8b5339" },
      { index: 5, color: "#8b5339" },
      { index: 10, color: "#4f7f4c" },
      { index: 12, color: "#4f7f4c" },
    ],
  },

  // Map 19
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#a94834" },
      { index: 5, color: "#a94834" },
      { index: 2, color: "#6f6855" },
      { index: 7, color: "#6f6855" },
      { index: 4, color: "#5b5ab9" },
      { index: 9, color: "#5b5ab9" },
      { index: 6, color: "#4f705b" },
      { index: 12, color: "#4f705b" },
    ],
  },

  // Map 20
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#a45c4d" },
      { index: 8, color: "#a45c4d" },
      { index: 1, color: "#a84db3" },
      { index: 6, color: "#a84db3" },
      { index: 2, color: "#37c6be" },
      { index: 7, color: "#37c6be" },
      { index: 9, color: "#735d69" },
      { index: 12, color: "#735d69" },
    ],
  },

  // Map 21
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#667c8a" },
      { index: 5, color: "#667c8a" },
      { index: 2, color: "#4f9a8b" },
      { index: 7, color: "#4f9a8b" },
      { index: 4, color: "#b7b573" },
      { index: 9, color: "#b7b573" },
      { index: 6, color: "#84ad74" },
      { index: 12, color: "#84ad74" },
    ],
  },

  // Map 22
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#a0556c" },
      { index: 8, color: "#a0556c" },
      { index: 1, color: "#3ec0ac" },
      { index: 3, color: "#3ec0ac" },
      { index: 5, color: "#543f6d" },
      { index: 7, color: "#543f6d" },
      { index: 9, color: "#39aa4e" },
      { index: 12, color: "#39aa4e" },
    ],
  },

  // Map 23
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#526ab4" },
      { index: 2, color: "#526ab4" },
      { index: 3, color: "#c1a08f" },
      { index: 11, color: "#c1a08f" },
      { index: 4, color: "#793671" },
      { index: 12, color: "#793671" },
      { index: 5, color: "#af889c" },
      { index: 15, color: "#af889c" },
    ],
  },

  // Map 24
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#8ec653" },
      { index: 2, color: "#8ec653" },
      { index: 3, color: "#4f9f76" },
      { index: 6, color: "#4f9f76" },
      { index: 4, color: "#ba589b" },
      { index: 5, color: "#ba589b" },
      { index: 10, color: "#3b90ab" },
      { index: 12, color: "#3b90ab" },
    ],
  },

  // Map 25
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#3ab954" },
      { index: 8, color: "#3ab954" },
      { index: 1, color: "#82b4ba" },
      { index: 9, color: "#82b4ba" },
      { index: 2, color: "#4cc445" },
      { index: 7, color: "#4cc445" },
      { index: 6, color: "#347f4b" },
      { index: 12, color: "#347f4b" },
    ],
  },

  // Map 26
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#4293a2" },
      { index: 8, color: "#4293a2" },
      { index: 1, color: "#43a390" },
      { index: 6, color: "#43a390" },
      { index: 3, color: "#61548b" },
      { index: 15, color: "#61548b" },
      { index: 5, color: "#3835c5" },
      { index: 12, color: "#3835c5" },
    ],
  },

  // Map 27
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#9b3659" },
      { index: 8, color: "#9b3659" },
      { index: 1, color: "#46ab6b" },
      { index: 3, color: "#46ab6b" },
      { index: 5, color: "#6eb3b7" },
      { index: 10, color: "#6eb3b7" },
      { index: 6, color: "#a54e9c" },
      { index: 12, color: "#a54e9c" },
    ],
  },

  // Map 28
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#3f8355" },
      { index: 5, color: "#3f8355" },
      { index: 1, color: "#65989b" },
      { index: 3, color: "#65989b" },
      { index: 6, color: "#877745" },
      { index: 9, color: "#877745" },
      { index: 7, color: "#54b051" },
      { index: 8, color: "#54b051" },
    ],
  },

  // Map 29
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#9c6974" },
      { index: 5, color: "#9c6974" },
      { index: 2, color: "#c5b17d" },
      { index: 3, color: "#c5b17d" },
      { index: 4, color: "#334a74" },
      { index: 12, color: "#334a74" },
      { index: 9, color: "#946850" },
      { index: 13, color: "#946850" },
    ],
  },

  // Map 30
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#4f899d" },
      { index: 5, color: "#4f899d" },
      { index: 2, color: "#789a9d" },
      { index: 7, color: "#789a9d" },
      { index: 4, color: "#98bb7d" },
      { index: 9, color: "#98bb7d" },
      { index: 6, color: "#3b4bc3" },
      { index: 12, color: "#3b4bc3" },
    ],
  },

  // ================= LEVEL 3 (4x4 - có block)

  // Map 1
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#6266b5" },
      { index: 12, color: "#6266b5" },
      { index: 3, color: "#b7897d" },
      { index: 15, color: "#b7897d" },
    ],
    blocked: [13, 9, 2, 14],
  },

  // Map 2
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#894f99" },
      { index: 15, color: "#894f99" },
      { index: 2, color: "#86a173" },
      { index: 3, color: "#86a173" },
    ],
    blocked: [14, 6, 7],
  },

  // Map 3
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#604969" },
      { index: 1, color: "#604969" },
      { index: 2, color: "#c4c2c7" },
      { index: 15, color: "#c4c2c7" },
    ],
    blocked: [5, 3, 4],
  },

  // Map 4
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#4191b8" },
      { index: 4, color: "#4191b8" },
      { index: 1, color: "#a63c97" },
      { index: 11, color: "#a63c97" },
    ],
    blocked: [3, 5, 7],
  },

  // Map 5
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#a7b298" },
      { index: 1, color: "#a7b298" },
      { index: 2, color: "#66c3a9" },
      { index: 13, color: "#66c3a9" },
    ],
    blocked: [14, 15, 12],
  },

  // Map 6
  {
    size: 4,
    endpoints: [
      { index: 1, color: "#b2c0a8" },
      { index: 3, color: "#b2c0a8" },
      { index: 4, color: "#5e6354" },
      { index: 12, color: "#5e6354" },
    ],
    blocked: [13, 0],
  },

  // Map 7
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#854c63" },
      { index: 7, color: "#854c63" },
      { index: 4, color: "#56bfa9" },
      { index: 15, color: "#56bfa9" },
    ],
    blocked: [3, 11, 2],
  },

  // Map 8
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#c76ab8" },
      { index: 4, color: "#c76ab8" },
      { index: 1, color: "#688c3e" },
      { index: 2, color: "#688c3e" },
    ],
    blocked: [3, 10],
  },

  // Map 9
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#7a565f" },
      { index: 1, color: "#7a565f" },
      { index: 2, color: "#c6be89" },
      { index: 3, color: "#c6be89" },
    ],
    blocked: [4, 5],
  },

  // Map 10
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#894d52" },
      { index: 4, color: "#894d52" },
      { index: 1, color: "#859e52" },
      { index: 13, color: "#859e52" },
    ],
    blocked: [8, 9, 15, 12],
  },

  // Map 11
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ad5c4c" },
      { index: 5, color: "#ad5c4c" },
      { index: 2, color: "#c5626c" },
      { index: 12, color: "#c5626c" },
    ],
    blocked: [8, 9, 4],
  },

  // Map 12
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#95c73f" },
      { index: 13, color: "#95c73f" },
      { index: 1, color: "#5e99b0" },
      { index: 3, color: "#5e99b0" },
    ],
    blocked: [6, 2],
  },

  // Map 13
  {
    size: 4,
    endpoints: [
      { index: 1, color: "#6f45b4" },
      { index: 14, color: "#6f45b4" },
      { index: 4, color: "#b56440" },
      { index: 12, color: "#b56440" },
    ],
    blocked: [13, 0],
  },

  // Map 14
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#7652a6" },
      { index: 1, color: "#7652a6" },
      { index: 2, color: "#979698" },
      { index: 4, color: "#979698" },
    ],
    blocked: [5, 9],
  },

  // Map 15
  {
    size: 4,
    endpoints: [
      { index: 1, color: "#b04d8c" },
      { index: 10, color: "#b04d8c" },
      { index: 5, color: "#68b17d" },
      { index: 12, color: "#68b17d" },
    ],
    blocked: [0, 4, 6, 13],
  },

  // Map 16
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#be809d" },
      { index: 1, color: "#be809d" },
      { index: 2, color: "#b78367" },
      { index: 3, color: "#b78367" },
    ],
    blocked: [4, 10],
  },

  // Map 17
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#b6bbb4" },
      { index: 2, color: "#b6bbb4" },
      { index: 7, color: "#6249ae" },
      { index: 15, color: "#6249ae" },
    ],
    blocked: [6, 3, 13, 12],
  },

  // Map 18
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#56b14e" },
      { index: 4, color: "#56b14e" },
      { index: 2, color: "#45609e" },
      { index: 12, color: "#45609e" },
    ],
    blocked: [15, 1, 8, 14],
  },

  // Map 19
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#4d5bb5" },
      { index: 1, color: "#4d5bb5" },
      { index: 2, color: "#477270" },
      { index: 12, color: "#477270" },
    ],
    blocked: [6, 13],
  },

  // Map 20
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#b244c3" },
      { index: 8, color: "#b244c3" },
      { index: 13, color: "#a95aae" },
      { index: 15, color: "#a95aae" },
    ],
    blocked: [9, 12],
  },

  // Map 1
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#79b6a5" },
      { index: 4, color: "#79b6a5" },
      { index: 1, color: "#6aa369" },
      { index: 2, color: "#6aa369" },
      { index: 3, color: "#8591a9" },
      { index: 15, color: "#8591a9" },
    ],
    blocked: [12, 8],
  },

  // Map 2
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#9d5650" },
      { index: 5, color: "#9d5650" },
      { index: 2, color: "#8e994a" },
      { index: 3, color: "#8e994a" },
      { index: 7, color: "#65b17c" },
      { index: 8, color: "#65b17c" },
    ],
    blocked: [9, 4, 15, 6],
  },

  // Map 3
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#924e5c" },
      { index: 4, color: "#924e5c" },
      { index: 1, color: "#739c45" },
      { index: 13, color: "#739c45" },
      { index: 3, color: "#a0877e" },
      { index: 15, color: "#a0877e" },
    ],
    blocked: [14, 2],
  },

  // Map 4
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#849b88" },
      { index: 5, color: "#849b88" },
      { index: 1, color: "#a4c44f" },
      { index: 7, color: "#a4c44f" },
      { index: 8, color: "#7b995c" },
      { index: 15, color: "#7b995c" },
    ],
    blocked: [6, 11],
  },

  // Map 5
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#927556" },
      { index: 4, color: "#927556" },
      { index: 3, color: "#c38f60" },
      { index: 7, color: "#c38f60" },
      { index: 6, color: "#be9e4b" },
      { index: 8, color: "#be9e4b" },
    ],
    blocked: [5, 1, 12, 2],
  },

  // Map 6
  {
    size: 4,
    endpoints: [
      { index: 1, color: "#ab977c" },
      { index: 6, color: "#ab977c" },
      { index: 3, color: "#8cb4c0" },
      { index: 14, color: "#8cb4c0" },
      { index: 4, color: "#537761" },
      { index: 9, color: "#537761" },
    ],
    blocked: [2, 0, 10],
  },

  // Map 7
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#8098c5" },
      { index: 10, color: "#8098c5" },
      { index: 2, color: "#885b97" },
      { index: 7, color: "#885b97" },
      { index: 13, color: "#90c3ae" },
      { index: 15, color: "#90c3ae" },
    ],
    blocked: [3, 11, 12],
  },

  // Map 8
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#a86dc3" },
      { index: 4, color: "#a86dc3" },
      { index: 1, color: "#a95d9d" },
      { index: 6, color: "#a95d9d" },
      { index: 3, color: "#6c945f" },
      { index: 8, color: "#6c945f" },
    ],
    blocked: [9, 15, 2],
  },

  // Map 9
  {
    size: 4,
    endpoints: [
      { index: 1, color: "#6c9996" },
      { index: 5, color: "#6c9996" },
      { index: 2, color: "#5bb772" },
      { index: 15, color: "#5bb772" },
      { index: 4, color: "#9e5f9e" },
      { index: 13, color: "#9e5f9e" },
    ],
    blocked: [9, 0, 14],
  },

  // Map 10
  {
    size: 4,
    endpoints: [
      { index: 1, color: "#aa54b3" },
      { index: 8, color: "#aa54b3" },
      { index: 2, color: "#c39fa3" },
      { index: 7, color: "#c39fa3" },
      { index: 10, color: "#96737f" },
      { index: 13, color: "#96737f" },
    ],
    blocked: [3, 9, 0, 12],
  },

  // Map 11
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#3cac3d" },
      { index: 4, color: "#3cac3d" },
      { index: 1, color: "#7e41be" },
      { index: 3, color: "#7e41be" },
      { index: 6, color: "#707e9e" },
      { index: 8, color: "#707e9e" },
    ],
    blocked: [5, 12, 13],
  },

  // Map 12
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#545ba3" },
      { index: 4, color: "#545ba3" },
      { index: 1, color: "#709552" },
      { index: 15, color: "#709552" },
      { index: 5, color: "#9c78c2" },
      { index: 12, color: "#9c78c2" },
    ],
    blocked: [14, 8],
  },

  // Map 13
  {
    size: 4,
    endpoints: [
      { index: 1, color: "#715fa9" },
      { index: 5, color: "#715fa9" },
      { index: 3, color: "#b0a253" },
      { index: 6, color: "#b0a253" },
      { index: 4, color: "#a19b59" },
      { index: 9, color: "#a19b59" },
    ],
    blocked: [0, 2],
  },

  // Map 14
  {
    size: 4,
    endpoints: [
      { index: 1, color: "#beb348" },
      { index: 5, color: "#beb348" },
      { index: 3, color: "#8f567e" },
      { index: 6, color: "#8f567e" },
      { index: 4, color: "#bf8868" },
      { index: 15, color: "#bf8868" },
    ],
    blocked: [2, 11, 0],
  },

  // Map 15
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#926947" },
      { index: 4, color: "#926947" },
      { index: 1, color: "#bb5c47" },
      { index: 12, color: "#bb5c47" },
      { index: 2, color: "#9070be" },
      { index: 15, color: "#9070be" },
    ],
    blocked: [13, 14],
  },

  // Map 16
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#b39b76" },
      { index: 4, color: "#b39b76" },
      { index: 1, color: "#9d95bb" },
      { index: 5, color: "#9d95bb" },
      { index: 2, color: "#c0887b" },
      { index: 6, color: "#c0887b" },
    ],
    blocked: [12, 8],
  },

  // Map 17
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#9d4190" },
      { index: 7, color: "#9d4190" },
      { index: 8, color: "#53a853" },
      { index: 13, color: "#53a853" },
      { index: 10, color: "#53afb9" },
      { index: 15, color: "#53afb9" },
    ],
    blocked: [14, 6, 12],
  },

  // Map 18
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#ad8f84" },
      { index: 1, color: "#ad8f84" },
      { index: 2, color: "#b77d66" },
      { index: 7, color: "#b77d66" },
      { index: 5, color: "#7040be" },
      { index: 8, color: "#7040be" },
    ],
    blocked: [6, 4],
  },

  // Map 19
  {
    size: 4,
    endpoints: [
      { index: 1, color: "#ad7f60" },
      { index: 2, color: "#ad7f60" },
      { index: 3, color: "#aa5fc4" },
      { index: 7, color: "#aa5fc4" },
      { index: 4, color: "#a256c5" },
      { index: 13, color: "#a256c5" },
    ],
    blocked: [0, 12],
  },

  // Map 20
  {
    size: 4,
    endpoints: [
      { index: 0, color: "#403e90" },
      { index: 4, color: "#403e90" },
      { index: 1, color: "#80b74e" },
      { index: 2, color: "#80b74e" },
      { index: 12, color: "#657648" },
      { index: 15, color: "#657648" },
    ],
    blocked: [11, 8],
  },
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
  // Map 1
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8865b6" },
      { index: 6, color: "#8865b6" },
      { index: 2, color: "#bac767" },
      { index: 4, color: "#bac767" },
      { index: 5, color: "#aa5c8d" },
      { index: 15, color: "#aa5c8d" },
      { index: 7, color: "#a64d7c" },
      { index: 11, color: "#a64d7c" },
      { index: 8, color: "#afc332" },
      { index: 20, color: "#afc332" },
    ],
  },

  // Map 2
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#686983" },
      { index: 6, color: "#686983" },
      { index: 1, color: "#79b87b" },
      { index: 3, color: "#79b87b" },
      { index: 4, color: "#556fc0" },
      { index: 8, color: "#556fc0" },
      { index: 7, color: "#9ba757" },
      { index: 13, color: "#9ba757" },
      { index: 10, color: "#3c4c9f" },
      { index: 14, color: "#3c4c9f" },
    ],
  },

  // Map 3
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#3e5588" },
      { index: 6, color: "#3e5588" },
      { index: 1, color: "#90a88c" },
      { index: 3, color: "#90a88c" },
      { index: 4, color: "#55c085" },
      { index: 8, color: "#55c085" },
      { index: 7, color: "#9a8c40" },
      { index: 11, color: "#9a8c40" },
      { index: 10, color: "#766e6f" },
      { index: 22, color: "#766e6f" },
    ],
  },

  // Map 4
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#bb46b2" },
      { index: 6, color: "#bb46b2" },
      { index: 1, color: "#566fb8" },
      { index: 3, color: "#566fb8" },
      { index: 4, color: "#bb7167" },
      { index: 8, color: "#bb7167" },
      { index: 7, color: "#c37ca1" },
      { index: 11, color: "#c37ca1" },
      { index: 10, color: "#a8bb74" },
      { index: 16, color: "#a8bb74" },
    ],
  },

  // Map 5
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6eb7b0" },
      { index: 2, color: "#6eb7b0" },
      { index: 3, color: "#abb972" },
      { index: 9, color: "#abb972" },
      { index: 5, color: "#9cb9b5" },
      { index: 11, color: "#9cb9b5" },
      { index: 6, color: "#3447a6" },
      { index: 8, color: "#3447a6" },
      { index: 12, color: "#394092" },
      { index: 24, color: "#394092" },
    ],
  },

  // Map 6
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#aa73be" },
      { index: 6, color: "#aa73be" },
      { index: 1, color: "#924d5b" },
      { index: 3, color: "#924d5b" },
      { index: 4, color: "#743c60" },
      { index: 14, color: "#743c60" },
      { index: 7, color: "#ab4996" },
      { index: 13, color: "#ab4996" },
      { index: 10, color: "#417a85" },
      { index: 18, color: "#417a85" },
    ],
  },

  // Map 7
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#605ab6" },
      { index: 10, color: "#605ab6" },
      { index: 1, color: "#5b3690" },
      { index: 3, color: "#5b3690" },
      { index: 4, color: "#c732a2" },
      { index: 14, color: "#c732a2" },
      { index: 6, color: "#4175ac" },
      { index: 8, color: "#4175ac" },
      { index: 11, color: "#8e79a8" },
      { index: 15, color: "#8e79a8" },
    ],
  },

  // Map 8
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#9ab8aa" },
      { index: 6, color: "#9ab8aa" },
      { index: 1, color: "#698e76" },
      { index: 3, color: "#698e76" },
      { index: 4, color: "#495280" },
      { index: 14, color: "#495280" },
      { index: 7, color: "#7b42bf" },
      { index: 17, color: "#7b42bf" },
      { index: 8, color: "#6c4649" },
      { index: 10, color: "#6c4649" },
    ],
  },

  // Map 9
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#be888a" },
      { index: 2, color: "#be888a" },
      { index: 3, color: "#a5989d" },
      { index: 9, color: "#a5989d" },
      { index: 5, color: "#5c70bb" },
      { index: 7, color: "#5c70bb" },
      { index: 8, color: "#3e6a89" },
      { index: 14, color: "#3e6a89" },
      { index: 10, color: "#a6434f" },
      { index: 20, color: "#a6434f" },
    ],
  },

  // Map 10
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b788ad" },
      { index: 6, color: "#b788ad" },
      { index: 1, color: "#b48279" },
      { index: 7, color: "#b48279" },
      { index: 3, color: "#bda894" },
      { index: 9, color: "#bda894" },
      { index: 8, color: "#817f38" },
      { index: 18, color: "#817f38" },
      { index: 10, color: "#82bea5" },
      { index: 14, color: "#82bea5" },
    ],
  },

  // Map 11
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8fa762" },
      { index: 6, color: "#8fa762" },
      { index: 2, color: "#667e4d" },
      { index: 12, color: "#667e4d" },
      { index: 3, color: "#be6b71" },
      { index: 9, color: "#be6b71" },
      { index: 5, color: "#6a486b" },
      { index: 11, color: "#6a486b" },
      { index: 8, color: "#658f4a" },
      { index: 14, color: "#658f4a" },
    ],
  },

  // Map 12
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#4aa56a" },
      { index: 10, color: "#4aa56a" },
      { index: 1, color: "#7bc048" },
      { index: 7, color: "#7bc048" },
      { index: 2, color: "#7a9589" },
      { index: 4, color: "#7a9589" },
      { index: 8, color: "#378643" },
      { index: 18, color: "#378643" },
      { index: 9, color: "#7f8f9a" },
      { index: 11, color: "#7f8f9a" },
    ],
  },

  // Map 13
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#a334c1" },
      { index: 2, color: "#a334c1" },
      { index: 3, color: "#734b90" },
      { index: 4, color: "#734b90" },
      { index: 5, color: "#9fb565" },
      { index: 7, color: "#9fb565" },
      { index: 10, color: "#8d624e" },
      { index: 12, color: "#8d624e" },
      { index: 13, color: "#b05338" },
      { index: 24, color: "#b05338" },
    ],
  },

  // Map 14
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6b379a" },
      { index: 6, color: "#6b379a" },
      { index: 2, color: "#7e9f82" },
      { index: 8, color: "#7e9f82" },
      { index: 4, color: "#8a4eb8" },
      { index: 14, color: "#8a4eb8" },
      { index: 5, color: "#bd5689" },
      { index: 11, color: "#bd5689" },
      { index: 7, color: "#66689c" },
      { index: 19, color: "#66689c" },
    ],
  },

  // Map 15
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#a59b8e" },
      { index: 6, color: "#a59b8e" },
      { index: 1, color: "#74954e" },
      { index: 3, color: "#74954e" },
      { index: 4, color: "#97349c" },
      { index: 8, color: "#97349c" },
      { index: 7, color: "#be8a7f" },
      { index: 17, color: "#be8a7f" },
      { index: 10, color: "#7fc373" },
      { index: 18, color: "#7fc373" },
    ],
  },

  // Map 16
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#7c9334" },
      { index: 6, color: "#7c9334" },
      { index: 2, color: "#3a886f" },
      { index: 4, color: "#3a886f" },
      { index: 5, color: "#bf3874" },
      { index: 11, color: "#bf3874" },
      { index: 7, color: "#496b4f" },
      { index: 12, color: "#496b4f" },
      { index: 9, color: "#4b3986" },
      { index: 24, color: "#4b3986" },
    ],
  },

  // Map 17
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#c18770" },
      { index: 6, color: "#c18770" },
      { index: 1, color: "#8ab988" },
      { index: 7, color: "#8ab988" },
      { index: 3, color: "#c7778e" },
      { index: 4, color: "#c7778e" },
      { index: 10, color: "#494f88" },
      { index: 16, color: "#494f88" },
      { index: 12, color: "#a839c4" },
      { index: 15, color: "#a839c4" },
    ],
  },

  // Map 18
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b53463" },
      { index: 2, color: "#b53463" },
      { index: 3, color: "#c6c656" },
      { index: 4, color: "#c6c656" },
      { index: 5, color: "#6a7260" },
      { index: 15, color: "#6a7260" },
      { index: 6, color: "#52c568" },
      { index: 16, color: "#52c568" },
      { index: 7, color: "#a63aac" },
      { index: 20, color: "#a63aac" },
    ],
  },

  // Map 19
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6eaea1" },
      { index: 6, color: "#6eaea1" },
      { index: 1, color: "#4b684e" },
      { index: 7, color: "#4b684e" },
      { index: 3, color: "#6f4e6a" },
      { index: 9, color: "#6f4e6a" },
      { index: 8, color: "#51c09d" },
      { index: 12, color: "#51c09d" },
      { index: 10, color: "#875037" },
      { index: 14, color: "#875037" },
    ],
  },

  // Map 20
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#604c97" },
      { index: 2, color: "#604c97" },
      { index: 3, color: "#8fbba1" },
      { index: 9, color: "#8fbba1" },
      { index: 5, color: "#ab5a74" },
      { index: 15, color: "#ab5a74" },
      { index: 6, color: "#6eaf6a" },
      { index: 16, color: "#6eaf6a" },
      { index: 8, color: "#8a676e" },
      { index: 20, color: "#8a676e" },
    ],
  },

  // Map 21
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#c046b4" },
      { index: 6, color: "#c046b4" },
      { index: 2, color: "#987b37" },
      { index: 8, color: "#987b37" },
      { index: 3, color: "#9e8b68" },
      { index: 9, color: "#9e8b68" },
      { index: 5, color: "#8d50a7" },
      { index: 11, color: "#8d50a7" },
      { index: 12, color: "#5ec7bf" },
      { index: 24, color: "#5ec7bf" },
    ],
  },

  // Map 22
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#418582" },
      { index: 6, color: "#418582" },
      { index: 1, color: "#7dc160" },
      { index: 3, color: "#7dc160" },
      { index: 4, color: "#34778b" },
      { index: 8, color: "#34778b" },
      { index: 7, color: "#4e4486" },
      { index: 13, color: "#4e4486" },
      { index: 10, color: "#8b3333" },
      { index: 14, color: "#8b3333" },
    ],
  },

  // Map 23
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#333368" },
      { index: 6, color: "#333368" },
      { index: 1, color: "#765b4e" },
      { index: 3, color: "#765b4e" },
      { index: 4, color: "#8d54b3" },
      { index: 14, color: "#8d54b3" },
      { index: 7, color: "#937e56" },
      { index: 11, color: "#937e56" },
      { index: 8, color: "#bfbe92" },
      { index: 10, color: "#bfbe92" },
    ],
  },

  // Map 24
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#7f62b5" },
      { index: 10, color: "#7f62b5" },
      { index: 1, color: "#863f85" },
      { index: 11, color: "#863f85" },
      { index: 2, color: "#7340b5" },
      { index: 4, color: "#7340b5" },
      { index: 7, color: "#7eb6a7" },
      { index: 12, color: "#7eb6a7" },
      { index: 9, color: "#8db4af" },
      { index: 18, color: "#8db4af" },
    ],
  },

  // Map 25
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#a58c4d" },
      { index: 6, color: "#a58c4d" },
      { index: 1, color: "#36b899" },
      { index: 7, color: "#36b899" },
      { index: 3, color: "#94b0c4" },
      { index: 4, color: "#94b0c4" },
      { index: 10, color: "#595b6d" },
      { index: 12, color: "#595b6d" },
      { index: 13, color: "#749366" },
      { index: 22, color: "#749366" },
    ],
  },

  // Map 26
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6388a8" },
      { index: 2, color: "#6388a8" },
      { index: 3, color: "#5898a4" },
      { index: 4, color: "#5898a4" },
      { index: 5, color: "#514c7f" },
      { index: 15, color: "#514c7f" },
      { index: 6, color: "#71b475" },
      { index: 12, color: "#71b475" },
      { index: 11, color: "#4965a3" },
      { index: 20, color: "#4965a3" },
    ],
  },

  // Map 27
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#5f893e" },
      { index: 10, color: "#5f893e" },
      { index: 1, color: "#6d3240" },
      { index: 7, color: "#6d3240" },
      { index: 3, color: "#bd4239" },
      { index: 13, color: "#bd4239" },
      { index: 4, color: "#946366" },
      { index: 14, color: "#946366" },
      { index: 6, color: "#9860a4" },
      { index: 12, color: "#9860a4" },
    ],
  },

  // Map 28
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#959389" },
      { index: 2, color: "#959389" },
      { index: 3, color: "#379a61" },
      { index: 9, color: "#379a61" },
      { index: 5, color: "#6e84a0" },
      { index: 15, color: "#6e84a0" },
      { index: 6, color: "#487eb0" },
      { index: 14, color: "#487eb0" },
      { index: 16, color: "#c39948" },
      { index: 20, color: "#c39948" },
    ],
  },

  // Map 29
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#7d7860" },
      { index: 6, color: "#7d7860" },
      { index: 1, color: "#6f5f9b" },
      { index: 3, color: "#6f5f9b" },
      { index: 4, color: "#75433e" },
      { index: 14, color: "#75433e" },
      { index: 7, color: "#5146a0" },
      { index: 13, color: "#5146a0" },
      { index: 10, color: "#9cc4b3" },
      { index: 16, color: "#9cc4b3" },
    ],
  },

  // Map 30
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b6a558" },
      { index: 6, color: "#b6a558" },
      { index: 1, color: "#797ea6" },
      { index: 7, color: "#797ea6" },
      { index: 3, color: "#4d95b7" },
      { index: 4, color: "#4d95b7" },
      { index: 10, color: "#9e7039" },
      { index: 12, color: "#9e7039" },
      { index: 13, color: "#93b444" },
      { index: 24, color: "#93b444" },
    ],
  },

  // Map 31
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#705639" },
      { index: 2, color: "#705639" },
      { index: 3, color: "#a3bb3d" },
      { index: 4, color: "#a3bb3d" },
      { index: 5, color: "#907284" },
      { index: 15, color: "#907284" },
      { index: 6, color: "#919d71" },
      { index: 16, color: "#919d71" },
      { index: 7, color: "#c03aae" },
      { index: 20, color: "#c03aae" },
    ],
  },

  // Map 32
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#394a3c" },
      { index: 10, color: "#394a3c" },
      { index: 1, color: "#3ab9c5" },
      { index: 7, color: "#3ab9c5" },
      { index: 2, color: "#46b38b" },
      { index: 4, color: "#46b38b" },
      { index: 8, color: "#973b88" },
      { index: 14, color: "#973b88" },
      { index: 11, color: "#356c74" },
      { index: 19, color: "#356c74" },
    ],
  },

  // Map 33
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#336aa2" },
      { index: 2, color: "#336aa2" },
      { index: 3, color: "#a6c23f" },
      { index: 4, color: "#a6c23f" },
      { index: 5, color: "#685e3a" },
      { index: 11, color: "#685e3a" },
      { index: 6, color: "#7f78b4" },
      { index: 12, color: "#7f78b4" },
      { index: 13, color: "#343534" },
      { index: 24, color: "#343534" },
    ],
  },

  // Map 34
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#466547" },
      { index: 6, color: "#466547" },
      { index: 1, color: "#877a9e" },
      { index: 3, color: "#877a9e" },
      { index: 4, color: "#4fa5c0" },
      { index: 8, color: "#4fa5c0" },
      { index: 7, color: "#5eba7a" },
      { index: 11, color: "#5eba7a" },
      { index: 10, color: "#9445ab" },
      { index: 16, color: "#9445ab" },
    ],
  },

  // Map 35
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#a77b6d" },
      { index: 10, color: "#a77b6d" },
      { index: 1, color: "#505f43" },
      { index: 7, color: "#505f43" },
      { index: 3, color: "#96a160" },
      { index: 9, color: "#96a160" },
      { index: 6, color: "#906c6f" },
      { index: 12, color: "#906c6f" },
      { index: 8, color: "#8489ae" },
      { index: 24, color: "#8489ae" },
    ],
  },

  // Map 36
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b4935c" },
      { index: 2, color: "#b4935c" },
      { index: 3, color: "#b9c479" },
      { index: 7, color: "#b9c479" },
      { index: 4, color: "#a4335f" },
      { index: 14, color: "#a4335f" },
      { index: 5, color: "#ba957f" },
      { index: 11, color: "#ba957f" },
      { index: 10, color: "#369681" },
      { index: 16, color: "#369681" },
    ],
  },

  // Map 37
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6e3fb0" },
      { index: 6, color: "#6e3fb0" },
      { index: 2, color: "#b1ae52" },
      { index: 12, color: "#b1ae52" },
      { index: 3, color: "#7662b8" },
      { index: 9, color: "#7662b8" },
      { index: 5, color: "#656b57" },
      { index: 20, color: "#656b57" },
      { index: 8, color: "#6b786c" },
      { index: 11, color: "#6b786c" },
    ],
  },

  // Map 38
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6dc78c" },
      { index: 6, color: "#6dc78c" },
      { index: 1, color: "#7f3932" },
      { index: 7, color: "#7f3932" },
      { index: 3, color: "#43bf5a" },
      { index: 9, color: "#43bf5a" },
      { index: 8, color: "#40aa62" },
      { index: 12, color: "#40aa62" },
      { index: 10, color: "#846cae" },
      { index: 14, color: "#846cae" },
    ],
  },

  // Map 39
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#917764" },
      { index: 6, color: "#917764" },
      { index: 1, color: "#5974b0" },
      { index: 7, color: "#5974b0" },
      { index: 3, color: "#bb3751" },
      { index: 9, color: "#bb3751" },
      { index: 8, color: "#bcbb71" },
      { index: 12, color: "#bcbb71" },
      { index: 10, color: "#c6668e" },
      { index: 14, color: "#c6668e" },
    ],
  },

  // Map 40
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#a1c763" },
      { index: 2, color: "#a1c763" },
      { index: 3, color: "#c03da1" },
      { index: 9, color: "#c03da1" },
      { index: 5, color: "#616560" },
      { index: 16, color: "#616560" },
      { index: 7, color: "#3f6687" },
      { index: 14, color: "#3f6687" },
      { index: 10, color: "#95bb4e" },
      { index: 12, color: "#95bb4e" },
    ],
  },

  // Map 41
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8e959a" },
      { index: 2, color: "#8e959a" },
      { index: 3, color: "#3a7a7d" },
      { index: 7, color: "#3a7a7d" },
      { index: 4, color: "#3660c5" },
      { index: 14, color: "#3660c5" },
      { index: 5, color: "#bda6a7" },
      { index: 11, color: "#bda6a7" },
      { index: 10, color: "#b39d70" },
      { index: 20, color: "#b39d70" },
    ],
  },

  // Map 42
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#7a7683" },
      { index: 6, color: "#7a7683" },
      { index: 2, color: "#524482" },
      { index: 12, color: "#524482" },
      { index: 3, color: "#97a29e" },
      { index: 13, color: "#97a29e" },
      { index: 4, color: "#3e4a5a" },
      { index: 14, color: "#3e4a5a" },
      { index: 5, color: "#41c282" },
      { index: 23, color: "#41c282" },
    ],
  },

  // Map 43
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#9d90a3" },
      { index: 6, color: "#9d90a3" },
      { index: 1, color: "#5a77ba" },
      { index: 7, color: "#5a77ba" },
      { index: 3, color: "#4aac76" },
      { index: 9, color: "#4aac76" },
      { index: 8, color: "#3f3664" },
      { index: 14, color: "#3f3664" },
      { index: 10, color: "#b8c58b" },
      { index: 18, color: "#b8c58b" },
    ],
  },

  // Map 44
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#689d62" },
      { index: 2, color: "#689d62" },
      { index: 3, color: "#8c7b8e" },
      { index: 4, color: "#8c7b8e" },
      { index: 5, color: "#36c079" },
      { index: 7, color: "#36c079" },
      { index: 10, color: "#5fa35e" },
      { index: 12, color: "#5fa35e" },
      { index: 13, color: "#465e59" },
      { index: 18, color: "#465e59" },
    ],
  },

  // Map 45
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8558a3" },
      { index: 2, color: "#8558a3" },
      { index: 3, color: "#92b8b7" },
      { index: 9, color: "#92b8b7" },
      { index: 5, color: "#a381b5" },
      { index: 15, color: "#a381b5" },
      { index: 6, color: "#61794b" },
      { index: 18, color: "#61794b" },
      { index: 14, color: "#8b6058" },
      { index: 20, color: "#8b6058" },
    ],
  },

  // Map 46
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8d9b68" },
      { index: 10, color: "#8d9b68" },
      { index: 1, color: "#424a42" },
      { index: 7, color: "#424a42" },
      { index: 3, color: "#45817e" },
      { index: 4, color: "#45817e" },
      { index: 6, color: "#94bd4b" },
      { index: 16, color: "#94bd4b" },
      { index: 12, color: "#5461b9" },
      { index: 15, color: "#5461b9" },
    ],
  },

  // Map 47
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#c5b97d" },
      { index: 2, color: "#c5b97d" },
      { index: 3, color: "#596f7d" },
      { index: 7, color: "#596f7d" },
      { index: 4, color: "#5b6f5d" },
      { index: 14, color: "#5b6f5d" },
      { index: 5, color: "#c3475c" },
      { index: 11, color: "#c3475c" },
      { index: 10, color: "#a69336" },
      { index: 20, color: "#a69336" },
    ],
  },

  // Map 48
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#426b42" },
      { index: 2, color: "#426b42" },
      { index: 3, color: "#33bf54" },
      { index: 7, color: "#33bf54" },
      { index: 4, color: "#a3808f" },
      { index: 14, color: "#a3808f" },
      { index: 5, color: "#4c5c6e" },
      { index: 11, color: "#4c5c6e" },
      { index: 10, color: "#ae3c64" },
      { index: 16, color: "#ae3c64" },
    ],
  },

  // Map 49
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#bf78c7" },
      { index: 2, color: "#bf78c7" },
      { index: 3, color: "#c3b79a" },
      { index: 9, color: "#c3b79a" },
      { index: 5, color: "#6dc588" },
      { index: 7, color: "#6dc588" },
      { index: 8, color: "#8539a0" },
      { index: 14, color: "#8539a0" },
      { index: 10, color: "#a26b5f" },
      { index: 20, color: "#a26b5f" },
    ],
  },

  // Map 50
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#78c65e" },
      { index: 6, color: "#78c65e" },
      { index: 2, color: "#9778a0" },
      { index: 4, color: "#9778a0" },
      { index: 5, color: "#35417e" },
      { index: 15, color: "#35417e" },
      { index: 7, color: "#7d775e" },
      { index: 14, color: "#7d775e" },
      { index: 11, color: "#5d9196" },
      { index: 20, color: "#5d9196" },
    ],
  },

  // ================= LEVEL 5 (6x6 - full grid 6 cột)
  // Map 1
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#7da628" },
      { index: 12, color: "#7da628" },
      { index: 1, color: "#5977bb" },
      { index: 8, color: "#5977bb" },
      { index: 3, color: "#8aa733" },
      { index: 10, color: "#8aa733" },
      { index: 4, color: "#7c2a9e" },
      { index: 11, color: "#7c2a9e" },
      { index: 7, color: "#a68ebc" },
      { index: 14, color: "#a68ebc" },
      { index: 15, color: "#3b294a" },
      { index: 18, color: "#3b294a" },
    ],
  },

  // Map 2
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#515296" },
      { index: 12, color: "#515296" },
      { index: 1, color: "#bd5c5e" },
      { index: 3, color: "#bd5c5e" },
      { index: 4, color: "#498b51" },
      { index: 5, color: "#498b51" },
      { index: 7, color: "#b5819d" },
      { index: 14, color: "#b5819d" },
      { index: 8, color: "#2e4580" },
      { index: 15, color: "#2e4580" },
      { index: 16, color: "#b4543a" },
      { index: 25, color: "#b4543a" },
    ],
  },

  // Map 3
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#a766be" },
      { index: 12, color: "#a766be" },
      { index: 1, color: "#5e787b" },
      { index: 8, color: "#5e787b" },
      { index: 2, color: "#99c645" },
      { index: 4, color: "#99c645" },
      { index: 5, color: "#bb426c" },
      { index: 10, color: "#bb426c" },
      { index: 9, color: "#386f42" },
      { index: 14, color: "#386f42" },
      { index: 13, color: "#7e8f52" },
      { index: 18, color: "#7e8f52" },
    ],
  },

  // Map 4
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#3e896f" },
      { index: 12, color: "#3e896f" },
      { index: 1, color: "#5e796b" },
      { index: 8, color: "#5e796b" },
      { index: 3, color: "#cfbca8" },
      { index: 5, color: "#cfbca8" },
      { index: 7, color: "#86755d" },
      { index: 19, color: "#86755d" },
      { index: 9, color: "#7f5899" },
      { index: 17, color: "#7f5899" },
      { index: 14, color: "#7e74a8" },
      { index: 18, color: "#7e74a8" },
    ],
  },

  // Map 5
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#a3af65" },
      { index: 12, color: "#a3af65" },
      { index: 1, color: "#3c5973" },
      { index: 3, color: "#3c5973" },
      { index: 4, color: "#aa9386" },
      { index: 5, color: "#aa9386" },
      { index: 7, color: "#d170aa" },
      { index: 9, color: "#d170aa" },
      { index: 13, color: "#4fc184" },
      { index: 20, color: "#4fc184" },
      { index: 15, color: "#cfbc8a" },
      { index: 26, color: "#cfbc8a" },
    ],
  },

  // Map 6
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#adc270" },
      { index: 7, color: "#adc270" },
      { index: 1, color: "#ac2b47" },
      { index: 8, color: "#ac2b47" },
      { index: 3, color: "#8daea4" },
      { index: 10, color: "#8daea4" },
      { index: 5, color: "#948b65" },
      { index: 17, color: "#948b65" },
      { index: 9, color: "#743cc1" },
      { index: 16, color: "#743cc1" },
      { index: 12, color: "#a7aa7c" },
      { index: 21, color: "#a7aa7c" },
    ],
  },

  // Map 7
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#cf378e" },
      { index: 7, color: "#cf378e" },
      { index: 1, color: "#72c7b8" },
      { index: 3, color: "#72c7b8" },
      { index: 4, color: "#b75a28" },
      { index: 5, color: "#b75a28" },
      { index: 8, color: "#b59199" },
      { index: 9, color: "#b59199" },
      { index: 12, color: "#2b8084" },
      { index: 20, color: "#2b8084" },
      { index: 16, color: "#6fbdd0" },
      { index: 18, color: "#6fbdd0" },
    ],
  },

  // Map 8
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#7d40b3" },
      { index: 7, color: "#7d40b3" },
      { index: 2, color: "#3c4541" },
      { index: 9, color: "#3c4541" },
      { index: 4, color: "#2e34ca" },
      { index: 5, color: "#2e34ca" },
      { index: 6, color: "#2962b6" },
      { index: 18, color: "#2962b6" },
      { index: 8, color: "#89a9b7" },
      { index: 20, color: "#89a9b7" },
      { index: 13, color: "#7c3e42" },
      { index: 26, color: "#7c3e42" },
    ],
  },

  // Map 9
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#734498" },
      { index: 12, color: "#734498" },
      { index: 1, color: "#61324a" },
      { index: 8, color: "#61324a" },
      { index: 3, color: "#3fc037" },
      { index: 5, color: "#3fc037" },
      { index: 7, color: "#42616c" },
      { index: 19, color: "#42616c" },
      { index: 9, color: "#8fcf42" },
      { index: 10, color: "#8fcf42" },
      { index: 14, color: "#9e72b6" },
      { index: 18, color: "#9e72b6" },
    ],
  },

  // Map 10
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#84462b" },
      { index: 7, color: "#84462b" },
      { index: 1, color: "#4c3ecf" },
      { index: 3, color: "#4c3ecf" },
      { index: 4, color: "#b53ac4" },
      { index: 11, color: "#b53ac4" },
      { index: 8, color: "#563434" },
      { index: 15, color: "#563434" },
      { index: 10, color: "#a63589" },
      { index: 17, color: "#a63589" },
      { index: 12, color: "#5e4dbd" },
      { index: 35, color: "#5e4dbd" },
    ],
  },

  // Map 11
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#bea89f" },
      { index: 2, color: "#bea89f" },
      { index: 3, color: "#35895f" },
      { index: 5, color: "#35895f" },
      { index: 6, color: "#b78940" },
      { index: 13, color: "#b78940" },
      { index: 8, color: "#6936c2" },
      { index: 10, color: "#6936c2" },
      { index: 11, color: "#66563d" },
      { index: 23, color: "#66563d" },
      { index: 12, color: "#7c295a" },
      { index: 21, color: "#7c295a" },
    ],
  },

  // Map 12
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#4e9d4a" },
      { index: 7, color: "#4e9d4a" },
      { index: 1, color: "#3751c0" },
      { index: 8, color: "#3751c0" },
      { index: 3, color: "#5d9fc4" },
      { index: 5, color: "#5d9fc4" },
      { index: 9, color: "#6b9668" },
      { index: 14, color: "#6b9668" },
      { index: 10, color: "#7f62b9" },
      { index: 16, color: "#7f62b9" },
      { index: 12, color: "#8b868a" },
      { index: 18, color: "#8b868a" },
    ],
  },

  // Map 13
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#c74761" },
      { index: 7, color: "#c74761" },
      { index: 2, color: "#7c5a97" },
      { index: 9, color: "#7c5a97" },
      { index: 3, color: "#407f62" },
      { index: 10, color: "#407f62" },
      { index: 5, color: "#7cca9b" },
      { index: 17, color: "#7cca9b" },
      { index: 6, color: "#842c34" },
      { index: 13, color: "#842c34" },
      { index: 14, color: "#40c7b8" },
      { index: 16, color: "#40c7b8" },
    ],
  },

  // Map 14
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#a5299a" },
      { index: 12, color: "#a5299a" },
      { index: 1, color: "#3d2dcd" },
      { index: 3, color: "#3d2dcd" },
      { index: 4, color: "#a02bc6" },
      { index: 11, color: "#a02bc6" },
      { index: 7, color: "#9cc8c4" },
      { index: 19, color: "#9cc8c4" },
      { index: 8, color: "#53595f" },
      { index: 17, color: "#53595f" },
      { index: 18, color: "#91aab1" },
      { index: 30, color: "#91aab1" },
    ],
  },

  // Map 15
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#594894" },
      { index: 7, color: "#594894" },
      { index: 1, color: "#2f802b" },
      { index: 8, color: "#2f802b" },
      { index: 3, color: "#5c9f5e" },
      { index: 10, color: "#5c9f5e" },
      { index: 4, color: "#96614c" },
      { index: 11, color: "#96614c" },
      { index: 12, color: "#7b642d" },
      { index: 14, color: "#7b642d" },
      { index: 15, color: "#6fbd3a" },
      { index: 18, color: "#6fbd3a" },
    ],
  },

  // Map 16
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#46af9c" },
      { index: 7, color: "#46af9c" },
      { index: 2, color: "#4d6eb1" },
      { index: 9, color: "#4d6eb1" },
      { index: 4, color: "#b67d3e" },
      { index: 11, color: "#b67d3e" },
      { index: 6, color: "#a82c8e" },
      { index: 18, color: "#a82c8e" },
      { index: 8, color: "#846c99" },
      { index: 15, color: "#846c99" },
      { index: 10, color: "#322f83" },
      { index: 13, color: "#322f83" },
    ],
  },

  // Map 17
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#46a233" },
      { index: 12, color: "#46a233" },
      { index: 1, color: "#39c98c" },
      { index: 3, color: "#39c98c" },
      { index: 4, color: "#a35dd1" },
      { index: 11, color: "#a35dd1" },
      { index: 7, color: "#d16542" },
      { index: 15, color: "#d16542" },
      { index: 9, color: "#b4c0a3" },
      { index: 20, color: "#b4c0a3" },
      { index: 13, color: "#9d76c3" },
      { index: 17, color: "#9d76c3" },
    ],
  },

  // Map 18
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#42cca5" },
      { index: 12, color: "#42cca5" },
      { index: 1, color: "#b79588" },
      { index: 8, color: "#b79588" },
      { index: 3, color: "#356048" },
      { index: 5, color: "#356048" },
      { index: 7, color: "#b89d8c" },
      { index: 14, color: "#b89d8c" },
      { index: 9, color: "#a34fa2" },
      { index: 16, color: "#a34fa2" },
      { index: 10, color: "#2c6d8a" },
      { index: 30, color: "#2c6d8a" },
    ],
  },

  // Map 19
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#c64250" },
      { index: 7, color: "#c64250" },
      { index: 2, color: "#8ecc7c" },
      { index: 4, color: "#8ecc7c" },
      { index: 5, color: "#72705d" },
      { index: 10, color: "#72705d" },
      { index: 6, color: "#bc48c0" },
      { index: 18, color: "#bc48c0" },
      { index: 8, color: "#98785b" },
      { index: 23, color: "#98785b" },
      { index: 13, color: "#396bbe" },
      { index: 19, color: "#396bbe" },
    ],
  },

  // Map 20
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#7f5d58" },
      { index: 2, color: "#7f5d58" },
      { index: 3, color: "#673772" },
      { index: 10, color: "#673772" },
      { index: 5, color: "#519a81" },
      { index: 17, color: "#519a81" },
      { index: 6, color: "#2f6152" },
      { index: 14, color: "#2f6152" },
      { index: 8, color: "#3068bd" },
      { index: 21, color: "#3068bd" },
      { index: 12, color: "#5e9377" },
      { index: 16, color: "#5e9377" },
    ],
  },

  // Map 21
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#2c7c94" },
      { index: 7, color: "#2c7c94" },
      { index: 1, color: "#93b6b1" },
      { index: 3, color: "#93b6b1" },
      { index: 4, color: "#ae3d8f" },
      { index: 9, color: "#ae3d8f" },
      { index: 5, color: "#3b45be" },
      { index: 17, color: "#3b45be" },
      { index: 8, color: "#bd5a63" },
      { index: 16, color: "#bd5a63" },
      { index: 12, color: "#6b905e" },
      { index: 18, color: "#6b905e" },
    ],
  },

  // Map 22
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#41853d" },
      { index: 12, color: "#41853d" },
      { index: 1, color: "#5882d0" },
      { index: 13, color: "#5882d0" },
      { index: 2, color: "#ce9295" },
      { index: 4, color: "#ce9295" },
      { index: 5, color: "#605ab4" },
      { index: 10, color: "#605ab4" },
      { index: 8, color: "#78bc6c" },
      { index: 15, color: "#78bc6c" },
      { index: 14, color: "#9738a8" },
      { index: 16, color: "#9738a8" },
    ],
  },

  // Map 23
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#6ad061" },
      { index: 12, color: "#6ad061" },
      { index: 1, color: "#9b9954" },
      { index: 3, color: "#9b9954" },
      { index: 4, color: "#a55fb1" },
      { index: 5, color: "#a55fb1" },
      { index: 7, color: "#bb51ab" },
      { index: 14, color: "#bb51ab" },
      { index: 8, color: "#574da7" },
      { index: 15, color: "#574da7" },
      { index: 16, color: "#605c5a" },
      { index: 17, color: "#605c5a" },
    ],
  },

  // Map 24
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#5e29ac" },
      { index: 2, color: "#5e29ac" },
      { index: 3, color: "#63993b" },
      { index: 10, color: "#63993b" },
      { index: 4, color: "#8264a7" },
      { index: 11, color: "#8264a7" },
      { index: 6, color: "#8c2b8c" },
      { index: 8, color: "#8c2b8c" },
      { index: 12, color: "#39b869" },
      { index: 14, color: "#39b869" },
      { index: 15, color: "#60be2b" },
      { index: 30, color: "#60be2b" },
    ],
  },

  // Map 25
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#817b2a" },
      { index: 2, color: "#817b2a" },
      { index: 3, color: "#8d6f6c" },
      { index: 8, color: "#8d6f6c" },
      { index: 4, color: "#61a267" },
      { index: 11, color: "#61a267" },
      { index: 6, color: "#56979a" },
      { index: 7, color: "#56979a" },
      { index: 10, color: "#ce4b99" },
      { index: 15, color: "#ce4b99" },
      { index: 14, color: "#b33f3f" },
      { index: 17, color: "#b33f3f" },
    ],
  },

  // Map 26
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#40c761" },
      { index: 12, color: "#40c761" },
      { index: 1, color: "#b5ab2d" },
      { index: 8, color: "#b5ab2d" },
      { index: 3, color: "#7428ca" },
      { index: 10, color: "#7428ca" },
      { index: 5, color: "#b5683a" },
      { index: 17, color: "#b5683a" },
      { index: 7, color: "#a2c2a2" },
      { index: 33, color: "#a2c2a2" },
      { index: 9, color: "#93b35c" },
      { index: 14, color: "#93b35c" },
    ],
  },

  // Map 27
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#aaccc9" },
      { index: 12, color: "#aaccc9" },
      { index: 1, color: "#4d59c3" },
      { index: 8, color: "#4d59c3" },
      { index: 3, color: "#94a79d" },
      { index: 5, color: "#94a79d" },
      { index: 7, color: "#75ba79" },
      { index: 19, color: "#75ba79" },
      { index: 9, color: "#523538" },
      { index: 21, color: "#523538" },
      { index: 10, color: "#c25156" },
      { index: 18, color: "#c25156" },
    ],
  },

  // Map 28
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#ca2886" },
      { index: 2, color: "#ca2886" },
      { index: 3, color: "#c86e7a" },
      { index: 10, color: "#c86e7a" },
      { index: 4, color: "#80503a" },
      { index: 11, color: "#80503a" },
      { index: 6, color: "#3e5c50" },
      { index: 8, color: "#3e5c50" },
      { index: 12, color: "#6e4b3d" },
      { index: 14, color: "#6e4b3d" },
      { index: 15, color: "#5f6737" },
      { index: 18, color: "#5f6737" },
    ],
  },

  // Map 29
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#70a5a0" },
      { index: 2, color: "#70a5a0" },
      { index: 3, color: "#82b453" },
      { index: 10, color: "#82b453" },
      { index: 5, color: "#8f3c5d" },
      { index: 17, color: "#8f3c5d" },
      { index: 6, color: "#a9bac3" },
      { index: 18, color: "#a9bac3" },
      { index: 7, color: "#4d7568" },
      { index: 19, color: "#4d7568" },
      { index: 9, color: "#ab63cb" },
      { index: 35, color: "#ab63cb" },
    ],
  },

  // Map 30
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#688da9" },
      { index: 2, color: "#688da9" },
      { index: 3, color: "#b043c6" },
      { index: 5, color: "#b043c6" },
      { index: 6, color: "#5e843e" },
      { index: 13, color: "#5e843e" },
      { index: 8, color: "#472c4e" },
      { index: 15, color: "#472c4e" },
      { index: 9, color: "#7e487d" },
      { index: 16, color: "#7e487d" },
      { index: 11, color: "#602c45" },
      { index: 12, color: "#602c45" },
    ],
  },

  // Map 31
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#bab56e" },
      { index: 12, color: "#bab56e" },
      { index: 1, color: "#3aba2d" },
      { index: 3, color: "#3aba2d" },
      { index: 4, color: "#694dd1" },
      { index: 11, color: "#694dd1" },
      { index: 7, color: "#a5b295" },
      { index: 14, color: "#a5b295" },
      { index: 8, color: "#a76364" },
      { index: 10, color: "#a76364" },
      { index: 15, color: "#a38f72" },
      { index: 34, color: "#a38f72" },
    ],
  },

  // Map 32
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#b477ab" },
      { index: 12, color: "#b477ab" },
      { index: 1, color: "#5c85ba" },
      { index: 3, color: "#5c85ba" },
      { index: 4, color: "#5b54a3" },
      { index: 5, color: "#5b54a3" },
      { index: 7, color: "#42cc87" },
      { index: 14, color: "#42cc87" },
      { index: 9, color: "#5b5198" },
      { index: 17, color: "#5b5198" },
      { index: 13, color: "#56bace" },
      { index: 18, color: "#56bace" },
    ],
  },

  // Map 33
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#95c732" },
      { index: 2, color: "#95c732" },
      { index: 3, color: "#8853b7" },
      { index: 5, color: "#8853b7" },
      { index: 6, color: "#563d5a" },
      { index: 13, color: "#563d5a" },
      { index: 8, color: "#28d0bc" },
      { index: 15, color: "#28d0bc" },
      { index: 9, color: "#9c3ea6" },
      { index: 16, color: "#9c3ea6" },
      { index: 11, color: "#657594" },
      { index: 12, color: "#657594" },
    ],
  },

  // Map 34
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#a056cb" },
      { index: 7, color: "#a056cb" },
      { index: 1, color: "#4f7455" },
      { index: 8, color: "#4f7455" },
      { index: 3, color: "#b0ac3e" },
      { index: 5, color: "#b0ac3e" },
      { index: 9, color: "#5d9a4a" },
      { index: 16, color: "#5d9a4a" },
      { index: 10, color: "#b0cbb4" },
      { index: 17, color: "#b0cbb4" },
      { index: 12, color: "#30a279" },
      { index: 35, color: "#30a279" },
    ],
  },

  // Map 35
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#ae47a8" },
      { index: 12, color: "#ae47a8" },
      { index: 1, color: "#9c5c5f" },
      { index: 8, color: "#9c5c5f" },
      { index: 2, color: "#9e6567" },
      { index: 9, color: "#9e6567" },
      { index: 4, color: "#d1b14c" },
      { index: 5, color: "#d1b14c" },
      { index: 13, color: "#80d06e" },
      { index: 15, color: "#80d06e" },
      { index: 16, color: "#5d8e4a" },
      { index: 32, color: "#5d8e4a" },
    ],
  },

  // Map 36
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#4d8572" },
      { index: 12, color: "#4d8572" },
      { index: 1, color: "#7587ab" },
      { index: 13, color: "#7587ab" },
      { index: 2, color: "#46856a" },
      { index: 9, color: "#46856a" },
      { index: 3, color: "#b53270" },
      { index: 5, color: "#b53270" },
      { index: 10, color: "#726371" },
      { index: 17, color: "#726371" },
      { index: 14, color: "#6e983d" },
      { index: 16, color: "#6e983d" },
    ],
  },

  // Map 37
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#bc5737" },
      { index: 7, color: "#bc5737" },
      { index: 1, color: "#5e3bc4" },
      { index: 3, color: "#5e3bc4" },
      { index: 4, color: "#446b29" },
      { index: 5, color: "#446b29" },
      { index: 8, color: "#4ec98f" },
      { index: 9, color: "#4ec98f" },
      { index: 12, color: "#c66b73" },
      { index: 24, color: "#c66b73" },
      { index: 13, color: "#b9748f" },
      { index: 30, color: "#b9748f" },
    ],
  },

  // Map 38
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#a19a8e" },
      { index: 7, color: "#a19a8e" },
      { index: 2, color: "#749a2c" },
      { index: 14, color: "#749a2c" },
      { index: 3, color: "#a3c23c" },
      { index: 10, color: "#a3c23c" },
      { index: 4, color: "#a39594" },
      { index: 11, color: "#a39594" },
      { index: 6, color: "#9fc939" },
      { index: 18, color: "#9fc939" },
      { index: 13, color: "#8d6fab" },
      { index: 30, color: "#8d6fab" },
    ],
  },

  // Map 39
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#4f6aa0" },
      { index: 12, color: "#4f6aa0" },
      { index: 1, color: "#bebaa2" },
      { index: 13, color: "#bebaa2" },
      { index: 2, color: "#2cb756" },
      { index: 9, color: "#2cb756" },
      { index: 4, color: "#3d2db0" },
      { index: 16, color: "#3d2db0" },
      { index: 5, color: "#88546d" },
      { index: 17, color: "#88546d" },
      { index: 8, color: "#9ea96c" },
      { index: 15, color: "#9ea96c" },
    ],
  },

  // Map 40
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#4d49a4" },
      { index: 2, color: "#4d49a4" },
      { index: 3, color: "#b4834a" },
      { index: 5, color: "#b4834a" },
      { index: 6, color: "#676828" },
      { index: 13, color: "#676828" },
      { index: 7, color: "#aec2b9" },
      { index: 9, color: "#aec2b9" },
      { index: 10, color: "#80a3b8" },
      { index: 15, color: "#80a3b8" },
      { index: 11, color: "#3f673c" },
      { index: 14, color: "#3f673c" },
    ],
  },

  // Map 41
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#afd18b" },
      { index: 12, color: "#afd18b" },
      { index: 1, color: "#a7b7b4" },
      { index: 8, color: "#a7b7b4" },
      { index: 2, color: "#8dcec9" },
      { index: 4, color: "#8dcec9" },
      { index: 5, color: "#8b93b9" },
      { index: 10, color: "#8b93b9" },
      { index: 9, color: "#75977f" },
      { index: 21, color: "#75977f" },
      { index: 13, color: "#9979b0" },
      { index: 18, color: "#9979b0" },
    ],
  },

  // Map 42
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#7b9c47" },
      { index: 7, color: "#7b9c47" },
      { index: 1, color: "#676f30" },
      { index: 3, color: "#676f30" },
      { index: 4, color: "#ab40ab" },
      { index: 9, color: "#ab40ab" },
      { index: 5, color: "#8d91b1" },
      { index: 17, color: "#8d91b1" },
      { index: 8, color: "#aa8068" },
      { index: 16, color: "#aa8068" },
      { index: 12, color: "#afaf72" },
      { index: 13, color: "#afaf72" },
    ],
  },

  // Map 43
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#3eb9b5" },
      { index: 2, color: "#3eb9b5" },
      { index: 3, color: "#6c4243" },
      { index: 5, color: "#6c4243" },
      { index: 6, color: "#8f30c7" },
      { index: 13, color: "#8f30c7" },
      { index: 8, color: "#42c828" },
      { index: 10, color: "#42c828" },
      { index: 11, color: "#7344cd" },
      { index: 16, color: "#7344cd" },
      { index: 12, color: "#79496f" },
      { index: 14, color: "#79496f" },
    ],
  },

  // Map 44
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#5f873d" },
      { index: 7, color: "#5f873d" },
      { index: 1, color: "#8fc140" },
      { index: 8, color: "#8fc140" },
      { index: 3, color: "#795671" },
      { index: 5, color: "#795671" },
      { index: 9, color: "#b8728e" },
      { index: 14, color: "#b8728e" },
      { index: 10, color: "#50cf40" },
      { index: 22, color: "#50cf40" },
      { index: 11, color: "#d09c98" },
      { index: 35, color: "#d09c98" },
    ],
  },

  // Map 45
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#2a5285" },
      { index: 7, color: "#2a5285" },
      { index: 1, color: "#2f74c1" },
      { index: 3, color: "#2f74c1" },
      { index: 4, color: "#3c6650" },
      { index: 5, color: "#3c6650" },
      { index: 8, color: "#2c8fc9" },
      { index: 13, color: "#2c8fc9" },
      { index: 9, color: "#5f6672" },
      { index: 21, color: "#5f6672" },
      { index: 12, color: "#bc3e72" },
      { index: 25, color: "#bc3e72" },
    ],
  },

  // Map 46
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#c63051" },
      { index: 7, color: "#c63051" },
      { index: 2, color: "#b49ba0" },
      { index: 9, color: "#b49ba0" },
      { index: 4, color: "#cd7e83" },
      { index: 5, color: "#cd7e83" },
      { index: 6, color: "#b1863b" },
      { index: 13, color: "#b1863b" },
      { index: 8, color: "#46759f" },
      { index: 15, color: "#46759f" },
      { index: 16, color: "#5d7cc4" },
      { index: 17, color: "#5d7cc4" },
    ],
  },

  // Map 47
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#b8afb9" },
      { index: 7, color: "#b8afb9" },
      { index: 1, color: "#768d6d" },
      { index: 3, color: "#768d6d" },
      { index: 4, color: "#9a4472" },
      { index: 11, color: "#9a4472" },
      { index: 8, color: "#8773c3" },
      { index: 10, color: "#8773c3" },
      { index: 12, color: "#2fcb4c" },
      { index: 20, color: "#2fcb4c" },
      { index: 14, color: "#cf31c7" },
      { index: 18, color: "#cf31c7" },
    ],
  },

  // Map 48
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#b63a77" },
      { index: 7, color: "#b63a77" },
      { index: 2, color: "#5d8e76" },
      { index: 4, color: "#5d8e76" },
      { index: 5, color: "#7a6cc3" },
      { index: 10, color: "#7a6cc3" },
      { index: 6, color: "#c1487c" },
      { index: 13, color: "#c1487c" },
      { index: 8, color: "#be74b2" },
      { index: 15, color: "#be74b2" },
      { index: 14, color: "#cc6b62" },
      { index: 16, color: "#cc6b62" },
    ],
  },

  // Map 49
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#bf4046" },
      { index: 2, color: "#bf4046" },
      { index: 3, color: "#41913c" },
      { index: 5, color: "#41913c" },
      { index: 6, color: "#c7c5bd" },
      { index: 18, color: "#c7c5bd" },
      { index: 7, color: "#2ec131" },
      { index: 9, color: "#2ec131" },
      { index: 10, color: "#9b833c" },
      { index: 23, color: "#9b833c" },
      { index: 13, color: "#804998" },
      { index: 19, color: "#804998" },
    ],
  },

  // Map 50
  {
    size: 6,
    endpoints: [
      { index: 0, color: "#396e4c" },
      { index: 12, color: "#396e4c" },
      { index: 1, color: "#95582b" },
      { index: 8, color: "#95582b" },
      { index: 2, color: "#be2895" },
      { index: 4, color: "#be2895" },
      { index: 5, color: "#5365bd" },
      { index: 10, color: "#5365bd" },
      { index: 9, color: "#98b34d" },
      { index: 16, color: "#98b34d" },
      { index: 13, color: "#537d54" },
      { index: 17, color: "#537d54" },
    ],
  },
];
