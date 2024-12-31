/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  try {
    if (n === 0) return arr; // Base case: if n is 0, return the array as is
    return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
        // Recursively flatten sub-arrays, decreasing the depth by 1
        acc.push(...flat(val, n - 1));
      } else {
        acc.push(val);
      }
      return acc;
    }, []);
  } catch (error) {
    return arr;
  }
};

// Test Case
console.log(flat([1, [2, [3, [4, [5]]]], 6], 0)); // [1, [2, [3, [4, [5]]]], 6]
console.log(flat([1, [2, [3, [4, [5]]]], 6], 1)); // [1, 2, [3, [4, [5]], 6]
console.log(flat([1, [2, [3, [4, [5]]]], 6], 2)); // [1, 2, 3, [4, [5]], 6]

// Explanation
// Base Case: If 
// 𝑛 = 0
// n=0, we return the array as it is.
// Recursive Flattening: If an element is an array, we recursively call flat on that element, decreasing 𝑛n by 1.
// Efficient Push: We use acc.push(...flat(val, n - 1)) to avoid repeatedly concatenating arrays.
// Why This is Better
// Reduced Iterations: By directly flattening sub-arrays recursively, we avoid creating intermediate arrays for each level of depth.
// Memory Efficiency: Using ... (spread operator) to push elements reduces memory overhead compared to concatenating arrays.
