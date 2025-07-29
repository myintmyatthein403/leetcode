/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function (nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // For each of the 32 bits, store the last index where the bit was set
  const lastSeen = new Array(32).fill(-1);

  // Traverse from right to left
  for (let i = n - 1; i >= 0; i--) {
    // Update last seen position for each bit set in nums[i]
    for (let b = 0; b < 32; b++) {
      if ((nums[i] & (1 << b)) !== 0) {
        lastSeen[b] = i;
      }
    }

    // The furthest index we need to go to collect all necessary bits
    let maxIdx = i;
    for (let b = 0; b < 32; b++) {
      if (lastSeen[b] !== -1) {
        maxIdx = Math.max(maxIdx, lastSeen[b]);
      }
    }

    answer[i] = maxIdx - i + 1;
  }

  return answer;
};
