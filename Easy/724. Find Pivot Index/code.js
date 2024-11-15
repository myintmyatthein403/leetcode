/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

// For example
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex([1, 2, 3])); // Output: -1
console.log(pivotIndex([2, 1, -1])); // Output: 0
