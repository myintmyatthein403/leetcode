/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // Negative numbers cannot be palindromes (due to the negative sign)
  // Numbers ending in 0 (except 0 itself) cannot be palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  let reversed = 0;
  let original = x;

  // Reverse the integer
  while (x > 0) {
    let digit = x % 10 // Get the last digit
    reversed = reversed * 10 + digit // Append it to the reversed number.
    x = Math.floor(x / 10); // Remove the last digit from x
  }

  // Check if the original number and the reversed number are the same.
  return original == reversed

};

// test case : 01
console.log(isPalindrome(121))

// test case : 02
console.log(isPalindrome(-121))

// test case : 03
console.log(isPalindrome(10))
