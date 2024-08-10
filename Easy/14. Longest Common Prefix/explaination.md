### Explanation:

1.  **Edge Cases**:
    
    -   If the input array is empty, there's no common prefix to find, so return an empty string immediately.
2.  **Initialize the Prefix**:
    
    -   Start by assuming the first string is the common prefix (`prefix = strs[0]`).
    -   This prefix will be compared with each subsequent string in the array.
3.  **Compare Strings**:
    
    -   For each string in the array (starting from the second one), check if the current prefix is a prefix of the string (`strs[i].indexOf(prefix) !== 0`).
    -   If it's not a prefix, shorten the prefix by one character from the end (`prefix = prefix.slice(0, prefix.length - 1)`).
    -   Continue this process until you find the common prefix or the prefix becomes empty.
4.  **Return the Result**:
    
    -   If the loop completes with a non-empty prefix, return it as the longest common prefix.
    -   If the prefix becomes empty during comparisons, return an empty string, indicating no common prefix exists.

### Example Walkthroughs:

1.  **Example 1: `strs = ["flower", "flow", "flight"]`**
    
    -   Start with `"flower"` as the prefix.
    -   Compare with `"flow"`, shorten to `"flow"`.
    -   Compare with `"flight"`, shorten to `"fl"`.
    -   Output: `"fl"`.
2.  **Example 2: `strs = ["dog", "racecar", "car"]`**
    
    -   Start with `"dog"` as the prefix.
    -   Compare with `"racecar"`, no common prefix, shorten to `""`.
    -   Output: `""` (no common prefix).

This approach ensures that you find the longest common prefix efficiently, with a worst-case time complexity of *O(S)*, where *S* is the sum of all characters in all strings.
