To solve the problem of determining if you can construct `k` palindrome strings from a given string `s`, you can follow these steps:

1. **Count Character Frequencies**: Use a dictionary or a `Counter` from the `collections` module to count the frequency of each character in the string `s`.

2. **Count Odd Frequencies**: Count how many characters have an odd frequency. This is because each palindrome can have at most one character with an odd frequency (in the middle of the palindrome).

3. **Check Feasibility**:
   - If the number of characters with odd frequencies is greater than `k`, return `false` because you cannot form `k` palindromes.
   - If `k` is greater than the length of the string `s`, return `false` because you cannot have more palindromes than the number of characters.
   - Otherwise, return `true`.

Here is a Python function implementing this approach:

```python
from collections import Counter

def canConstruct(s: str, k: int) -> bool:
    if k > len(s):
        return False
    
    char_count = Counter(s)
    odd_count = sum(1 for count in char_count.values() if count % 2 != 0)
    
    return odd_count <= k
```

### Explanation:
- **Step 1**: `Counter(s)` creates a dictionary with characters as keys and their frequencies as values.
- **Step 2**: `sum(1 for count in char_count.values() if count % 2 != 0)` counts how many characters have an odd frequency.
- **Step 3**: Check if the number of odd frequencies is less than or equal to `k` and if `k` is not greater than the length of `s`.

This function will return `true` if it is possible to construct `k` palindrome strings using all characters in `s`, and `false` otherwise.


