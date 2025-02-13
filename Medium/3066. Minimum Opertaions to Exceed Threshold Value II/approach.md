To solve the problem of finding the minimum number of operations needed so that all elements of the array are greater than or equal to `k`, we can follow this approach:

1. **Use a Min-Heap (Priority Queue):**
   - A min-heap allows us to efficiently extract the two smallest elements from the array. This is crucial because the operation requires the two smallest elements.

2. **Initialize the Min-Heap:**
   - Insert all elements of the array into the min-heap. This will allow us to always have access to the smallest elements in logarithmic time.

3. **Perform Operations:**
   - While the size of the heap is greater than 1 and the smallest element in the heap is less than `k`, perform the following steps:
     - Extract the two smallest elements, `x` and `y`, from the heap.
     - Compute the new element using the formula `min(x, y) * 2 + max(x, y)`.
     - Insert the new element back into the heap.
     - Increment the operation count.

4. **Check the Result:**
   - After the loop, check if the smallest element in the heap is greater than or equal to `k`.
   - If it is, return the operation count.
   - If not, return `-1` indicating that it is not possible to make all elements greater than or equal to `k`.

This approach ensures that we efficiently manage the array elements and perform the required operations in a way that minimizes the number of operations needed. The use of a min-heap is key to achieving this efficiency.
