/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Start from the end of both arrays
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  // While there are elements in nums2 to be merge
  while (p2 >= 0) {
    // Compare elements from the end of nums1 and nums2
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      // Place the larger element at the end of nums1
      nums1[p] = nums1[p1];
      p1--; // Move p1 to the left
    } else {
      // Place nums2's element in nums1
      nums1[p] = nums2[p2];
      p2--; // Move p2 to the left
    }
    p--; // Move p to the left
  }
};


// Test Case 
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
