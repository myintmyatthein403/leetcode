/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !leftArr.includes(nums1[i])) {
      leftArr.push(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !rightArr.includes(nums2[i])) {
      rightArr.push(nums2[i]);
    }
  }

  return [leftArr, rightArr];
};

// For example
console.log(findDifference([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [[5], [8]]
console.log(findDifference([1, 2, 2, 1], [2, 2])); // Output: [[1], []]
