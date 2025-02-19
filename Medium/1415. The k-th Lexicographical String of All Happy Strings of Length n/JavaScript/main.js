/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const chars = ['a', 'b', 'c'];
  let count = 0;
  let result = '';

  function backtrack(str) {
    if (str.length === n) {
      count++;
      if (count === k) {
        result = str;
      }
      return;
    }

    if (count > k) return;

    for (const char of chars) {
      if (str.length > 0 && char === str[str.length - 1]) {
        continue;
      }
      backtrack(str + char);
    }
  }

  backtrack('');

  return result;

};
