/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  // Step 1: Sort the array to enable greedy pairing
  nums.sort((a, b) => a - b);

  // Step 2: Helper function to check if we can form at least p pairs
  // with max difference <= maxDiff
  const canFormPairs = (maxDiff) => {
    let count = 0;
    let i = 0;
    while (i < nums.length - 1) {
      // If this pair satisfies the maxDiff condition
      if (nums[i + 1] - nums[i] <= maxDiff) {
        count++;
        i += 2; // skip both elements (disjoint pair)
      } else {
        i++; // try next element
      }
      if (count >= p) return true;
    }
    return count >= p;
  };

  // Step 3: Binary search on the answer
  let left = 0;
  let right = nums[nums.length - 1] - nums[0];

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canFormPairs(mid)) {
      right = mid; // try to minimize further
    } else {
      left = mid + 1; // increase allowed difference
    }
  }

  return left;
};
