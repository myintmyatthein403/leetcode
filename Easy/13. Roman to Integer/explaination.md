### Explanation:

1.  **Mapping Roman Numerals to Integers**:
    
    -   A dictionary (`romanToIntMap`) is created to store the integer values of Roman numerals.
2.  **Looping Through the String**:
    
    -   The function iterates through each character in the string `s`.
    -   For each character, it checks the integer value of the current symbol and compares it with the value of the next symbol.
3.  **Handling Subtraction Cases**:
    
    -   If the current symbol’s value is less than the next symbol’s value (e.g., `I` before `V`), it means subtraction is needed, so we subtract the current value from the total.
    -   If the current symbol’s value is greater than or equal to the next symbol’s value, we add the current value to the total.
4.  **Final Conversion**:
    
    -   By the end of the loop, the `total` variable holds the integer value of the Roman numeral string.

### Example Walkthroughs:

1.  **Example 1: `s = "III"`**
    
    -   Iteration over `"III"` adds `1` three times, resulting in `3`.
    -   Output: `3`.
2.  **Example 2: `s = "LVIII"`**
    
    -   The values are: `L = 50`, `V = 5`, and `III = 3`.
    -   Summing them gives `58`.
    -   Output: `58`.
3.  **Example 3: `s = "MCMXCIV"`**
    
    -   Breakdown: `M = 1000`, `CM = 900`, `XC = 90`, and `IV = 4`.
    -   Summing them gives `1994`.
    -   Output: `1994`.

This approach is efficient and correctly handles all the special subtraction cases in Roman numerals.
