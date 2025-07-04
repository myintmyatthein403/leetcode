/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function (k, operations) {
  let n = operations.length;
  let lengths = new Array(n + 1);
  lengths[0] = 1n; // use BigInt for large sizes

  // Step 1: Precompute lengths
  for (let i = 0; i < n; i++) {
    lengths[i + 1] = lengths[i] * 2n;
  }

  let shift = 0;
  k = BigInt(k); // ensure k is BigInt

  // Step 2: Work backwards to trace origin of k-th character
  for (let i = n - 1; i >= 0; i--) {
    let half = lengths[i];
    if (k > half) {
      k = k - half;
      if (operations[i] === 1) {
        shift++; // shift applied in second half
      }
    } else {
      if (operations[i] === 1) {
        // still in first half but operation would have appended shifted part
        // no shift for this character
      }
      // else, just a copy, nothing changes
    }
  }

  // Step 3: Apply final shift to original character
  let charCode = 'a'.charCodeAt(0);
  let resultCharCode = (charCode - 97 + shift) % 26 + 97;
  return String.fromCharCode(resultCharCode);
};
