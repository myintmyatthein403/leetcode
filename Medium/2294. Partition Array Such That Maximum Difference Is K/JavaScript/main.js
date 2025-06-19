/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
  nums.sort((a, b) => a - b);  // Step 1: Sort the array
  let count = 1;               // At least one group is needed
  let start = nums[0];         // Track the start of the current group

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - start > k) {
      count++;             // Need a new group
      start = nums[i];     // Reset start of new group
    }
  }

  return count;
};
