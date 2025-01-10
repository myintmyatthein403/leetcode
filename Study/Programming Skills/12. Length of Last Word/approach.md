To solve the problem of finding the length of the last word in a given string, you can follow these steps:

1. **Trim the String**: Remove any trailing spaces from the string to ensure that the last word is correctly identified.
2. **Split the String**: Split the string by spaces to get all the words in the string.
3. **Get the Last Word**: Access the last word from the list of words obtained from the split operation.
4. **Return the Length**: Return the length of the last word.

Here is a Python implementation of this approach:

```python
def length_of_last_word(s):
    # Trim the string to remove trailing spaces
    s = s.strip()
    # Split the string by spaces
    words = s.split(' ')
    # Get the last word
    last_word = words[-1]
    # Return the length of the last word
    return len(last_word)
```

### Example Usage
```python
s1 = "Hello World"
print(length_of_last_word(s1))  # Output: 5

s2 = "   fly me   to   the moon  "
print(length_of_last_word(s2))  # Output: 4

s3 = "luffy is still joyboy"
print(length_of_last_word(s3))  # Output: 6
```

This code will correctly compute the length of the last word in the given string by following the outlined approach.
