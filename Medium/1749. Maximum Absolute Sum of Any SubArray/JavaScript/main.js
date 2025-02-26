/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let maxSum = 0, minSum = 0, maxAbsolute = 0;

  for (let num of nums) {
    maxSum = Math.max(num, maxSum + num); // Maximum subarray sum ending at current index
    minSum = Math.min(num, minSum + num); // Minimum subarray sum ending at current index

    maxAbsolute = Math.max(maxAbsolute, Math.abs(maxSum), Math.abs(minSum));
  }

  return maxAbsolute;
};

// Example Test Cases
console.log(maxAbsoluteSum([1, -3, 2, 3, -4])); // Output: 5
console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2])); // Output: 8

