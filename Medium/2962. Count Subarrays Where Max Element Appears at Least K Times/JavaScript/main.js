/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const maxVal = Math.max(...nums);
  let count = 0;
  let left = 0;
  let maxCount = 0;

  for (let right = 0; right < nums.length; right++) {
    // Count how many times maxVal appears in current window
    if (nums[right] === maxVal) {
      maxCount++;
    }

    // While the max appears at least k times, count subarrays
    while (maxCount >= k) {
      // All subarrays from left to right are valid
      count += nums.length - right;

      // Shrink window from the left
      if (nums[left] === maxVal) {
        maxCount--;
      }
      left++;
    }
  }

  return count;
};
