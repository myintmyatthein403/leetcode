/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  try {
    return (s + s).slice(1, -1).includes(s);
  } catch (error) {
    console.log('error :>> ', error);
  }
};

// Test Cases
console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('aba') === false);
console.log(repeatedSubstringPattern('abcabcabcabc') === true);
