### Approach

The goal is to merge two sorted arrays `nums1` and `nums2` into a single sorted array. The final merged array should be stored in `nums1`, and the merged elements should be in non-decreasing order.

Given that `nums1` has enough space to hold the elements of both arrays, the merging will be done in-place, starting from the end of `nums1` to avoid overwriting elements that haven't been processed yet.

### Steps

1.  **Initialize Pointers**:
    
    -   Use three pointers:
        -   `p1` to track the current element in `nums1` (starting from the end of the initial elements, i.e., `m-1`).
        -   `p2` to track the current element in `nums2` (starting from the end, i.e., `n-1`).
        -   `p` to place elements in their correct position in `nums1` (starting from the last index of `nums1`, i.e., `m + n - 1`).
2.  **Merge from the End**:
    
    -   Compare the elements at `p1` and `p2`.
    -   Place the larger element at the current position of `p`.
    -   Move the pointers `p` and the pointer corresponding to the larger element (`p1` or `p2`) backwards.
3.  **Handle Remaining Elements**:
    
    -   If `p2` still has elements left after the main loop, copy the remaining elements from `nums2` into `nums1`.
