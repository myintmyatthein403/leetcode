/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let negative = 0;
  let positive = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negative++
    } else if (nums[i] > 0) {
      positive++
    } else {
      continue
    }
  }
  return Math.max(negative, positive)
};

// Optimize
function maxCount(nums) {
  // Find the first non-negative index (position of 0 or first positive number)
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < 0) left = mid + 1; // Move right
    else right = mid - 1; // Move left
  }
  let neg = left; // Count of negative numbers

  // Find the first positive index
  left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= 0) left = mid + 1; // Move right
    else right = mid - 1; // Move left
  }
  let pos = nums.length - left; // Count of positive numbers

  return Math.max(neg, pos);
}

