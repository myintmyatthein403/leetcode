/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastWord = s.trim().split(' ')[s.trim().split(' ').length - 1];
  return lastWord.length;
};
