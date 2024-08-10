### Explanation:

1.  **Negative Numbers**:
    
    -   A negative number like `-121` can never be a palindrome because the `-` sign will always be at the front when reading left to right but not when reading right to left.
2.  **Numbers Ending in Zero**:
    
    -   Any number that ends in `0` (except `0` itself) cannot be a palindrome because the reverse will start with `0`, which is not allowed for non-zero integers.
3.  **Reversing the Number**:
    
    -   To reverse the number, extract the last digit by using `x % 10`.
    -   Shift the reversed number to the left by multiplying it by `10`, then add the extracted digit.
    -   Remove the last digit from `x` by dividing it by `10` and taking the floor value.
    -   Continue this process until the entire number is reversed.
4.  **Comparison**:
    
    -   Finally, compare the reversed number with the original number. If they are the same, then `x` is a palindrome; otherwise, it's not.

### Example Walkthrough:

1.  **Example 1: `x = 121`**
    
    -   Reversed number becomes `121`, which matches the original.
    -   Output: `true`.
2.  **Example 2: `x = -121`**
    
    -   It starts as `-121`, which cannot be a palindrome due to the negative sign.
    -   Output: `false`.
3.  **Example 3: `x = 10`**
    
    -   Reversed number becomes `01`, which does not match the original.
    -   Output: `false`.

This approach efficiently determines if a number is a palindrome without converting the integer to a string, which saves memory and improves performance.
