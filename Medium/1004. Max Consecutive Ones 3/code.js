/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let max = 0;
  let count = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      count++;
    }
    while (count > k) {
      if (nums[left] === 0) {
        count--;
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

// For Example
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // Output 6
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 3)); // Output 10
