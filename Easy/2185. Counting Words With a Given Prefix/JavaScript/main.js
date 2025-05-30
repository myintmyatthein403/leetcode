/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  if (pref === '' || words.length == 0) return 0;
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      count++;
    }
  }
  return count
};
