/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  const n = colors.length;
  let count = 0;
  let validCount = 0; // Track valid alternating pairs in the window

  // First, build the initial window
  for (let i = 0; i < k - 1; i++) {
    if (colors[i] !== colors[i + 1]) validCount++;
  }

  // Slide the window over the circular array
  for (let i = 0; i < n; i++) {
    // Check if current window is valid
    if (validCount === k - 1) count++;

    // Remove the effect of the outgoing element (leftmost)
    if (colors[i] !== colors[(i + 1) % n]) validCount--;

    // Add the effect of the incoming element (rightmost)
    if (colors[(i + k - 1) % n] !== colors[(i + k) % n]) validCount++;
  }

  return count;
};
