/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  // Convert number to string for easy manipulation
  let str = num.toString().split('');

  // Find the first '6' and change it to '9'
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '6') {
      str[i] = '9';
      break; // Only one change allowed
    }
  }

  // Convert back to number
  return parseInt(str.join(''));
};
