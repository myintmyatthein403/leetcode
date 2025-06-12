/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  const n = nums.length;
  let res = Math.abs(nums[0] - nums[n - 1]);
  for (let i = 0; i < n - 1; i++) {
    res = Math.max(res, Math.abs(nums[i] - nums[i + 1]));
  }
  return res;
};

console.log(maxAdjacentDistance([1, 2, 3, 4]))
