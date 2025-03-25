/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  const _checkCuts = (rectangles, dim) => {
    let gapCount = 0;

    // Sort rectangles by their starting coordinate in the given dimension
    rectangles.sort((a, b) => a[dim] - b[dim]);

    // Track the furthest ending coordinate seen so far
    let furthestEnd = rectangles[0][dim + 2];

    for (let i = 1; i < rectangles.length; i++) {
      const rect = rectangles[i];

      // If current rectangle starts after the furthest end we've seen,
      // we found a gap where a cut can be made
      if (furthestEnd <= rect[dim]) {
        gapCount++;
      }

      // Update the furthest ending coordinate
      furthestEnd = Math.max(furthestEnd, rect[dim + 2]);
    }

    // We need at least 2 gaps to create 3 sections
    return gapCount >= 2;
  };

  // Try both horizontal and vertical cuts
  return _checkCuts(rectangles.slice(), 0) || _checkCuts(rectangles.slice(), 1);
};
