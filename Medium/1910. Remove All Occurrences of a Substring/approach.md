To solve the problem of removing all occurrences of a substring from a given string, you can follow these steps:

1. **Initialize**: Start with the given string `s` and the substring `part` that needs to be removed.

2. **Loop until no occurrences**: Use a loop to repeatedly find and remove the leftmost occurrence of `part` in `s` until `part` no longer exists in `s`.
   - **Find the leftmost occurrence**: Use a string search function to find the index of the first occurrence of `part` in `s`.
   - **Remove the substring**: If `part` is found, remove it by slicing the string `s` into two parts: the part before the found index and the part after the found index plus the length of `part`. Concatenate these two parts to form the new string `s`.

3. **Return the result**: Once the loop completes (i.e., `part` is no longer found in `s`), return the modified string `s`.

This approach ensures that all occurrences of the substring `part` are removed from the string `s`.
