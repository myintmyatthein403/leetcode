/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  let result = original;
  while (nums.includes(original)) {
    result = result * 2;
  }
  return result;
}

var findFinalValue_BP = function(nums, original) {
  const numSet = new Set(nums);
  let result = original;

  while (numSet.has(result)) {
    result *= 2;
  }
  return result;
}

console.log(findFinalValue([5, 3, 6, 1, 12], 3))
console.log(findFinalValue([2, 7, 9], 4))
