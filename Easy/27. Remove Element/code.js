/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //Pointer for the position of the next non-val element  
  let k = 0;

  // Traverse through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to val
    if (nums[i] !== val) {
      // Place the element of the position k
      nums[k] = nums[i]
      // Increment k
      k++
    }
  }
  return k
};

// Example Usage:
let nums = [3, 2, 2, 3];
let val = 3;
let k = removeElement(nums, val);
console.log(k); // Output: 2
console.log(nums.slice(0, k)); // Output: [2, 2]

