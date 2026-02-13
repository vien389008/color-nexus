import { LevelData } from "./types";

export const level5x5Block: LevelData[] = [
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
  // Map 1
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#77aa83" },
      { index: 6, color: "#77aa83" },
      { index: 2, color: "#949d7f" },
      { index: 4, color: "#949d7f" },
      { index: 8, color: "#9d86c6" },
      { index: 14, color: "#9d86c6" },
      { index: 10, color: "#abac6f" },
      { index: 24, color: "#abac6f" },
    ],
    blocked: [1, 7, 19],
  },

  // Map 2
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#4a4068" },
      { index: 5, color: "#4a4068" },
      { index: 2, color: "#65c5a1" },
      { index: 7, color: "#65c5a1" },
      { index: 3, color: "#6271ae" },
      { index: 9, color: "#6271ae" },
      { index: 11, color: "#b87755" },
      { index: 15, color: "#b87755" },
    ],
    blocked: [8, 20, 10, 0],
  },

  // Map 3
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#af5e4a" },
      { index: 5, color: "#af5e4a" },
      { index: 1, color: "#57aa7e" },
      { index: 2, color: "#57aa7e" },
      { index: 3, color: "#97bb9c" },
      { index: 15, color: "#97bb9c" },
      { index: 13, color: "#3f8b9e" },
      { index: 17, color: "#3f8b9e" },
    ],
    blocked: [18, 12, 20],
  },

  // Map 4
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#69bcc5" },
      { index: 5, color: "#69bcc5" },
      { index: 1, color: "#895c53" },
      { index: 19, color: "#895c53" },
      { index: 10, color: "#834dba" },
      { index: 20, color: "#834dba" },
      { index: 16, color: "#7e7054" },
      { index: 22, color: "#7e7054" },
    ],
    blocked: [21, 24, 18, 11, 12, 23],
  },

  // Map 5
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#50c789" },
      { index: 5, color: "#50c789" },
      { index: 2, color: "#55ac5a" },
      { index: 7, color: "#55ac5a" },
      { index: 3, color: "#b88a99" },
      { index: 4, color: "#b88a99" },
      { index: 6, color: "#955498" },
      { index: 8, color: "#955498" },
    ],
    blocked: [1, 13, 12, 22],
  },

  // Map 6
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b17f43" },
      { index: 1, color: "#b17f43" },
      { index: 2, color: "#bbbb9d" },
      { index: 4, color: "#bbbb9d" },
      { index: 8, color: "#53c2a1" },
      { index: 10, color: "#53c2a1" },
      { index: 14, color: "#7cabb5" },
      { index: 24, color: "#7cabb5" },
    ],
    blocked: [6, 5, 18, 9, 7, 23],
  },

  // Map 7
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#7b4c67" },
      { index: 1, color: "#7b4c67" },
      { index: 2, color: "#9fb2aa" },
      { index: 4, color: "#9fb2aa" },
      { index: 6, color: "#8fb08c" },
      { index: 21, color: "#8fb08c" },
      { index: 10, color: "#464f5c" },
      { index: 15, color: "#464f5c" },
    ],
    blocked: [13, 5, 16, 20],
  },

  // Map 8
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#62ae73" },
      { index: 12, color: "#62ae73" },
      { index: 8, color: "#abc394" },
      { index: 14, color: "#abc394" },
      { index: 16, color: "#59734f" },
      { index: 20, color: "#59734f" },
      { index: 18, color: "#64c6a2" },
      { index: 22, color: "#64c6a2" },
    ],
    blocked: [0, 15, 3, 4, 17, 13],
  },

  // Map 9
  {
    size: 5,
    endpoints: [
      { index: 2, color: "#85a9ad" },
      { index: 4, color: "#85a9ad" },
      { index: 5, color: "#63c2b2" },
      { index: 6, color: "#63c2b2" },
      { index: 10, color: "#a8443e" },
      { index: 20, color: "#a8443e" },
      { index: 16, color: "#b5a174" },
      { index: 24, color: "#b5a174" },
    ],
    blocked: [0, 21, 1, 11],
  },

  // Map 10
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8b5f45" },
      { index: 1, color: "#8b5f45" },
      { index: 2, color: "#c3979c" },
      { index: 3, color: "#c3979c" },
      { index: 5, color: "#ae6bb7" },
      { index: 7, color: "#ae6bb7" },
      { index: 9, color: "#afa48f" },
      { index: 20, color: "#afa48f" },
    ],
    blocked: [12, 4, 15, 8],
  },

  // Map 11
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#4a9d5e" },
      { index: 1, color: "#4a9d5e" },
      { index: 2, color: "#b36a6b" },
      { index: 4, color: "#b36a6b" },
      { index: 6, color: "#9aa880" },
      { index: 11, color: "#9aa880" },
      { index: 7, color: "#c1afb5" },
      { index: 10, color: "#c1afb5" },
    ],
    blocked: [5, 12, 9, 21, 24, 20],
  },

  // Map 12
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#ae5d8c" },
      { index: 1, color: "#ae5d8c" },
      { index: 2, color: "#824199" },
      { index: 7, color: "#824199" },
      { index: 3, color: "#84bd9a" },
      { index: 9, color: "#84bd9a" },
      { index: 5, color: "#67b37c" },
      { index: 24, color: "#67b37c" },
    ],
    blocked: [8, 14, 23, 15, 20, 6],
  },

  // Map 13
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#a044a6" },
      { index: 5, color: "#a044a6" },
      { index: 1, color: "#7991c2" },
      { index: 2, color: "#7991c2" },
      { index: 4, color: "#5b7d66" },
      { index: 20, color: "#5b7d66" },
      { index: 14, color: "#41bfa1" },
      { index: 24, color: "#41bfa1" },
    ],
    blocked: [21, 16, 3],
  },

  // Map 14
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8f6963" },
      { index: 1, color: "#8f6963" },
      { index: 2, color: "#a34a8e" },
      { index: 9, color: "#a34a8e" },
      { index: 5, color: "#806b52" },
      { index: 10, color: "#806b52" },
      { index: 6, color: "#b449b1" },
      { index: 24, color: "#b449b1" },
    ],
    blocked: [14, 23, 13, 12, 3, 4],
  },

  // Map 15
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b3b187" },
      { index: 5, color: "#b3b187" },
      { index: 1, color: "#678b95" },
      { index: 21, color: "#678b95" },
      { index: 13, color: "#69b0c2" },
      { index: 19, color: "#69b0c2" },
      { index: 17, color: "#b5b3c5" },
      { index: 23, color: "#b5b3c5" },
    ],
    blocked: [6, 22, 16, 24],
  },

  // Map 16
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#7f7566" },
      { index: 5, color: "#7f7566" },
      { index: 1, color: "#afaa8e" },
      { index: 23, color: "#afaa8e" },
      { index: 3, color: "#67b48b" },
      { index: 19, color: "#67b48b" },
      { index: 10, color: "#b3b57c" },
      { index: 20, color: "#b3b57c" },
    ],
    blocked: [21, 13, 8, 18, 24, 16],
  },

  // Map 17
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8276a4" },
      { index: 1, color: "#8276a4" },
      { index: 2, color: "#bb6b77" },
      { index: 7, color: "#bb6b77" },
      { index: 4, color: "#58a75d" },
      { index: 14, color: "#58a75d" },
      { index: 6, color: "#40948c" },
      { index: 10, color: "#40948c" },
    ],
    blocked: [8, 3, 5],
  },

  // Map 18
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b178c3" },
      { index: 1, color: "#b178c3" },
      { index: 2, color: "#c1a599" },
      { index: 3, color: "#c1a599" },
      { index: 4, color: "#74a2aa" },
      { index: 5, color: "#74a2aa" },
      { index: 14, color: "#41a743" },
      { index: 18, color: "#41a743" },
    ],
    blocked: [17, 21, 22, 13, 6, 20],
  },

  // Map 19
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#67786f" },
      { index: 5, color: "#67786f" },
      { index: 1, color: "#b0698d" },
      { index: 11, color: "#b0698d" },
      { index: 3, color: "#59c38d" },
      { index: 19, color: "#59c38d" },
      { index: 20, color: "#649fba" },
      { index: 23, color: "#649fba" },
    ],
    blocked: [18, 24, 15, 10, 2],
  },

  // Map 20
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#bb7650" },
      { index: 5, color: "#bb7650" },
      { index: 1, color: "#63b45e" },
      { index: 6, color: "#63b45e" },
      { index: 2, color: "#49a770" },
      { index: 7, color: "#49a770" },
      { index: 9, color: "#bec380" },
      { index: 19, color: "#bec380" },
    ],
    blocked: [3, 8, 20, 4],
  },

  // Map 21
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#466068" },
      { index: 2, color: "#466068" },
      { index: 5, color: "#53c4a0" },
      { index: 10, color: "#53c4a0" },
      { index: 6, color: "#3da872" },
      { index: 14, color: "#3da872" },
      { index: 15, color: "#78baba" },
      { index: 20, color: "#78baba" },
    ],
    blocked: [17, 4, 3, 0],
  },

  // Map 22
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#bd4ba1" },
      { index: 1, color: "#bd4ba1" },
      { index: 2, color: "#41a445" },
      { index: 3, color: "#41a445" },
      { index: 5, color: "#769b44" },
      { index: 20, color: "#769b44" },
      { index: 8, color: "#c57578" },
      { index: 24, color: "#c57578" },
    ],
    blocked: [23, 4, 21, 22],
  },

  // Map 23
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8cbf8d" },
      { index: 5, color: "#8cbf8d" },
      { index: 1, color: "#9b7551" },
      { index: 2, color: "#9b7551" },
      { index: 3, color: "#b24f61" },
      { index: 9, color: "#b24f61" },
      { index: 7, color: "#a374c2" },
      { index: 21, color: "#a374c2" },
    ],
    blocked: [6, 22, 16],
  },

  // Map 24
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6443ac" },
      { index: 1, color: "#6443ac" },
      { index: 2, color: "#b29787" },
      { index: 3, color: "#b29787" },
      { index: 5, color: "#a29597" },
      { index: 11, color: "#a29597" },
      { index: 7, color: "#57654d" },
      { index: 15, color: "#57654d" },
    ],
    blocked: [16, 4, 6, 24, 23],
  },

  // Map 25
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#ab6aa3" },
      { index: 1, color: "#ab6aa3" },
      { index: 3, color: "#b799ba" },
      { index: 14, color: "#b799ba" },
      { index: 6, color: "#b4af7b" },
      { index: 24, color: "#b4af7b" },
      { index: 10, color: "#4b4a7b" },
      { index: 20, color: "#4b4a7b" },
    ],
    blocked: [5, 2, 23, 8, 7],
  },

  // Map 26
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#9589c5" },
      { index: 2, color: "#9589c5" },
      { index: 4, color: "#7a90be" },
      { index: 24, color: "#7a90be" },
      { index: 8, color: "#6f6261" },
      { index: 12, color: "#6f6261" },
      { index: 15, color: "#837593" },
      { index: 22, color: "#837593" },
    ],
    blocked: [7, 18, 23, 20, 3, 17],
  },

  // Map 27
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8c7bb9" },
      { index: 5, color: "#8c7bb9" },
      { index: 2, color: "#40946d" },
      { index: 6, color: "#40946d" },
      { index: 3, color: "#824a68" },
      { index: 4, color: "#824a68" },
      { index: 8, color: "#41b9aa" },
      { index: 14, color: "#41b9aa" },
    ],
    blocked: [9, 18, 1],
  },

  // Map 28
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8c7d80" },
      { index: 2, color: "#8c7d80" },
      { index: 4, color: "#69537d" },
      { index: 8, color: "#69537d" },
      { index: 10, color: "#884c7e" },
      { index: 20, color: "#884c7e" },
      { index: 14, color: "#657476" },
      { index: 24, color: "#657476" },
    ],
    blocked: [3, 12, 13, 7, 11],
  },

  // Map 29
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#c29796" },
      { index: 4, color: "#c29796" },
      { index: 5, color: "#a1a869" },
      { index: 14, color: "#a1a869" },
      { index: 18, color: "#557a5e" },
      { index: 24, color: "#557a5e" },
      { index: 20, color: "#4780a4" },
      { index: 22, color: "#4780a4" },
    ],
    blocked: [17, 9, 15, 8, 16, 19],
  },

  // Map 30
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#54a4aa" },
      { index: 10, color: "#54a4aa" },
      { index: 1, color: "#466440" },
      { index: 6, color: "#466440" },
      { index: 2, color: "#4daf52" },
      { index: 3, color: "#4daf52" },
      { index: 4, color: "#a9554c" },
      { index: 20, color: "#a9554c" },
    ],
    blocked: [12, 7, 8, 15, 11],
  },
  // Map 1
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b0b47b" },
      { index: 24, color: "#b0b47b" },
      { index: 4, color: "#8c9844" },
      { index: 14, color: "#8c9844" },
    ],
    blocked: [22, 19, 13],
  },

  // Map 2
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#4c8fb5" },
      { index: 1, color: "#4c8fb5" },
      { index: 2, color: "#5bbbb4" },
      { index: 20, color: "#5bbbb4" },
    ],
    blocked: [14, 10, 6, 11, 17, 5],
  },

  // Map 3
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#9e9da1" },
      { index: 1, color: "#9e9da1" },
      { index: 2, color: "#ad896b" },
      { index: 5, color: "#ad896b" },
    ],
    blocked: [22, 6, 7],
  },

  // Map 4
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#907a7b" },
      { index: 10, color: "#907a7b" },
      { index: 2, color: "#c0bec4" },
      { index: 13, color: "#c0bec4" },
    ],
    blocked: [18, 8, 17, 1],
  },

  // Map 5
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#605f4f" },
      { index: 5, color: "#605f4f" },
      { index: 1, color: "#9e868f" },
      { index: 20, color: "#9e868f" },
    ],
    blocked: [16, 2, 21],
  },

  // Map 6
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#613e54" },
      { index: 1, color: "#613e54" },
      { index: 2, color: "#3f9cab" },
      { index: 5, color: "#3f9cab" },
    ],
    blocked: [7, 4, 10],
  },

  // Map 7
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#7361a4" },
      { index: 5, color: "#7361a4" },
      { index: 2, color: "#566b63" },
      { index: 4, color: "#566b63" },
    ],
    blocked: [10, 0, 9],
  },

  // Map 8
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#58b188" },
      { index: 2, color: "#58b188" },
      { index: 3, color: "#508085" },
      { index: 4, color: "#508085" },
    ],
    blocked: [7, 0, 12],
  },

  // Map 9
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#9b7c51" },
      { index: 1, color: "#9b7c51" },
      { index: 2, color: "#a88382" },
      { index: 5, color: "#a88382" },
    ],
    blocked: [17, 10, 9, 14, 4],
  },

  // Map 10
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b74953" },
      { index: 21, color: "#b74953" },
      { index: 2, color: "#c4497a" },
      { index: 19, color: "#c4497a" },
    ],
    blocked: [16, 18, 13, 14, 5],
  },

  // Map 11
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#3fc662" },
      { index: 7, color: "#3fc662" },
      { index: 2, color: "#3fa25e" },
      { index: 15, color: "#3fa25e" },
    ],
    blocked: [16, 1, 10, 11, 14],
  },

  // Map 12
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#48b5c5" },
      { index: 9, color: "#48b5c5" },
      { index: 5, color: "#82c4be" },
      { index: 15, color: "#82c4be" },
    ],
    blocked: [10, 16, 0],
  },

  // Map 13
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#5499be" },
      { index: 5, color: "#5499be" },
      { index: 1, color: "#3ebab2" },
      { index: 6, color: "#3ebab2" },
    ],
    blocked: [12, 10, 7],
  },

  // Map 14
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#7d6a6f" },
      { index: 12, color: "#7d6a6f" },
      { index: 4, color: "#b541a2" },
      { index: 20, color: "#b541a2" },
    ],
    blocked: [17, 8, 3],
  },

  // Map 15
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#4966ab" },
      { index: 21, color: "#4966ab" },
      { index: 8, color: "#495148" },
      { index: 12, color: "#495148" },
    ],
    blocked: [22, 17, 4, 16, 11, 3],
  },

  // Map 16
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#72c6be" },
      { index: 24, color: "#72c6be" },
      { index: 4, color: "#47acb3" },
      { index: 14, color: "#47acb3" },
    ],
    blocked: [13, 19, 5, 6, 16],
  },

  // Map 17
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#7d6f62" },
      { index: 1, color: "#7d6f62" },
      { index: 3, color: "#3d4956" },
      { index: 20, color: "#3d4956" },
    ],
    blocked: [21, 2, 24],
  },

  // Map 18
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6f72b8" },
      { index: 5, color: "#6f72b8" },
      { index: 2, color: "#8b6351" },
      { index: 17, color: "#8b6351" },
    ],
    blocked: [10, 14, 1],
  },

  // Map 19
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8f78ac" },
      { index: 5, color: "#8f78ac" },
      { index: 1, color: "#805d96" },
      { index: 16, color: "#805d96" },
    ],
    blocked: [6, 17, 22],
  },

  // Map 20
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#4c7176" },
      { index: 13, color: "#4c7176" },
      { index: 23, color: "#b2654e" },
      { index: 24, color: "#b2654e" },
    ],
    blocked: [6, 19, 1, 4, 18],
  },

  // Map 21
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#85bd65" },
      { index: 10, color: "#85bd65" },
      { index: 2, color: "#c141b8" },
      { index: 6, color: "#c141b8" },
    ],
    blocked: [7, 4, 1],
  },

  // Map 22
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#9c79bd" },
      { index: 15, color: "#9c79bd" },
      { index: 2, color: "#c0c741" },
      { index: 21, color: "#c0c741" },
    ],
    blocked: [20, 7, 22, 11, 4, 0],
  },

  // Map 23
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#4a555d" },
      { index: 9, color: "#4a555d" },
      { index: 5, color: "#80af94" },
      { index: 19, color: "#80af94" },
    ],
    blocked: [0, 14, 8],
  },

  // Map 24
  {
    size: 5,
    endpoints: [
      { index: 2, color: "#76657a" },
      { index: 21, color: "#76657a" },
      { index: 18, color: "#9ab04a" },
      { index: 24, color: "#9ab04a" },
    ],
    blocked: [22, 17, 1, 19, 20, 0],
  },

  // Map 25
  {
    size: 5,
    endpoints: [
      { index: 2, color: "#95b57f" },
      { index: 9, color: "#95b57f" },
      { index: 5, color: "#85b345" },
      { index: 19, color: "#85b345" },
    ],
    blocked: [0, 1, 16, 24],
  },

  // Map 26
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#a56f53" },
      { index: 22, color: "#a56f53" },
      { index: 10, color: "#905885" },
      { index: 20, color: "#905885" },
    ],
    blocked: [17, 12, 21, 24, 7],
  },

  // Map 27
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b57aaf" },
      { index: 4, color: "#b57aaf" },
      { index: 6, color: "#6a50bf" },
      { index: 24, color: "#6a50bf" },
    ],
    blocked: [22, 13, 14, 19, 5],
  },

  // Map 28
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#aea5aa" },
      { index: 5, color: "#aea5aa" },
      { index: 1, color: "#419d6a" },
      { index: 4, color: "#419d6a" },
    ],
    blocked: [8, 10, 3],
  },

  // Map 29
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#a979a3" },
      { index: 11, color: "#a979a3" },
      { index: 3, color: "#b898c1" },
      { index: 20, color: "#b898c1" },
    ],
    blocked: [12, 15, 18],
  },

  // Map 30
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#b67f69" },
      { index: 7, color: "#b67f69" },
      { index: 5, color: "#bac49c" },
      { index: 24, color: "#bac49c" },
    ],
    blocked: [16, 0, 23, 12],
  },
  // Map 1
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#5d56c3" },
      { index: 1, color: "#5d56c3" },
      { index: 2, color: "#805988" },
      { index: 6, color: "#805988" },
      { index: 9, color: "#b83d61" },
      { index: 24, color: "#b83d61" },
    ],
    blocked: [4, 8, 3, 5, 23, 20],
  },

  // Map 2
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b0b58f" },
      { index: 1, color: "#b0b58f" },
      { index: 4, color: "#c7716c" },
      { index: 9, color: "#c7716c" },
      { index: 5, color: "#70b9b8" },
      { index: 7, color: "#70b9b8" },
    ],
    blocked: [3, 6, 2, 8],
  },

  // Map 3
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#71bcb2" },
      { index: 5, color: "#71bcb2" },
      { index: 2, color: "#bb5465" },
      { index: 19, color: "#bb5465" },
      { index: 3, color: "#4b603d" },
      { index: 9, color: "#4b603d" },
    ],
    blocked: [24, 8, 14, 6, 13, 1],
  },

  // Map 4
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#bb819d" },
      { index: 1, color: "#bb819d" },
      { index: 2, color: "#8280b6" },
      { index: 7, color: "#8280b6" },
      { index: 5, color: "#ba7746" },
      { index: 24, color: "#ba7746" },
    ],
    blocked: [6, 3, 4],
  },

  // Map 5
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#73a578" },
      { index: 7, color: "#73a578" },
      { index: 2, color: "#877b8b" },
      { index: 9, color: "#877b8b" },
      { index: 5, color: "#a9a7a5" },
      { index: 15, color: "#a9a7a5" },
    ],
    blocked: [8, 20, 0],
  },

  // Map 6
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#9d4552" },
      { index: 1, color: "#9d4552" },
      { index: 2, color: "#726366" },
      { index: 4, color: "#726366" },
      { index: 10, color: "#ad44bc" },
      { index: 20, color: "#ad44bc" },
    ],
    blocked: [3, 5, 6, 14, 15],
  },

  // Map 7
  {
    size: 5,
    endpoints: [
      { index: 2, color: "#76b74b" },
      { index: 7, color: "#76b74b" },
      { index: 3, color: "#a95666" },
      { index: 4, color: "#a95666" },
      { index: 6, color: "#73874a" },
      { index: 10, color: "#73874a" },
    ],
    blocked: [5, 0, 1, 16],
  },

  // Map 8
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#894248" },
      { index: 1, color: "#894248" },
      { index: 2, color: "#979e79" },
      { index: 4, color: "#979e79" },
      { index: 5, color: "#7caeb3" },
      { index: 23, color: "#7caeb3" },
    ],
    blocked: [24, 17, 22, 9, 8],
  },

  // Map 9
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#515ba0" },
      { index: 10, color: "#515ba0" },
      { index: 2, color: "#5ba559" },
      { index: 20, color: "#5ba559" },
      { index: 18, color: "#baa382" },
      { index: 22, color: "#baa382" },
    ],
    blocked: [17, 21, 6, 1],
  },

  // Map 10
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#ab5cb2" },
      { index: 16, color: "#ab5cb2" },
      { index: 2, color: "#4c6aaf" },
      { index: 8, color: "#4c6aaf" },
      { index: 4, color: "#644784" },
      { index: 6, color: "#644784" },
    ],
    blocked: [21, 11, 1, 20],
  },

  // Map 11
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6e6e91" },
      { index: 6, color: "#6e6e91" },
      { index: 1, color: "#a06d64" },
      { index: 4, color: "#a06d64" },
      { index: 10, color: "#597495" },
      { index: 24, color: "#597495" },
    ],
    blocked: [20, 11, 9],
  },

  // Map 12
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#647484" },
      { index: 5, color: "#647484" },
      { index: 2, color: "#3e845f" },
      { index: 8, color: "#3e845f" },
      { index: 6, color: "#9769c3" },
      { index: 14, color: "#9769c3" },
    ],
    blocked: [1, 4, 17, 9, 20],
  },

  // Map 13
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b8756c" },
      { index: 5, color: "#b8756c" },
      { index: 2, color: "#9543ae" },
      { index: 3, color: "#9543ae" },
      { index: 6, color: "#923fae" },
      { index: 9, color: "#923fae" },
    ],
    blocked: [1, 20, 4],
  },

  // Map 14
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#4188be" },
      { index: 2, color: "#4188be" },
      { index: 4, color: "#51c4ad" },
      { index: 22, color: "#51c4ad" },
      { index: 18, color: "#807940" },
      { index: 24, color: "#807940" },
    ],
    blocked: [12, 3, 17, 23],
  },

  // Map 15
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#889fa6" },
      { index: 5, color: "#889fa6" },
      { index: 1, color: "#a4b887" },
      { index: 2, color: "#a4b887" },
      { index: 3, color: "#5e91a3" },
      { index: 4, color: "#5e91a3" },
    ],
    blocked: [24, 23, 22],
  },

  // Map 16
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#4bc04e" },
      { index: 5, color: "#4bc04e" },
      { index: 1, color: "#a54469" },
      { index: 2, color: "#a54469" },
      { index: 4, color: "#5c84be" },
      { index: 21, color: "#5c84be" },
    ],
    blocked: [16, 22, 3],
  },

  // Map 17
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#4d67b0" },
      { index: 1, color: "#4d67b0" },
      { index: 2, color: "#5cc5c0" },
      { index: 7, color: "#5cc5c0" },
      { index: 5, color: "#56aa3d" },
      { index: 24, color: "#56aa3d" },
    ],
    blocked: [22, 3, 23, 12, 4],
  },

  // Map 18
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#776ac3" },
      { index: 14, color: "#776ac3" },
      { index: 11, color: "#40bdae" },
      { index: 12, color: "#40bdae" },
      { index: 15, color: "#3e4b9f" },
      { index: 24, color: "#3e4b9f" },
    ],
    blocked: [8, 20, 13, 19, 10, 7],
  },

  // Map 19
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#8f3f3d" },
      { index: 10, color: "#8f3f3d" },
      { index: 1, color: "#4a66b5" },
      { index: 20, color: "#4a66b5" },
      { index: 22, color: "#5d6cc6" },
      { index: 24, color: "#5d6cc6" },
    ],
    blocked: [19, 2, 21],
  },

  // Map 20
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#c25aa7" },
      { index: 5, color: "#c25aa7" },
      { index: 2, color: "#686bc2" },
      { index: 3, color: "#686bc2" },
      { index: 10, color: "#bb904c" },
      { index: 14, color: "#bb904c" },
    ],
    blocked: [4, 1, 11, 9, 6, 16],
  },

  // Map 21
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#b04798" },
      { index: 6, color: "#b04798" },
      { index: 4, color: "#b45d5a" },
      { index: 22, color: "#b45d5a" },
      { index: 10, color: "#4e7bb1" },
      { index: 16, color: "#4e7bb1" },
    ],
    blocked: [17, 5, 11, 12],
  },

  // Map 22
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#7db0a0" },
      { index: 2, color: "#7db0a0" },
      { index: 3, color: "#869b5d" },
      { index: 10, color: "#869b5d" },
      { index: 12, color: "#4ba29f" },
      { index: 20, color: "#4ba29f" },
    ],
    blocked: [0, 11, 22, 15],
  },

  // Map 23
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#ab3d55" },
      { index: 7, color: "#ab3d55" },
      { index: 3, color: "#4d9da4" },
      { index: 9, color: "#4d9da4" },
      { index: 5, color: "#ba8a53" },
      { index: 23, color: "#ba8a53" },
    ],
    blocked: [8, 24, 2, 0],
  },

  // Map 24
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#5667ab" },
      { index: 5, color: "#5667ab" },
      { index: 1, color: "#8b4ac6" },
      { index: 19, color: "#8b4ac6" },
      { index: 3, color: "#c48dc7" },
      { index: 13, color: "#c48dc7" },
    ],
    blocked: [14, 18, 12],
  },

  // Map 25
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#a96148" },
      { index: 12, color: "#a96148" },
      { index: 3, color: "#6b4c7b" },
      { index: 18, color: "#6b4c7b" },
      { index: 10, color: "#656a96" },
      { index: 24, color: "#656a96" },
    ],
    blocked: [2, 17, 4, 19, 5],
  },

  // Map 26
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#c24047" },
      { index: 5, color: "#c24047" },
      { index: 2, color: "#7d7d43" },
      { index: 3, color: "#7d7d43" },
      { index: 4, color: "#a2b2ad" },
      { index: 20, color: "#a2b2ad" },
    ],
    blocked: [21, 6, 1, 16],
  },

  // Map 27
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#8754a0" },
      { index: 6, color: "#8754a0" },
      { index: 2, color: "#667a62" },
      { index: 5, color: "#667a62" },
      { index: 3, color: "#419c98" },
      { index: 9, color: "#419c98" },
    ],
    blocked: [17, 0, 14, 8],
  },

  // Map 28
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#6b8385" },
      { index: 1, color: "#6b8385" },
      { index: 5, color: "#649554" },
      { index: 10, color: "#649554" },
      { index: 6, color: "#964161" },
      { index: 8, color: "#964161" },
    ],
    blocked: [9, 2, 3, 18, 4, 7],
  },

  // Map 29
  {
    size: 5,
    endpoints: [
      { index: 0, color: "#46c75a" },
      { index: 5, color: "#46c75a" },
      { index: 1, color: "#93908d" },
      { index: 2, color: "#93908d" },
      { index: 3, color: "#879d64" },
      { index: 23, color: "#879d64" },
    ],
    blocked: [6, 22, 14, 13],
  },

  // Map 30
  {
    size: 5,
    endpoints: [
      { index: 1, color: "#a7a48d" },
      { index: 3, color: "#a7a48d" },
      { index: 5, color: "#907d92" },
      { index: 22, color: "#907d92" },
      { index: 9, color: "#97c27c" },
      { index: 24, color: "#97c27c" },
    ],
    blocked: [0, 8, 4, 23],
  },
];
