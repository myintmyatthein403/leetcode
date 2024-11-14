/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let max = 0;
  let count = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      count++;
    }
    while (count > 1) {
      if (nums[left] === 0) {
        count--;
      }
      left++;
    }
    max = Math.max(max, right - left);
  }
  return max;
};

// For Example
console.log(longestSubarray([1, 1, 0, 1])); // Output 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // Output 5
console.log(longestSubarray([1, 1, 1])); // Output 2
