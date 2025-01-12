/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  if (s.length % 2 !== 0) return false;
  balance = 0;
  const lockedSet = new Set(locked.split(''));
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || locked[i] === '0') {
      balance++;
    } else {
      balance--;
    }
    if (balance < 0) return false;
  }

  balance = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ')' || locked[i] === '0') {
      balance++;
    } else {
      balance--;
    }
    if (balance < 0) return false;
  }
  return true;
};
