/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
  const m = heightMap.length;
  const n = heightMap[0].length;
  if (m < 3 || n < 3) return 0;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const pq = new MinPriorityQueue({ priority: cell => cell.height });
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let water = 0;

  for (let i = 0; i < m; i++) {
    pq.enqueue(new Cell(i, 0, heightMap[i][0]));
    pq.enqueue(new Cell(i, n - 1, heightMap[i][n - 1]));
    visited[i][0] = true;
    visited[i][n - 1] = true;
  }

  for (let j = 0; j < n; j++) {
    pq.enqueue(new Cell(0, j, heightMap[0][j]));
    pq.enqueue(new Cell(m - 1, j, heightMap[m - 1][j]));
    visited[0][j] = true;
    visited[m - 1][j] = true;
  }

  while (!pq.isEmpty()) {
    const cell = pq.dequeue().element;
    for (const [dx, dy] of dirs) {
      const x = cell.x + dx;
      const y = cell.y + dy;
      if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) continue;
      visited[x][y] = true;
      water += Math.max(0, cell.height - heightMap[x][y]);
      pq.enqueue(new Cell(x, y, Math.max(cell.height, heightMap[x][y])));
    }
  }

  return water;
};

class Cell {
  constructor(x, y, height) {
    this.x = x;
    this.y = y;
    this.height = height;
  }
}
