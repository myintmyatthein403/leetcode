/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const freq = new Map();
  let length = 0;
  let hasCenter = false;

  // Count the frequency of each word
  for (const word of words) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  for (const [word, count] of freq.entries()) {
    const reversed = word[1] + word[0];

    if (word[0] === word[1]) {
      // symmetric word like "gg", "cc"
      const pairs = Math.floor(count / 2);
      length += pairs * 4;
      if (count % 2 === 1) hasCenter = true;
    } else if (freq.has(reversed)) {
      const pairs = Math.min(count, freq.get(reversed));
      length += pairs * 4;
      // Set both to 0 to avoid reusing
      freq.set(word, 0);
      freq.set(reversed, 0);
    }
  }

  if (hasCenter) length += 2; // One symmetric word in the center

  return length;
};
