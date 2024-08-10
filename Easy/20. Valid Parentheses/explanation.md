### Explanation:

1.  **Stack Usage**:
    
    -   The stack stores opening brackets as they appear. This allows for a Last-In-First-Out (LIFO) access pattern, which is ideal for checking matching pairs.
2.  **Matching Brackets**:
    
    -   The `matchingBracket` object maps each closing bracket to its corresponding opening bracket. This makes it easy to check if the bracket at the top of the stack matches the current closing bracket.
3.  **Looping Through the String**:
    
    -   The string is processed one character at a time. Opening brackets are pushed onto the stack, and closing brackets trigger a check against the top of the stack.
4.  **Final Check**:
    
    -   After processing the entire string, if the stack is empty, it means all opening brackets had matching closing brackets in the correct order.

### Example Walkthroughs:

1.  **Example 1**: `s = "()"`
    
    -   Stack after processing: `[]` (empty)
    -   Output: `true` (valid)
2.  **Example 2**: `s = "()[]{}"`
    
    -   Stack after processing: `[]` (empty)
    -   Output: `true` (valid)
3.  **Example 3**: `s = "(]"`
    
    -   Stack after processing: `['(']` (not empty, mismatched)
    -   Output: `false` (invalid)

This solution is efficient and works in linear time *O(n)*, where *n* is the length of the string.
