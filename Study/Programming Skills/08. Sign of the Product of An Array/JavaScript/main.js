/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  if (nums.includes(0)) return 0
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    result *= nums[i]
  }
  if (result < 0) {
    return -1
  } else {
    return 1
  }
};

// Test case
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])) // 1
console.log(arraySign([1, 5, 0, 2, -3])) // 0
