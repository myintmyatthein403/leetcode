/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let n = nums.length;
  if (n < 3) return 0; // Not enough elements for a triplet

  // Step 1: Precompute max_left[j]
  let max_left = new Array(n).fill(0);
  let maxSoFar = nums[0];
  for (let j = 1; j < n; j++) {
    max_left[j] = maxSoFar;
    maxSoFar = Math.max(maxSoFar, nums[j]);
  }

  // Step 2: Find the max triplet value
  let maxTripletValue = 0;
  let max_right = nums[n - 1];

  for (let j = n - 2; j > 0; j--) {
    max_right = Math.max(max_right, nums[j + 1]);
    let tripletValue = (max_left[j] - nums[j]) * max_right;
    maxTripletValue = Math.max(maxTripletValue, tripletValue);
  }

  return maxTripletValue;
};
