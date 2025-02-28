To solve this problem, we need to find the **Shortest Common Supersequence (SCS)** of two given strings, `str1` and `str2`. The **SCS** is the shortest string that contains both `str1` and `str2` as subsequences.

### **Approach:**
1. **Find the Longest Common Subsequence (LCS):**  
   - The LCS of `str1` and `str2` helps us determine the overlapping characters that appear in both strings in order.  
   - This helps in minimizing duplication when forming the final supersequence.

2. **Build the Shortest Common Supersequence using LCS:**  
   - Start with two pointers at the beginning of `str1` and `str2`.  
   - Traverse both strings and construct the result by:
     - Adding non-matching characters from `str1` and `str2` until an LCS character is found.
     - Adding the LCS character (which appears in both).
     - Continuing until both strings are fully processed.

3. **Time Complexity:**  
   - Finding the LCS takes **O(m × n)** using dynamic programming (where `m` and `n` are the lengths of `str1` and `str2`).  
   - Constructing the SCS from the LCS takes **O(m + n)`.  
   - Overall, the approach runs in **O(m × n) time**.

### **Key Observations:**
- If `str1` is a subsequence of `str2`, the answer is simply `str2`, and vice versa.
- If `str1 == str2`, the answer is just `str1`.
- The LCS helps eliminate unnecessary repetition while constructing the supersequence.

