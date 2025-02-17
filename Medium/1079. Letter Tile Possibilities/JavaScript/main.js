/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  if (tiles.length === 0) return 0
  if (tiles.length === 1) return 1

  let freq = new Map();

  // count the frequency of each letter in tiles
  for (let char of tiles) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // helper function to perform backtracking
  const backtrack = () => {
    let count = 0;

    for (let [char, countLeft] of freq) {
      if (countLeft > 0) {
        // Choose the character
        freq.set(char, countLeft - 1)

        // Count this sequence and recurse
        count += 1 + backtrack();

        // Backtrack(restore the count)
        freq.set(char, countLeft);
      }
    }

    return count
  }

  return backtrack();
};
