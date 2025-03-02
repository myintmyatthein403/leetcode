/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
// Hash Map
var mergeArrays = function (nums1, nums2) {
  const map = new Map();

  for (const [id, value] of nums1) {
    map.set(id, value);
  }

  for (const [id, value] of nums2) {
    map.set(id, (map.get(id) || 0) + value);
  }

  const result = [];

  for (const [id, value] of map) {
    result.push([id, value]);
  }

  return result.sort((a, b) => a[0] - b[0]);

};

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
// Two Pointers
var mergeArrays = function (nums1, nums2) {
  let i = 0, j = 0;
  let result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i][0] === nums2[j][0]) {
      // If IDs match, sum the values
      result.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      i++;
      j++;
    } else if (nums1[i][0] < nums2[j][0]) {
      // If nums1 ID is smaller, add it to the result
      result.push(nums1[i]);
      i++;
    } else {
      // If nums2 ID is smaller, add it to the result
      result.push(nums2[j]);
      j++;
    }
  }

  // Add remaining elements from nums1 (if any)
  while (i < nums1.length) {
    result.push(nums1[i]);
    i++;
  }

  // Add remaining elements from nums2 (if any)
  while (j < nums2.length) {
    result.push(nums2[j]);
    j++;
  }

  return result;
};

console.log(mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]))
