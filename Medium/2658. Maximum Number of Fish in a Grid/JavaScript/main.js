/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let maxFish = 0;

  const directions = [
    [0, 1], [0, -1], [1, 0], [-1, 0]
  ];

  function dfs(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) {
      return 0;
    }

    let fish = grid[r][c];
    grid[r][c] = 0; // Mark as visited

    for (const [dr, dc] of directions) {
      fish += dfs(r + dr, c + dc);
    }

    return fish;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] > 0) {
        maxFish = Math.max(maxFish, dfs(r, c));
      }
    }
  }

  return maxFish;
};
