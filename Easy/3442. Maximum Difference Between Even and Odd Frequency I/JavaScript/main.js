/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  // Step 1: Count frequencies of each character
  const freq = new Map();
  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // Step 2: Separate into odd and even frequencies
  const oddFrequencies = [];
  const evenFrequencies = [];

  for (const count of freq.values()) {
    if (count % 2 === 0) {
      evenFrequencies.push(count)
    } else {
      oddFrequencies.push(count)
    }
  }

  // Step 3: Find max odd and min even frequency
  const maxOdd = Math.max(...oddFrequencies);
  const minEven = Math.min(...evenFrequencies);

  // Step 4: Return the difference
  return maxOdd - minEven;
};

console.log(maxDifference("aaaaabbc"))
