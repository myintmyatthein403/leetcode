/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  const m = grid.length;
  const n = grid[0].length;
  const arr = [];

  // Flatten the grid into a 1D array
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr.push(grid[i][j]);
    }
  }

  // Check modulo consistency
  const firstMod = arr[0] % x;
  for (const num of arr) {
    if (num % x !== firstMod) {
      return -1;
    }
  }

  // Sort the array
  arr.sort((a, b) => a - b);

  // Find the median
  const median = arr[Math.floor(arr.length / 2)];

  // Calculate operations
  let operations = 0;
  for (const num of arr) {
    operations += Math.abs(num - median) / x;
  }

  return operations;
};
