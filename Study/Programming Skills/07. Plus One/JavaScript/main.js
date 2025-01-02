/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  try {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] = digits[i] + carry;
      if (digits[i] > 9) {
        digits[i] = 0;
        carry = 1;
      } else {
        carry = 0;
      }
    }
    if (carry === 1) {
      digits.unshift(1);
    }
    return digits;
  } catch (error) {
    console.error(error);
  }
};
