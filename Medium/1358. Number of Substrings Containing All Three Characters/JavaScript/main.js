/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let count = { 'a': 0, 'b': 0, 'c': 0 }; // Frequency map
  let left = 0, result = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]]++; // Include current character in window

    // Check if all three characters are present in the window
    while (count['a'] > 0 && count['b'] > 0 && count['c'] > 0) {
      result += s.length - right; // Count valid substrings
      count[s[left]]--; // Shrink window from the left
      left++;
    }
  }

  return result;
};

