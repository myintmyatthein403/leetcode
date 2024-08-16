### Explanation

-   **Initial Case Handling**:
    
    -   Directly return `x` if it's `0` or `1` since their square roots are trivial.
-   **Binary Search Loop**:
    
    -   The loop runs until the `left` pointer exceeds the `right` pointer.
    -   The `mid` variable is calculated as the middle of the current search space.
    -   Depending on whether `mid * mid` is less than, equal to, or greater than `x`, adjust the search range accordingly:
        -   If `mid * mid` is less than `x`, the square root must be greater than `mid`, so move `left` up and update `result` to `mid`.
        -   If `mid * mid` is greater than `x`, the square root must be less than `mid`, so move `right` down.
-   **Final Return**:
    
    -   The loop exits when `left` surpasses `right`, at which point `result` holds the integer square root of `x`.

### Summary

This approach efficiently finds the square root by systematically narrowing down the possible values using binary search, ensuring a time complexity of *O(logx)*.
