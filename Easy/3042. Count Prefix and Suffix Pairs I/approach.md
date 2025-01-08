To solve the problem of counting prefix and suffix pairs in the given array of words, we can follow these steps:

1. **Define the `isPrefixAndSuffix` function**: This function will check if one string (`str1`) is both a prefix and a suffix of another string (`str2`).

2. **Iterate through all pairs of indices `(i, j)`**: We need to check all pairs where `i < j` to ensure we are not counting the same pair twice or comparing a word with itself.

3. **Count the valid pairs**: Use the `isPrefixAndSuffix` function to check each pair and count the number of valid pairs.

Here is the implementation of this approach:

```javascript
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  // Define the isPrefixAndSuffix function
  const isPrefixAndSuffix = (str1, str2) => {
    return str2.startsWith(str1) && str2.endsWith(str1);
  };

  // Initialize the count of valid pairs
  let count = 0;

  // Iterate through all pairs of indices (i, j) where i < j
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      // Check if words[i] is both a prefix and a suffix of words[j]
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++;
      }
    }
  }

  // Return the count of valid pairs
  return count;
};

// Example usage:
console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"])); // Output: 4
console.log(countPrefixSuffixPairs(["pa", "papa", "ma", "mama"])); // Output: 2
console.log(countPrefixSuffixPairs(["abab", "ab"])); // Output: 0
```

### Explanation:

1. **isPrefixAndSuffix Function**:
   - This function takes two strings, `str1` and `str2`.
   - It returns `true` if `str1` is both a prefix and a suffix of `str2` using the `startsWith` and `endsWith` methods.

2. **Counting Valid Pairs**:
   - We initialize a counter `count` to zero.
   - We use two nested loops to iterate through all pairs of indices `(i, j)` where `i < j`.
   - For each pair, we check if `words[i]` is both a prefix and a suffix of `words[j]` using the `isPrefixAndSuffix` function.
   - If the condition is true, we increment the counter.

3. **Return the Result**:
   - After iterating through all pairs, we return the count of valid pairs.

This approach ensures that we correctly count the number of valid prefix-suffix pairs in the given array of words.
