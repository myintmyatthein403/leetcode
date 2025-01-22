/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const m = isWater.length;
  const n = isWater[0].length;
  const height = Array.from({ length: m }, () => Array(n).fill(-1));
  const queue = [];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  // Initialize the queue with all water cells
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] === 1) {
        height[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  // BFS to propagate heights
  let front = 0;
  while (front < queue.length) {
    const [x, y] = queue[front++];
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
        height[nx][ny] = height[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return height;
};
