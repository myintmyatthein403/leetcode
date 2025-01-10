1. **Initialize Result and Frequency Arrays**:
   - `res` is initialized as an empty array to store the resulting words.
   - `b` is initialized as an array of 26 zeros to store the maximum frequency of each character required by `words2`.

2. **Calculate Maximum Character Frequencies for `words2`**:
   - Iterate over each word in `words2`.
   - For each word, create an array `a` of 26 zeros to count the frequency of each character in the word.
   - Update the frequency array `b` to store the maximum frequency of each character encountered in any word of `words2`.

3. **Check Each Word in `words1` Against the Frequency Array `b`**:
   - Iterate over each word in `words1`.
   - For each word, create an array `a` of 26 zeros to count the frequency of each character in the word.
   - Compare the frequency array `a` with the maximum frequency array `b`.
   - If the word in `words1` contains at least as many of each character as required by `b`, add it to the result array `res`.

4. **Return the Result**:
   - Return the array `res` containing all words from `words1` that are supersets of the words in `words2`.

This approach ensures that each word in `words1` is checked to see if it contains all the characters required by the words in `words2`, with the necessary frequencies.
