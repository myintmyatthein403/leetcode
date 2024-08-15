### Approach

To solve the problem of finding the length of the last word in a given string, we can follow these steps:

1.  **Trim the String**: First, remove any trailing spaces from the string, as they don't contribute to the length of the last word.
    
2.  **Find the Last Word**: Start scanning the string from the end and find the first space, which indicates the end of the last word.
    
3.  **Calculate Length**: The number of characters from the start of this last word to the end of the string gives the length of the last word.
