### Approach:

1.  **Two Pointers**:
    -   Use one pointer (`i`) to traverse the array.
    -   Use another pointer (`k`) to keep track of the position where the next element that is not equal to `val` should be placed.
2.  **Traversal**:
    -   As you traverse the array with pointer `i`, whenever you find an element that is not equal to `val`, place it at the position indicated by pointer `k`.
    -   Increment `k` only when a non-`val` element is found and moved.
3.  **Return Value**:
    -   The value of `k` at the end of the traversal represents the number of elements in the array that are not equal to `val`.
