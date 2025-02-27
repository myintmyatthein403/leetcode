/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const indexMap = new Map(); // Map value to index for quick lookup
  const dp = new Map(); // Stores length of Fibonacci-like subsequences
  let maxLen = 0;

  // Populate indexMap for quick lookups
  for (let i = 0; i < arr.length; i++) {
    indexMap.set(arr[i], i);
  }

  // Iterate over all pairs (i, j) where i < j
  for (let j = 1; j < arr.length; j++) {
    for (let i = 0; i < j; i++) {
      let x = arr[i], y = arr[j];
      let prevIndex = indexMap.get(x + y); // Check if x + y exists

      if (prevIndex !== undefined && prevIndex > j) {
        let key = `${i},${j}`;
        let prevKey = `${j},${prevIndex}`;
        let length = (dp.get(key) || 2) + 1;

        dp.set(prevKey, length);
        maxLen = Math.max(maxLen, length);
      }
    }
  }

  return maxLen >= 3 ? maxLen : 0; // Return max length found or 0 if no valid sequence
};

// Example test cases
console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])); // Output: 5
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])); // Output: 3

