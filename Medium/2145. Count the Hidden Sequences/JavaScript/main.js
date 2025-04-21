/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
  let prefixSum = 0;
  let minOffset = 0;
  let maxOffset = 0;

  for (let diff of differences) {
    prefixSum += diff;
    minOffset = Math.min(minOffset, prefixSum);
    maxOffset = Math.max(maxOffset, prefixSum);
  }

  const start = lower - minOffset;
  const end = upper - maxOffset;

  return start > end ? 0 : end - start + 1;
};
