/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  for (let num of nums) {
    if (num < k) {
      return -1;
    }
  }

  const greaterThanK = new Set();
  for (let num of nums) {
    if (num > k) {
      greaterThanK.add(num);
    }
  }

  return greaterThanK.size;
};
