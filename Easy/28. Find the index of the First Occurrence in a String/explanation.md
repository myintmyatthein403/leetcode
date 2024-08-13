### Explanation:

-   **Example 1**:
    
    -   Input: `haystack = "sadbutsad"`, `needle = "sad"`
    -   The first occurrence of `"sad"` in `"sadbutsad"` is at index `0`, so the function returns `0`.
-   **Example 2**:
    
    -   Input: `haystack = "leetcode"`, `needle = "leeto"`
    -   `"leeto"` is not a substring of `"leetcode"`, so the function returns `-1`.

### Edge Cases:

-   If `needle` is an empty string, the function should return `0` according to the problem description.
-   If `needle` is longer than `haystack`, return `-1` as it's impossible for `needle` to be a substring of `haystack`.

### Time Complexity:

-   The time complexity of this solution is O(n * m), where `n` is the length of `haystack` and `m` is the length of `needle`. This is because in the worst case, we might compare every substring of length `m` in `haystack`.

### Space Complexity:

-   The space complexity is O(1) because we only use a constant amount of extra space.
