### **Approach: Partition Labels**

To solve this problem, we need to partition the given string `s` into as many contiguous parts as possible, ensuring that each letter appears in at most one part. The key observation is that each letter should be contained within a single partition from its first occurrence to its last occurrence.

---

### **Steps to Solve the Problem:**

1. **Find the Last Occurrence of Each Character**  
   - We first iterate through the string and store the last index of each character.
   - This helps us determine the range in which each character must be included in a single partition.

2. **Iterate Through the String to Form Partitions**  
   - While iterating through the string, we maintain two pointers:
     - `start`: Marks the beginning of the current partition.
     - `end`: Represents the farthest last occurrence of any character encountered so far.
   - As we process characters, we update `end` to the maximum of its current value and the last occurrence of the current character.

3. **Determine Partition Points**  
   - When the current index reaches `end`, it means we have found a valid partition.
   - The size of this partition is computed as `end - start + 1`.
   - We add this size to the result and update `start` to the next index.

---

### **Example Walkthrough:**
#### **Example 1: `s = "ababcbacadefegdehijhklij"`**
1. **Step 1: Compute Last Occurrences**
   ```
   {'a': 8, 'b': 5, 'c': 7, 'd': 14, 'e': 15, 'f': 11, 'g': 13, 
    'h': 19, 'i': 22, 'j': 23, 'k': 20, 'l': 21}
   ```
2. **Step 2: Iterate to Find Partitions**
   - Process `"ababcbaca"`, last seen `a` at index 8 → **Partition size: `9`**
   - Process `"defegde"`, last seen `e` at index 15 → **Partition size: `7`**
   - Process `"hijhklij"`, last seen `j` at index 23 → **Partition size: `8`**

   **Final Output: `[9, 7, 8]`**

---

### **Complexity Analysis**
- **Finding last occurrences:** \(O(n)\) (one pass to store last indices)
- **Iterating through string:** \(O(n)\) (one pass to determine partitions)
- **Total Complexity:** \(O(n)\)

---

### **Key Takeaways**
- The last occurrence of each character dictates partitioning.
- Use two pointers (`start` and `end`) to track valid partitions.
- Once an index reaches `end`, store the partition size and update `start`.
