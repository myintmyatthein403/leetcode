/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let xor1 = 0;
  let xor2 = 0;

  // XOR all elements in nums1
  for (let num of nums1) {
    xor1 ^= num;
  }

  // XOR all elements in nums2
  for (let num of nums2) {
    xor2 ^= num;
  }

  let result = 0;

  // If the length of nums1 is odd, XOR all elements of nums2 with the result
  if (nums1.length % 2 !== 0) {
    result ^= xor2;
  }

  // If the length of nums2 is odd, XOR all elements of nums1 with the result
  if (nums2.length % 2 !== 0) {
    result ^= xor1;
  }

  return result;
};
