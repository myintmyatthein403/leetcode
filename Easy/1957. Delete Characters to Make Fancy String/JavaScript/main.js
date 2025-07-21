/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    // Check if the last two characters in result are the same as current character
    let len = result.length;
    if (len >= 2 && result[len - 1] === s[i] && result[len - 2] === s[i]) {
      continue; // Skip current character to avoid 3 consecutive same letters
    }
    result.push(s[i]);
  }

  return result.join('');
};
