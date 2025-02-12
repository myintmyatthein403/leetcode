/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  // Helper function to calculate the sum of digits
  function digitSum(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  // Group numbers by their digit sums
  const groups = {};
  for (const num of nums) {
    const sum = digitSum(num);
    if (!groups[sum]) {
      groups[sum] = [];
    }
    groups[sum].push(num);
  }

  // Find the maximum sum of pairs with equal digit sums
  let maxSum = -1;
  for (const key in groups) {
    const group = groups[key];
    if (group.length > 1) {
      group.sort((a, b) => b - a); // Sort in descending order
      maxSum = Math.max(maxSum, group[0] + group[1]);
    }
  }

  return maxSum;
};
