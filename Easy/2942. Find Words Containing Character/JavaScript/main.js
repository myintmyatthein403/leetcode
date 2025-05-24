/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  return words
    .map((word, index) => word.includes(x) ? index : -1)
    .filter(index => index !== -1);
};

console.log(findWordsContaining(['leet', 'code'], 'e'));
