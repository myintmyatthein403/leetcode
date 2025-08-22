/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  let minRow = Infinity, maxRow = -Infinity;
  let minCol = Infinity, maxCol = -Infinity;

  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        minRow = Math.min(minRow, i);
        maxRow = Math.max(maxRow, i);
        minCol = Math.min(minCol, j);
        maxCol = Math.max(maxCol, j);
      }
    }
  }

  let height = maxRow - minRow + 1;
  let width = maxCol - minCol + 1;

  return height * width;
};
