/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  let n = nums.length;

  // Step 1: Apply the given operation sequentially
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  // Step 2: Shift all zeros to the end
  let result = []
  let zeroCount = 0;

  for (let num of nums) {
    if (num !== 0) {
      result.push(num)
    } else {
      zeroCount++
    }
  }

  // Append the zeros at the end
  while (zeroCount--) {
    result.push(0)
  }

  return result;
};
