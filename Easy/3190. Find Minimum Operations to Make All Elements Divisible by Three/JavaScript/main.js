/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  return nums.filter(n => n % 3 != 0).length
};
