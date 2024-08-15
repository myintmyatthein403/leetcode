### Explanation:

-   **Loop Through the Array**: The loop starts from the last digit and moves leftward (`i--`). If the digit is less than `9`, it is incremented and the function returns the updated array.
-   **Handle the Carry**: If the digit is `9`, it becomes `0`, and the loop continues to handle the carry.
-   **Edge Case Handling**: After the loop, if all digits were `9`, you prepend `1` to the array using `unshift`.

### Complexity:

-   **Time Complexity**: `O(n)`, where `n` is the number of digits. In the worst case, we may need to process each digit.
-   **Space Complexity**: `O(1)` for in-place updates (ignoring the output array space).

This approach effectively handles all edge cases, including the scenario where all digits are `9`.

### Example Walkthrough:

-   **Example 1**:
    
    -   Input: `[1, 2, 3]`
    -   Start from the last digit: `3` becomes `4`
    -   Output: `[1, 2, 4]`
-   **Example 2**:
    
    -   Input: `[4, 3, 2, 1]`
    -   Start from the last digit: `1` becomes `2`
    -   Output: `[4, 3, 2, 2]`
-   **Example 3**:
    
    -   Input: `[9]`
    -   Start from the last digit: `9` becomes `0`, carry the `1` to the left.
    -   Since there are no more digits, prepend `1` to the array.
    -   Output: `[1, 0]`
