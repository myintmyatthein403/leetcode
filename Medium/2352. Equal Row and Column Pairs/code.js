/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  const rowCounter = new Map();
  let count = 0;

  for (let i = 0; i < n; i++) {
    const key = grid[i].join(',');
    rowCounter.set(key, (rowCounter.get(key) || 0) + 1);
  }

  for (let col = 0; col < n; col++) {
    const colPattern = [];
    for (let row = 0; row < n; row++) {
      colPattern.push(grid[row][col]);
    }
    const colKey = colPattern.join(',');
    if (rowCounter.has(colKey)) {
      count += rowCounter.get(colKey);
    }

  }
  return count;
};

// For example
console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]])); // Output: 1
console.log(equalPairs([[1, 5], [7, 3], [3, 1]])); // Output: 0
console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]])) // Output: 3
