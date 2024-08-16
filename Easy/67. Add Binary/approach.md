### Approach

To add two binary strings, you can follow these steps:

1.  **Initialize Variables**:
    
    -   `result`: An empty string to store the final binary sum.
    -   `carry`: A variable to store the carry from the addition of two bits.
    -   `i` and `j`: Pointers initialized to the last index of the binary strings `a` and `b`, respectively.
2.  **Loop Through the Strings**:
    
    -   Start a loop that continues as long as there are bits left in either `a` or `b`, or there is a carry to process.
    -   For each iteration, add the bits from `a` and `b` at the current indices (if available) along with the `carry`.
3.  **Sum Calculation**:
    
    -   Calculate the sum of the current bits and the carry. This sum can be 0, 1, 2, or 3.
    -   If `sum` is even (0 or 2), the current bit of the result will be `0`. If odd (1 or 3), it will be `1`.
    -   Update the `carry`: If `sum` is 2 or 3, the carry will be `1`, otherwise, it will be `0`.
4.  **Update Result**:
    
    -   Prepend the current bit (the least significant bit of `sum`) to the `result` string.
5.  **Handle Remaining Carry**:
    
    -   After the loop, if there's still a carry left, prepend `1` to the `result`.
6.  **Return the Final Result**:
    
    -   The `result` string will be the binary sum of the two input strings.
