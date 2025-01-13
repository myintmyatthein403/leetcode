/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  // Step 1: Initialize a frequency array of size 26
  let freq = new Array(26).fill(0);

  // Step 2: Iterate over the string and increment the frequency of each character
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  // Step 3: Traverse the frequency array
  let result = 0;
  for (let i = 0; i < 26; i++) {
    if (freq[i] % 2 === 1) {
      result += 1;
    } else if (freq[i] > 0) {
      result += 2;
    }
  }

  // Step 4: Return the final result
  return result;
};

// Test case
console.log(minimumLength('abaacbcbb')); // 5
console.log(minimumLength('aa')); // 2
