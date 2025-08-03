/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
  let n = fruits.length;
  let maxFruits = 0;
  let left = 0, total = 0;

  // Helper function to calculate minimum steps needed
  function minSteps(leftPos, rightPos) {
    if (rightPos <= startPos) return startPos - leftPos;
    if (leftPos >= startPos) return rightPos - startPos;
    return Math.min(
      2 * (startPos - leftPos) + (rightPos - startPos),
      2 * (rightPos - startPos) + (startPos - leftPos)
    );
  }

  for (let right = 0; right < n; ++right) {
    total += fruits[right][1];

    // Shrink window from the left until the distance constraint is satisfied
    while (left <= right && minSteps(fruits[left][0], fruits[right][0]) > k) {
      total -= fruits[left][1];
      left++;
    }

    maxFruits = Math.max(maxFruits, total);
  }

  return maxFruits;
};
