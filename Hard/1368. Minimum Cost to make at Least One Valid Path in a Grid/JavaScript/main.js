/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const deque = [];
  const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
  deque.push([0, 0, 0]);

  while (deque.length) {
    const [x, y, cost] = deque.shift();
    if (x === n - 1 && y === m - 1) {
      return cost;
    }
    if (visited[x][y]) continue;
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dirs[i];
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) {
        continue;
      }
      if (grid[x][y] === i + 1) {
        deque.unshift([nx, ny, cost]);
      } else {
        deque.push([nx, ny, cost + 1]);
      }
    }
  }
  return -1;
};
