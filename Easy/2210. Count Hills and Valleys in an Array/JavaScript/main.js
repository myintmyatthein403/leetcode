/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  // Step 1: Remove consecutive duplicates
  const filtered = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      filtered.push(nums[i]);
    }
  }

  // Step 2: Iterate through filtered array and count hills and valleys
  let count = 0;
  for (let i = 1; i < filtered.length - 1; i++) {
    if (
      (filtered[i] > filtered[i - 1] && filtered[i] > filtered[i + 1]) ||
      (filtered[i] < filtered[i - 1] && filtered[i] < filtered[i + 1])
    ) {
      count++;
    }
  }

  return count;
};
