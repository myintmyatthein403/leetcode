Here is the step-by-step approach with explanations:

1. **Identify the Problem**: Determine if the given array was originally sorted in non-decreasing order and then rotated some number of positions.
   - **Why**: This is the core problem statement that needs to be addressed.

2. **Understand Rotation**: Recognize that rotating an array means shifting its elements to the right or left, wrapping around the end to the beginning.
   - **Why**: Understanding the concept of rotation is crucial to solving the problem correctly.

3. **Check for Sorted Array**: Verify if the array is sorted in non-decreasing order without any rotation.
   - **Why**: If the array is already sorted, it meets the criteria without any rotation.

4. **Find Rotation Point**: Identify the point in the array where the order breaks, indicating the start of the rotation.
   - **Why**: The rotation point is where the array transitions from the end of the original sorted array to the beginning.

5. **Split and Compare**: Split the array at the rotation point and check if both parts are sorted individually.
   - **Why**: Both parts should be sorted if the array was originally sorted and then rotated.

6. **Reconstruct and Validate**: Reconstruct the array by rotating the split parts back to their original positions and check if the resulting array is sorted.
   - **Why**: This step ensures that the array can be transformed back into a sorted array, confirming it was originally sorted and rotated.

7. **Handle Edge Cases**: Consider edge cases such as arrays with all identical elements, arrays with a single element, and arrays that are already sorted without rotation.
   - **Why**: Handling edge cases ensures the solution is robust and works for all possible inputs.

8. **Return Result**: Based on the checks, return `true` if the array was originally sorted and rotated, otherwise return `false`.
   - **Why**: This provides the final answer to the problem based on the analysis performed in the previous steps.
