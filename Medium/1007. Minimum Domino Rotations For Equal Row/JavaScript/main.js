/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  const n = tops.length;

  // Helper to count rotations needed to make all values == target
  function check(target) {
    let rotateTop = 0;
    let rotateBottom = 0;

    for (let i = 0; i < n; i++) {
      // If the target doesn't appear in either top or bottom at index i, impossible
      if (tops[i] !== target && bottoms[i] !== target) {
        return Infinity;
      }
      // Count rotation needed for top row
      if (tops[i] !== target) rotateTop++;
      // Count rotation needed for bottom row
      if (bottoms[i] !== target) rotateBottom++;
    }

    return Math.min(rotateTop, rotateBottom);
  }

  const rotations = Math.min(check(tops[0]), check(bottoms[0]));
  return rotations === Infinity ? -1 : rotations;
};
