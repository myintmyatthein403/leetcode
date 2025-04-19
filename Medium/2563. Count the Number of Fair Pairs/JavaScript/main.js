/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b); // Step 1: Sort the array
  let n = nums.length;
  let count = 0;

  // Step 2: For each i, find valid j using binary search
  for (let i = 0; i < n; i++) {
    let low = lower - nums[i];
    let high = upper - nums[i];

    // Find the leftmost index j > i such that nums[j] >= low
    let left = binarySearchLeft(nums, low, i + 1);
    // Find the rightmost index j > i such that nums[j] <= high
    let right = binarySearchRight(nums, high, i + 1);

    if (left <= right) {
      count += (right - left + 1);
    }
  }

  return count;

  // Helper: Find first index >= target starting from 'start'
  function binarySearchLeft(arr, target, start) {
    let l = start, r = arr.length - 1, ans = arr.length;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (arr[m] >= target) {
        ans = m;
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return ans;
  }

  // Helper: Find last index <= target starting from 'start'
  function binarySearchRight(arr, target, start) {
    let l = start, r = arr.length - 1, ans = start - 1;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (arr[m] <= target) {
        ans = m;
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return ans;
  }
};
