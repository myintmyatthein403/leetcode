/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let count = 0;

  for (let i = 0; i <= nums.length - 3; i++) {
    const first = nums[i];
    const middle = nums[i + 1];
    const third = nums[i + 2];

    if (middle % 2 === 0 && first + third === middle / 2) {
      count++;
    }
  }

  return count;
};
