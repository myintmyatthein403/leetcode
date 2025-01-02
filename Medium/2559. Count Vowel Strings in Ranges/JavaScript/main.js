/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  try {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    // Helper function to check if a word starts and ends with a vowel
    const isVowelString = (word) => {
      return vowels.has(word[0]) && vowels.has(word[word.length - 1]);
    };

    // Precompute the number of valid words up to each index
    const prefix = new Array(words.length + 1).fill(0);
    for (let i = 0; i < words.length; i++) {
      prefix[i + 1] = prefix[i] + (isVowelString(words[i]) ? 1 : 0);
    }

    // Answer each query using the precomputed prefix array
    const result = [];
    for (const [left, right] of queries) {
      result.push(prefix[right + 1] - prefix[left]);
    }

    return result;
  } catch (error) {
    console.error(error);
  }
};


// Test Case
console.log(vowelStrings(["a", "b", "c", "d", "e"], [[0, 4], [1, 3], [2, 2]])); // [1, 0, 0]
console.log(vowelStrings(["a", "e", "i", "o", "u"], [[0, 4], [1, 3], [2, 2]])); // [1, 1, 1]
