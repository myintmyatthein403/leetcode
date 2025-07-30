/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  // Step 1: Find the maximum value in the array
  let maxVal = Math.max(...nums);

  // Step 2: Find the longest contiguous subarray of maxVal
  let maxLength = 0;
  let currentLength = 0;

  for (let num of nums) {
    if (num === maxVal) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 0;
    }
  }

  return maxLength;
};
