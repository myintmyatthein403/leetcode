### Explanation:

-   **Binary Search**: The algorithm uses binary search to locate the target or the position where it should be inserted.
-   **Initial Variables**:
    -   `left`: Starting index of the array.
    -   `right`: Ending index of the array.
-   **Loop**: The loop continues until `left` is greater than `right`.
    -   **Middle Calculation**: The middle index `mid` is calculated.
    -   **Check Conditions**:
        -   If `nums[mid] === target`, return `mid` because the target is found.
        -   If `nums[mid] < target`, search in the right half (`left = mid + 1`).
        -   If `nums[mid] > target`, search in the left half (`right = mid - 1`).
-   **Insertion Index**: If the loop ends without finding the target, the `left` pointer will be at the position where the target should be inserted

### Example Walkthroughs:

1.  **Example 1**:
    
    -   `nums = [1, 3, 5, 6]`, `target = 5`
    -   `left = 0`, `right = 3`
    -   `mid = Math.floor((0 + 3) / 2) = 1` (nums[1] = 3)
        -   3 < 5, move `left` to `mid + 1 = 2`.
    -   `mid = Math.floor((2 + 3) / 2) = 2` (nums[2] = 5)
        -   5 == 5, target found at index 2.
    -   **Output**: 2
2.  **Example 2**:
    
    -   `nums = [1, 3, 5, 6]`, `target = 2`
    -   `left = 0`, `right = 3`
    -   `mid = Math.floor((0 + 3) / 2) = 1` (nums[1] = 3)
        -   3 > 2, move `right` to `mid - 1 = 0`.
    -   `mid = Math.floor((0 + 0) / 2) = 0` (nums[0] = 1)
        -   1 < 2, move `left` to `mid + 1 = 1`.
    -   `left` now equals `right + 1`, meaning the loop exits, and `left` is the insertion point.
    -   **Output**: 1
3.  **Example 3**:
    
    -   `nums = [1, 3, 5, 6]`, `target = 7`
    -   `left = 0`, `right = 3`
    -   `mid = Math.floor((0 + 3) / 2) = 1` (nums[1] = 3)
        -   3 < 7, move `left` to `mid + 1 = 2`.
    -   `mid = Math.floor((2 + 3) / 2) = 2` (nums[2] = 5)
        -   5 < 7, move `left` to `mid + 1 = 3`.
    -   `mid = Math.floor((3 + 3) / 2) = 3` (nums[3] = 6)
        -   6 < 7, move `left` to `mid + 1 = 4`.
    -   `left` is now beyond `right`, so the loop exits, and `left` is the insertion point.
    -   **Output**: 4

### Summary

The binary search algorithm provides a quick and effective way to find the target index or the correct insertion position within a sorted array. By systematically narrowing down the search space, the algorithm achieves a logarithmic time complexity, making it ideal for large datasets.
