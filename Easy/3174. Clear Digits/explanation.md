# Explanation to Optimize

### Improvements:

1.  **Uses an array (`stack`) instead of string concatenation**:
    
    -   String manipulation (`result += s[i]` and `result.substring(0, result.length - 1)`) is inefficient because strings are immutable in JavaScript.
    -   Arrays are more efficient for push/pop operations.
2.  **Uses a `for...of` loop**:
    
    -   Cleaner syntax and better readability.
3.  **Optimized `if` condition**:
    
    -   Avoids modifying the string directly; instead, uses `.pop()` to remove the last character only when needed.

### Time Complexity:

-   **Original**: O(n2)O(n^2)O(n2) (due to `substring()` creating new strings repeatedly)
-   **Optimized**: O(n)O(n)O(n) (using a stack with `push`/`pop`)
