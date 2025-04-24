/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const totalDistinct = new Set(nums).size;
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const seen = new Set();
    for (let j = i; j < n; j++) {
      seen.add(nums[j]);
      if (seen.size === totalDistinct) {
        count++;
      }
    }
  }

  return count;
};
