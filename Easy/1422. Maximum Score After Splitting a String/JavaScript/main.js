/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  try {
    let max = 0;
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '1') {
        right++;
      }
    }
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === '0') {
        left++;
      } else {
        right--;
      }
      max = Math.max(max, left + right);
    }
    return max;
  } catch (error) {
    console.log('error :>> ', error);
  }
};

// Test Case
console.log(maxScore('011101') === 5);
console.log(maxScore('00111') === 5);
console.log(maxScore('1111') === 3);
