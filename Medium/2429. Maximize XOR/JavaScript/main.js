/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  // Count the number of set bits in num2
  let setBitsNum2 = num2.toString(2).split('0').join('').length;

  // Initialize result to 0
  let result = 0;

  // Iterate through the bits of num1 from the most significant bit to the least significant bit
  for (let i = 31; i >= 0; i--) {
    if ((num1 & (1 << i)) !== 0) {
      if (setBitsNum2 > 0) {
        result |= (1 << i);
        setBitsNum2--;
      }
    }
  }

  // If there are still set bits needed, set the remaining bits in result
  for (let i = 0; i < 32 && setBitsNum2 > 0; i++) {
    if ((result & (1 << i)) === 0) {
      result |= (1 << i);
      setBitsNum2--;
    }
  }

  return result;
};
