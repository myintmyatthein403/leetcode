/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  if (word.length < 3) return false;

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let hasVowel = false;
  let hasConsonant = false;

  for (let char of word) {
    if (!/[a-zA-Z0-9]/.test(char)) {
      return false; // contains invalid character
    }

    if (/[a-zA-Z]/.test(char)) {
      let lowerChar = char.toLowerCase();
      if (vowels.has(lowerChar)) {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    }
  }

  return hasVowel && hasConsonant;
};
