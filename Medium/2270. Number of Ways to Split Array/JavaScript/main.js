/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  const n = nums.length;
  let totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  let result = 0;

  for (let i = 0; i < n - 1; i++) {
    leftSum += nums[i];
    let rightSum = totalSum - leftSum;
    if (leftSum >= rightSum) {
      result++;
    }
  }

  return result;
};

// Example usage:
const nums = [10, 4, -8, 7];
console.log(waysToSplitArray(nums));
