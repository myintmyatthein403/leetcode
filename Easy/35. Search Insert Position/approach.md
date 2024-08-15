### Approach

To solve the problem efficiently with an `O(log n)` runtime complexity, we can use the **binary search** algorithm. Binary search is particularly well-suited for this task because the array is already sorted, which allows us to repeatedly divide the search space in half until we find the target or determine where it should be inserted.

#### Steps:

1.  **Initialization**:
    
    -   Define two pointers: `left` starting at the beginning of the array (`0`) and `right` at the end of the array (`nums.length - 1`).
2.  **Binary Search**:
    
    -   Calculate the middle index (`mid`) of the current search space using the formula: `mid = Math.floor((left + right) / 2)`.
    -   **Compare** the middle element (`nums[mid]`) with the target value:
        -   If `nums[mid]` equals the target, the search is complete, and you return `mid`.
        -   If `nums[mid]` is less than the target, the target must be in the right half of the array, so move the `left` pointer to `mid + 1`.
        -   If `nums[mid]` is greater than the target, the target must be in the left half of the array, so move the `right` pointer to `mid - 1`.
    -   Repeat this process until `left` exceeds `right`.
3.  **Insertion Point**:
    
    -   If the target is not found after the loop, the `left` pointer will indicate the position where the target should be inserted to maintain the array's sorted order. Return `left`.

#### Why Binary Search?

-   **Efficiency**: Binary search reduces the problem size by half with each step, leading to a logarithmic runtime complexity (`O(log n)`), which is much faster than a linear search (`O(n)`), especially for large arrays.
-   **Sorted Array**: The prerequisite of a sorted array makes binary search possible. The property of sorted order ensures that once the middle element is compared with the target, we can confidently eliminate half of the array from further consideration.
