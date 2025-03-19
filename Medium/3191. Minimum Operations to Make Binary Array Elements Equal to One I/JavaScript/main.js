/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let operations = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (i + 2 >= nums.length) {
        return -1; // Impossible if we can't flip 3 consecutive elements
      }
      operations++;
      nums[i] ^= 1;
      nums[i + 1] ^= 1;
      nums[i + 2] ^= 1;
    }
  }
  // Check if any zeros remain
  for (let num of nums) {
    if (num === 0) {
      return -1; // Impossible if zeros remain after all operations
    }
  }
  return operations;
};
