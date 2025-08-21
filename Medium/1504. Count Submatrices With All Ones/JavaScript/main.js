/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  // Step 1: build heights matrix
  let heights = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        heights[i][j] = (i > 0 ? heights[i - 1][j] : 0) + 1;
      }
    }
  }

  let count = 0;

  // Step 2: row by row, count rectangles
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (heights[i][j] > 0) {
        let minHeight = heights[i][j];
        for (let k = j; k >= 0 && heights[i][k] > 0; k--) {
          minHeight = Math.min(minHeight, heights[i][k]);
          count += minHeight;
        }
      }
    }
  }

  return count;
};
