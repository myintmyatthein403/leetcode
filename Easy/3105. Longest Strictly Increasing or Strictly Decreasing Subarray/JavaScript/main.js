/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let maxLength = 1;
  let currentLength = 1;
  let currentDiff = 0;
  let lastDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    currentDiff = nums[i] - nums[i - 1];
    if (currentDiff === 0) {
      currentLength = 1;
    } else if (currentDiff * lastDiff > 0) {
      currentLength++;
    } else {
      currentLength = 2;
    }
    maxLength = Math.max(maxLength, currentLength);
    lastDiff = currentDiff;
  }
  return maxLength;
};
