/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
  const MOD = 1e9 + 7;
  const count = new Array(26).fill(0);

  // Initialize the count array with the frequency of each character in s
  for (let char of s) {
    count[char.charCodeAt(0) - 97]++;
  }

  // Perform t transformations
  for (let step = 0; step < t; step++) {
    const newCount = new Array(26).fill(0);

    for (let i = 0; i < 25; i++) {
      // Characters 'a' to 'y' transform to the next character
      newCount[i + 1] = (newCount[i + 1] + count[i]) % MOD;
    }

    // Character 'z' transforms into 'a' and 'b'
    newCount[0] = (newCount[0] + count[25]) % MOD;
    newCount[1] = (newCount[1] + count[25]) % MOD;

    // Update count array for the next step
    for (let i = 0; i < 26; i++) {
      count[i] = newCount[i];
    }
  }

  // Sum all character counts to get the final string length
  let total = 0;
  for (let i = 0; i < 26; i++) {
    total = (total + count[i]) % MOD;
  }

  return total;
};
