export type Dot = {
  index: number;
  color: string;
};

export type Level = {
  id: number;
  size: number;
  dots: Dot[];
};

export type Path = {
  color: string;
  cells: number[];
};
