/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let n = nums.length;
  if (n < 3) return 0;

  let maxSoFar = new Array(n).fill(0);
  let maxAfter = new Array(n).fill(0);

  // Compute maxSoFar (largest nums[i] before j)
  maxSoFar[0] = nums[0];
  for (let i = 1; i < n; i++) {
    maxSoFar[i] = Math.max(maxSoFar[i - 1], nums[i]);
  }

  // Compute maxAfter (largest nums[k] after j)
  maxAfter[n - 1] = nums[n - 1];
  for (let k = n - 2; k >= 0; k--) {
    maxAfter[k] = Math.max(maxAfter[k + 1], nums[k]);
  }

  let maxVal = 0;

  // Iterate through j (middle element)
  for (let j = 1; j < n - 1; j++) {
    let leftMax = maxSoFar[j - 1]; // Max before j
    let rightMax = maxAfter[j + 1]; // Max after j

    let value = (leftMax - nums[j]) * rightMax;
    maxVal = Math.max(maxVal, value);
  }

  return maxVal;
};
