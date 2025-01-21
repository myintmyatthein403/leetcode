/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  const n = grid[0].length;

  const prefixSumTop = Array(n).fill(0);
  const prefixSumBottom = Array(n).fill(0);

  prefixSumTop[0] = grid[0][0];
  prefixSumBottom[0] = grid[1][0];

  for (let i = 1; i < n; i++) {
    prefixSumTop[i] = prefixSumTop[i - 1] + grid[0][i];
    prefixSumBottom[i] = prefixSumBottom[i - 1] + grid[1][i];
  }

  let result = Infinity;

  for (let i = 0; i < n; i++) {
    const top = prefixSumTop[n - 1] - prefixSumTop[i];
    const bottom = i === 0 ? 0 : prefixSumBottom[i - 1];
    result = Math.min(result, Math.max(top, bottom));
  }

  return result;
};
