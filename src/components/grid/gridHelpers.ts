export const getCellFromTouch = (
  x: number,
  y: number,
  cellSize: number,
  size: number,
) => {
  const col = Math.floor(x / cellSize);
  const row = Math.floor(y / cellSize);
  if (row < 0 || row >= size || col < 0 || col >= size) return null;
  return row * size + col;
};

export const isAdjacent = (a: number, b: number, size: number) => {
  const ar = Math.floor(a / size);
  const ac = a % size;
  const br = Math.floor(b / size);
  const bc = b % size;

  return (
    (Math.abs(ar - br) === 1 && ac === bc) ||
    (Math.abs(ac - bc) === 1 && ar === br)
  );
};
