/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  // dp[i][j] = size of largest square ending at (i, j)
  let dp = Array.from({ length: m }, () => Array(n).fill(0));
  let total = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          // first row or column
          dp[i][j] = 1;
        } else {
          dp[i][j] = 1 + Math.min(
            dp[i - 1][j],     // top
            dp[i][j - 1],     // left
            dp[i - 1][j - 1]    // top-left
          );
        }
        total += dp[i][j];
      }
    }
  }

  return total;
};
