/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let lastIndex = {};  // Step 1: Store last occurrence of each character

  // Store last position of each character
  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  let result = [];
  let start = 0, end = 0;

  // Step 2: Find partitions
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndex[s[i]]);  // Update end to farthest last occurrence

    if (i === end) {  // If current index reaches `end`, partition ends
      result.push(end - start + 1);  // Store partition size
      start = i + 1;  // Move start to next partition
    }
  }

  return result;
};

// Example Usage:
console.log(partitionLabels("ababcbacadefegdehijhklij")); // Output: [9, 7, 8]
console.log(partitionLabels("eccbbbbdec")); // Output: [10]
