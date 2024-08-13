### Explanation:

-   **Example 1**:
    
    -   Input: `nums = [3,2,2,3]`, `val = 3`
    -   After the function is executed, the array will be `[2, 2, _, _]` with `k = 2`.
-   **Example 2**:
    
    -   Input: `nums = [0,1,2,2,3,0,4,2]`, `val = 2`
    -   After the function is executed, the array will be `[0, 1, 3, 0, 4, _, _, _]` with `k = 5`.

### Time Complexity:

-   The time complexity is O(n), where `n` is the number of elements in the array. This is because we traverse the array once.

### Space Complexity:

-   The space complexity is O(1) since the problem requires in-place modification and uses only a constant amount of extra space.
