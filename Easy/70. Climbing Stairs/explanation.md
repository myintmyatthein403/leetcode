### Explanation:

1.  **Base Cases**:
    
    -   If `n = 1`, there's only one way to reach the top (1 step).
    -   If `n = 2`, there are two ways to reach the top (1+1 steps or 2 steps).
2.  **Dynamic Programming Approach**:
    
    -   Start with the first two base cases: `first` is 1, `second` is 2.
    -   For each step from 3 to `n`, calculate the number of ways to reach that step as the sum of the ways to reach the two previous steps (`third = first + second`).
    -   Update the values of `first` and `second` as you move up the staircase.
3.  **Final Output**:
    
    -   Once the loop ends, `second` will contain the number of ways to reach the top for `n` steps.

This approach has a time complexity of O(n) and a space complexity of O(1), making it efficient for large values of `n`.
