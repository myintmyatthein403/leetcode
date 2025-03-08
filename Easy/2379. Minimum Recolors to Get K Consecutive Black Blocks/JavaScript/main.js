/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let n = blocks.length;
  let minOperations = Infinity; // Initialize with a large number

  // Sliding window approach
  for (let i = 0; i <= n - k; i++) {
    let countW = 0;

    // Count how many 'W' (white blocks) in the window of size k
    for (let j = i; j < i + k; j++) {
      if (blocks[j] === 'W') {
        countW++;
      }
    }

    // Update the minimum operations needed
    minOperations = Math.min(minOperations, countW);
  }

  return minOperations;
};
