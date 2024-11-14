/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let avg = 0;
  let prev = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      prev += nums[i];
      avg = prev;
    } else {
      prev = prev + nums[i] - nums[i - k];
      avg = Math.max(avg, prev);
    }
  }
  return parseFloat(avg / k, 5);
};


// For Example
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Output 12.75
console.log(findMaxAverage([5], 1)); // Output 5
