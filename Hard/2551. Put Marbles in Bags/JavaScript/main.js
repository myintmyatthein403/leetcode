/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  if (k === 1) return 0; // No partitioning needed, max and min scores are equal

  let pairSums = [];

  // Compute pairwise sums
  for (let i = 0; i < weights.length - 1; i++) {
    pairSums.push(weights[i] + weights[i + 1]);
  }

  // Sort pairSums in ascending order
  pairSums.sort((a, b) => a - b);

  let minScore = 0, maxScore = 0;

  // Sum the smallest k-1 pairs for minScore
  for (let i = 0; i < k - 1; i++) {
    minScore += pairSums[i];
  }

  // Sum the largest k-1 pairs for maxScore
  for (let i = 0; i < k - 1; i++) {
    maxScore += pairSums[pairSums.length - 1 - i];
  }

  return maxScore - minScore;
};
