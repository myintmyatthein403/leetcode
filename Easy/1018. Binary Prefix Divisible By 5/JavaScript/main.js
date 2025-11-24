/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
  const result = [];
  let prefix = 0;

  for (let i = 0; i < nums.length; i++) {
    prefix = (prefix * 2 + nums[i]) % 5;
    result.push(prefix === 0);
  }

  return result;
};
