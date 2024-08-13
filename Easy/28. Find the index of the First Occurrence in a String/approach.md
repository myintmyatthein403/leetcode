### Approach:

1.  **Direct Search**:
    
    -   Iterate through the `haystack` string and check for the `needle` substring starting at each character.
    -   If a match is found, return the index where the `needle` starts in `haystack`.
    -   If the loop completes without finding a match, return `-1`.
2.  **Early Termination**:
    
    -   If the length of `needle` is greater than `haystack`, it's impossible for `needle` to be a substring of `haystack`, so return `-1` immediately.
