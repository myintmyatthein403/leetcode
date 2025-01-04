/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  try {
    let count = 0;
    for (let i = 0; i < 26; i++) {
      const first = s.indexOf(String.fromCharCode(97 + i)); // 97 is the ASCII value of 'a'
      console.log('first', first);
      const last = s.lastIndexOf(String.fromCharCode(97 + i)); // 97 is the ASCII value of 'a'
      console.log('last', last);
      if (first !== last) {
        const set = new Set(); // to store the unique characters between the first and last occurrence of the current character
        for (let j = first + 1; j < last; j++) {
          set.add(s[j]); // add the character to the set
        }
        console.log('set', set);
        count += set.size; // add the size of the set to the count
      }
    }
    return count
  } catch (error) {
    console.error(error);
  }
};

// Test Cases
console.log(countPalindromicSubsequence('aabca')); // 3
console.log(countPalindromicSubsequence('adc')); // 0
console.log(countPalindromicSubsequence('bbcbaba')); // 4
