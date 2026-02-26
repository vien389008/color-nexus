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

export const findShortestPath = (
  start: number,
  target: number,
  size: number,
  canVisit: (cellId: number) => boolean,
) => {
  if (start === target) return [start];

  const queue: number[] = [start];
  const parent = new Map<number, number | null>([[start, null]]);

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === undefined) continue;

    const row = Math.floor(current / size);
    const col = current % size;

    const neighbors = [
      row > 0 ? current - size : -1,
      row < size - 1 ? current + size : -1,
      col > 0 ? current - 1 : -1,
      col < size - 1 ? current + 1 : -1,
    ].filter((cellId) => cellId >= 0);

    for (const next of neighbors) {
      if (parent.has(next)) continue;
      if (next !== target && !canVisit(next)) continue;

      parent.set(next, current);

      if (next === target) {
        const path: number[] = [];
        let cursor: number | null = target;

        while (cursor !== null) {
          path.push(cursor);
          cursor = parent.get(cursor) ?? null;
        }

        return path.reverse();
      }

      queue.push(next);
    }
  }

  return null;
};
