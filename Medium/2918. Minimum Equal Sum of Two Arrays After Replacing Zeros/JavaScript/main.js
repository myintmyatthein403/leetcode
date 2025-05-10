/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
  // Step 1: Calculate current sum of non-zero elements and count of zeros for nums1
  let currentSum1 = 0;
  let zeroCount1 = 0;
  for (const num of nums1) {
    if (num === 0) {
      zeroCount1++;
    } else {
      currentSum1 += num;
    }
  }

  // Step 2: Calculate current sum of non-zero elements and count of zeros for nums2
  let currentSum2 = 0;
  let zeroCount2 = 0;
  for (const num of nums2) {
    if (num === 0) {
      zeroCount2++;
    } else {
      currentSum2 += num;
    }
  }

  // Step 3: Calculate the minimum possible sum for each array
  // This is done by replacing all zeros with 1s.
  const minSumPossible1 = currentSum1 + zeroCount1;
  const minSumPossible2 = currentSum2 + zeroCount2;

  // Step 4: Determine the minimum equal sum based on the calculated minimums and zero counts

  // Case A: If minSumPossible1 is greater than minSumPossible2
  // We need to potentially increase minSumPossible2 to match minSumPossible1.
  // This is only possible if nums2 has zeros (i.e., zeroCount2 > 0).
  // If nums2 has no zeros, its sum is fixed at minSumPossible2, and it's impossible to reach minSumPossible1.
  if (minSumPossible1 > minSumPossible2) {
    if (zeroCount2 === 0) {
      return -1; // Impossible to make sums equal
    } else {
      // nums2 has zeros, so we can increase its sum to match minSumPossible1.
      return minSumPossible1;
    }
  }
  // Case B: If minSumPossible2 is greater than minSumPossible1
  // We need to potentially increase minSumPossible1 to match minSumPossible2.
  // This is only possible if nums1 has zeros (i.e., zeroCount1 > 0).
  // If nums1 has no zeros, its sum is fixed at minSumPossible1, and it's impossible to reach minSumPossible2.
  else if (minSumPossible2 > minSumPossible1) {
    if (zeroCount1 === 0) {
      return -1; // Impossible to make sums equal
    } else {
      // nums1 has zeros, so we can increase its sum to match minSumPossible2.
      return minSumPossible2;
    }
  }
  // Case C: If minSumPossible1 is equal to minSumPossible2
  // The arrays can already achieve equal sums at their minimum possible values.
  else {
    return minSumPossible1; // Or minSumPossible2, since they are equal
  }
};
