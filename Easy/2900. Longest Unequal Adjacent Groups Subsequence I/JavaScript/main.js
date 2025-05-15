/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  const result = [];
  let lastGroup = -1; // initialize with a value that is not 0 or 1

  for (let i = 0; i < words.length; i++) {
    if (result.length === 0 || groups[i] !== lastGroup) {
      result.push(words[i]);
      lastGroup = groups[i];
    }
  }

  return result;
};

