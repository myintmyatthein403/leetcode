/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid) {
  const n = grid.length;
  const diagonals = new Map();

  // Step 1: Collect diagonals by key = i - j
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const key = i - j;
      if (!diagonals.has(key)) diagonals.set(key, []);
      diagonals.get(key).push(grid[i][j]);
    }
  }

  // Step 2: Sort each diagonal based on its key
  for (let [key, arr] of diagonals.entries()) {
    if (key >= 0) {
      // bottom-left triangle (including main diagonal) → descending
      arr.sort((a, b) => b - a);
    } else {
      // top-right triangle → ascending
      arr.sort((a, b) => a - b);
    }
    diagonals.set(key, arr);
  }

  // Step 3: Write back values from sorted diagonals
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const key = i - j;
      grid[i][j] = diagonals.get(key).shift(); // take next element
    }
  }

  return grid;
};
