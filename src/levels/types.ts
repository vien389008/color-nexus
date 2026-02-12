export type LevelData = {
  size: number;
  endpoints: {
    index: number;
    color: string;
  }[];
  blocked?: number[];
  connectors?: number[];
};
