/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid // Target found
    } else if (nums[mid] < target) {
      left = mid + 1 // Search in the right half
    } else {
      right = mid - 1 // Search in the left half
    }
  }

  // If target is not found, return the index where it would be inserted.
  return left
};


console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4

