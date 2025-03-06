/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;

  const numCount = new Array(n * n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      numCount[grid[i][j]]++;
    }
  }

  let repeated, missing;
  for (let i = 1; i <= n * n; i++) {
    if (numCount[i] === 2) {
      repeated = i;
    } else if (numCount[i] === 0) {
      missing = i;
    }
  }

  return [repeated, missing];
};
