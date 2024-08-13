### Explanation:

-   **Sorting** the `candidates` array ensures that duplicates are adjacent, making it easier to skip them during the backtracking process.
-   The **backtrack function** starts at a given index (`start`) and tries to build combinations that sum up to the target.
-   By **skipping duplicates** (`if (i > start && candidates[i] === candidates[i - 1])`), we ensure that we don't include the same combination more than once.
-   The **base cases** manage when to add a valid combination to the result (`target === 0`) or when to stop early if the sum exceeds the target.

This approach efficiently finds all unique combinations that sum to the target.
