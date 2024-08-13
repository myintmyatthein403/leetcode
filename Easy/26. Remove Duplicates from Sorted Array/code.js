/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  // Initialize the array with the fast pointer
  let i = 0;

  // Traverse the array with the fast pointer
  for (let j = 1; j < nums.length; j++) {
    // If the current element is different from the element at the slow pointer
    if (nums[j] !== nums[i]) {
      // Move the slow pointer forward
      i++;
      // Update the element at the slow pointer with the current element
      nums[i] = nums[j]
    }
  }

  // return the length of the unique elements, which is i+1
  return i + 1
};

// Example
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k); // Output: 5
console.log(nums.slice(0, k)); // Output: [0, 1, 2, 3, 4]

