To solve the problem of finding the punishment number of an integer `n`, follow these steps:

1. **Understand the Definition**: The punishment number of `n` is the sum of the squares of all integers `i` (where `1 <= i <= n`) that satisfy a specific condition. The condition is that the decimal representation of `i * i` can be partitioned into contiguous substrings such that the sum of these substrings equals `i`.

2. **Iterate Through the Range**: Loop through each integer `i` from 1 to `n`.

3. **Calculate the Square**: For each integer `i`, calculate `i * i`.

4. **Partition the Square**: Check if the decimal representation of `i * i` can be partitioned into contiguous substrings whose integer values sum up to `i`.

5. **Sum the Squares**: If the condition is satisfied for a particular `i`, add `i * i` to a running total.

6. **Return the Result**: After iterating through all integers from 1 to `n`, the running total will be the punishment number of `n`.

### Explanation with Examples:

- For `n = 10`:
  - Check each integer from 1 to 10.
  - For `i = 1`, `1 * 1 = 1`, which can be partitioned as [1] (sum = 1).
  - For `i = 9`, `9 * 9 = 81`, which can be partitioned as [8, 1] (sum = 9).
  - For `i = 10`, `10 * 10 = 100`, which can be partitioned as [10, 0] (sum = 10).
  - Sum the squares: `1 + 81 + 100 = 182`.

- For `n = 37`:
  - Check each integer from 1 to 37.
  - For `i = 1`, `1 * 1 = 1`, which can be partitioned as [1] (sum = 1).
  - For `i = 9`, `9 * 9 = 81`, which can be partitioned as [8, 1] (sum = 9).
  - For `i = 10`, `10 * 10 = 100`, which can be partitioned as [10, 0] (sum = 10).
  - For `i = 36`, `36 * 36 = 1296`, which can be partitioned as [1, 29, 6] (sum = 36).
  - Sum the squares: `1 + 81 + 100 + 1296 = 1478`.

By following this approach, you can determine the punishment number for any positive integer `n`.

For other squares, the approach remains the same. You need to check if the decimal representation of the square can be partitioned into contiguous substrings that sum up to the original number. Here are a few more examples to illustrate:

- For `i = 2`, `2 * 2 = 4`. The number 4 cannot be partitioned into substrings that sum to 2, so it does not contribute to the punishment number.
- For `i = 3`, `3 * 3 = 9`. The number 9 cannot be partitioned into substrings that sum to 3, so it does not contribute to the punishment number.
- For `i = 4`, `4 * 4 = 16`. The number 16 cannot be partitioned into substrings that sum to 4, so it does not contribute to the punishment number.
- For `i = 5`, `5 * 5 = 25`. The number 25 cannot be partitioned into substrings that sum to 5, so it does not contribute to the punishment number.
- For `i = 6`, `6 * 6 = 36`. The number 36 cannot be partitioned into substrings that sum to 6, so it does not contribute to the punishment number.
- For `i = 7`, `7 * 7 = 49`. The number 49 cannot be partitioned into substrings that sum to 7, so it does not contribute to the punishment number.
- For `i = 8`, `8 * 8 = 64`. The number 64 cannot be partitioned into substrings that sum to 8, so it does not contribute to the punishment number.

In summary, for each integer `i` from 1 to `n`, you need to check if the square of `i` can be partitioned into contiguous substrings that sum to `i`. Only those integers that satisfy this condition will contribute to the punishment number.

