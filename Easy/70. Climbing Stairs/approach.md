The "Climbing Stairs" problem can be approached in several ways, including dynamic programming, recursion with memoization, or even directly using the Fibonacci sequence formula. Below is a breakdown of these approaches:

### 1. **Dynamic Programming (Bottom-Up Approach)**

This is the most efficient and commonly used approach for solving this problem.

**Concept:**

-   The idea is to build a solution for `n` steps by combining the solutions for the previous two steps.
-   If you are at step `i`, you can either come from step `i-1` (1 step) or from step `i-2` (2 steps). Therefore, the number of ways to reach step `i` is the sum of the number of ways to reach `i-1` and `i-2`.

**Steps:**

-   Start with the base cases:
    -   `ways(1) = 1` (1 way to reach the first step)
    -   `ways(2) = 2` (2 ways to reach the second step)
-   Use a loop to calculate the number of ways to reach each subsequent step up to `n`.

**Time Complexity:** O(n) **Space Complexity:** O(1)
