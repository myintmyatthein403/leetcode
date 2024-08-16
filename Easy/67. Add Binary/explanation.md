### Explanation:

-   **Variables**:
    
    -   `result`: A string to store the final result.
    -   `carry`: To handle the carry from the addition of two binary digits.
    -   `i` and `j`: Pointers to the current bit of strings `a` and `b`, respectively.
-   **Loop**:
    
    -   The loop continues as long as there are bits to add in either string or there is a carry to handle.
    -   `sum` starts with the value of `carry`. If there's a bit left in `a`, add it to `sum`. The same goes for `b`.
    -   Append the least significant bit of `sum` (i.e., `sum % 2`) to the `result` string.
    -   Update the `carry` with the most significant bit of `sum` (i.e., `Math.floor(sum / 2)`).
-   **Return**:
    
    -   The `result` string is the final sum of the binary numbers.
