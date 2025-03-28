/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  let num_valid_substrings = 0;
  let start = 0;
  let end = 0;
  let vowel_count = {};  // Object to store counts of vowels
  let consonant_count = 0;  // Count of consonants
  let next_consonant = new Array(word.length).fill(0);  // Array for the next consonant index for all positions
  let next_consonant_index = word.length;

  // Fill the next consonant array
  for (let i = word.length - 1; i >= 0; i--) {
    next_consonant[i] = next_consonant_index;
    if (!isVowel(word[i])) {
      next_consonant_index = i;
    }
  }

  // Main logic to count valid substrings
  while (end < word.length) {
    let new_letter = word[end];
    if (isVowel(new_letter)) {
      vowel_count[new_letter] = (vowel_count[new_letter] || 0) + 1;
    } else {
      consonant_count += 1;
    }

    // Shrink the window if there are too many consonants
    while (consonant_count > k) {
      let start_letter = word[start];
      if (isVowel(start_letter)) {
        vowel_count[start_letter] -= 1;
        if (vowel_count[start_letter] === 0) {
          delete vowel_count[start_letter];
        }
      } else {
        consonant_count -= 1;
      }
      start += 1;
    }

    // If the window is valid, count the valid substrings
    while (start < word.length && Object.keys(vowel_count).length === 5 && consonant_count === k) {
      num_valid_substrings += next_consonant[end] - end;
      let start_letter = word[start];
      if (isVowel(start_letter)) {
        vowel_count[start_letter] -= 1;
        if (vowel_count[start_letter] === 0) {
          delete vowel_count[start_letter];
        }
      } else {
        consonant_count -= 1;
      }
      start += 1;
    }

    end += 1;
  }

  return num_valid_substrings;
};

/**
 * Helper function to check if a character is a vowel
 * @param {string} c
 * @return {boolean}
 */
function isVowel(c) {
  return c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
}

