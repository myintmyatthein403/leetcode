/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter_Correct = function(bits) {
  let i = 0;
  // Loop until we reach the character that contains the last bit, or beyond
  while (i < bits.length - 1) {
    if (bits[i] === 1) {
      // It's a two-bit character (10 or 11)
      i += 2;
    } else {
      // It's a one-bit character (0)
      i += 1;
    }
  }

  // After the loop, the sequence ends with a character that contains the last bit.
  // If i == bits.length - 1, it means the last character was a one-bit character '0'
  // and 'i' advanced by exactly 1 to land on the last bit.
  // If i == bits.length, it means the last character was a two-bit character,
  // and 'i' advanced by 2, skipping the last bit.
  return i === bits.length - 1;
};
