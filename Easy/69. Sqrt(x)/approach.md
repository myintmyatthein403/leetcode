### Approach

To find the square root of a non-negative integer `x` rounded down to the nearest integer without using any built-in exponent functions, we can use a **binary search** approach. The idea is to search for the square root by narrowing down the possible values through halving the search space.

### Explanation

1.  **Initial Setup**:
    
    -   If `x` is 0 or 1, the square root is simply `x`. We return `x` immediately.
    -   For larger values of `x`, we use binary search between `1` and `x`.
2.  **Binary Search**:
    
    -   Initialize two pointers: `left` at `1` and `right` at `x`.
    -   Compute the middle value `mid` between `left` and `right`.
    -   Check if `mid * mid` is equal to `x`:
        -   If true, `mid` is the exact square root, so return `mid`.
    -   If `mid * mid` is less than `x`, move the `left` pointer to `mid + 1`.
    -   If `mid * mid` is greater than `x`, move the `right` pointer to `mid - 1`.
    -   The loop continues until `left` exceeds `right`.
3.  **Return the Result**:
    
    -   When the loop ends, `right` will be the largest integer whose square is less than or equal to `x`. Thus, `right` is the answer.
