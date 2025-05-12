/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const resultSet = new Set();
  const n = digits.length;

  // Iterate through all combinations of 3 digits (using indices to respect duplicates)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;

        const d1 = digits[i], d2 = digits[j], d3 = digits[k];

        // Skip if leading digit is zero
        if (d1 === 0) continue;

        // Check if the last digit is even
        if (d3 % 2 !== 0) continue;

        const num = d1 * 100 + d2 * 10 + d3;
        resultSet.add(num);
      }
    }
  }

  // Convert the set to a sorted array
  return Array.from(resultSet).sort((a, b) => a - b);
};

