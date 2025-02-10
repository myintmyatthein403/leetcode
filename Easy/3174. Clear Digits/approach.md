To solve the problem of removing all digits and their closest non-digit characters to the left, follow these steps:

1. **Initialize a Stack**: Use a stack to keep track of characters in the string.
2. **Iterate through the String**: Loop through each character in the string.
3. **Check for Digits**: If the current character is a digit:
   - Pop the top character from the stack (this will be the closest non-digit character to the left).
   - Continue to the next character.
4. **Push Non-Digit Characters**: If the current character is not a digit, push it onto the stack.
5. **Construct the Result**: After processing all characters, the stack will contain the remaining characters in the correct order.
6. **Return the Result**: Convert the stack to a string and return it as the final result.

This approach ensures that each digit and its closest non-digit character to the left are removed efficiently.
