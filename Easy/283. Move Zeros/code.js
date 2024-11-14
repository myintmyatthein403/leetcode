/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 1) return nums;
  let count = 0;
  let result = [];
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === 0) {
      count++;
    } else {
      result.push(nums[i]);
    }
    i++;
  }

  while (count > 0) {
    result.push(0);
    count--;
  }

  return result;
};

var moveZeroesGPT = function (nums) {

  let nonZeroIndex = 0; // Index to place the next non-zero element

  // Move all non-zero elements to the beginning of nums
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the rest of the array with zeros
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

// for example
console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1,3,12,0,0]
console.log(moveZeroes([0])); // Output: [0]

console.log(moveZeroesGPT([0, 1, 0, 3, 12])); // Output: [1,3,12,0,0]
console.log(moveZeroesGPT([0])); // Output: [0]
