To solve this problem efficiently, we can use a **sliding window (two-pointer) approach** instead of generating all possible substrings, which would be too slow for large inputs.

### **Approach:**
1. **Use Two Pointers (Left & Right):**  
   - Start both pointers at the beginning of the string.
   - Expand the right pointer to include more characters and find a valid window that contains at least one 'a', 'b', and 'c'.
   - Once a valid window is found, try to contract the left pointer to find the minimum-length valid substring.

2. **Use a Frequency Map:**  
   - Maintain a count of 'a', 'b', and 'c' in the current window.

3. **Count Valid Substrings:**  
   - If a valid window is found, all substrings ending at the current right pointer and starting from any position ≤ left pointer will also be valid.
   - This means that for a valid window `[left, right]`, the number of valid substrings contributed is **(n - right)**, where `n` is the length of `s`.

### **Time Complexity Analysis:**
- The right pointer moves from `0` to `n - 1` (O(n)).
- The left pointer also moves from `0` to `n - 1` (O(n)).
- Since each pointer moves at most `n` times, the approach runs in **O(n) time**, which is optimal.

This approach efficiently counts the valid substrings without generating all possible substrings explicitly. 🚀
