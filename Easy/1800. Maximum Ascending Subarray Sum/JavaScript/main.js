/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  if (nums.length == 0) return 0
  if (nums.length == 1) return nums[0]
  let result = 0;
  let total = nums[0]
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      total += nums[i]
    } else {
      if (total > result) {
        result = total
      }
      total = nums[i]

    }
    if (total > result) {
      result = total
    }
  }
  return result
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])) // 65
console.log(maxAscendingSum([10, 20, 30, 40, 50])) // 150
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])) // 33
console.log(maxAscendingSum([100, 10, 1])) // 100
