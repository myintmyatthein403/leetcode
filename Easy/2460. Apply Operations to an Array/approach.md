### **Approach: Sequential Processing & Zero Shifting**

We will solve this problem in two main steps:

### **Step 1: Sequential Processing of the Array**
Since we need to process the array sequentially (`0 to n-2`), we will iterate over the array and apply the given operation:

- If `nums[i] == nums[i + 1]`, then:
  - Multiply `nums[i]` by `2`
  - Set `nums[i + 1]` to `0`
- If `nums[i] != nums[i + 1]`, we skip to the next index.

This ensures that each element is updated step-by-step before moving to the next one.

### **Step 2: Shift All Zeros to the End**
After processing the array, we need to move all `0`s to the end while maintaining the relative order of the non-zero elements. This can be efficiently done using a two-pointer technique:

1. Use a pointer to track the position where the next non-zero element should be placed.
2. Traverse the array, and whenever a non-zero element is found, swap/move it to the correct position.
3. Once all non-zero elements are placed, fill the remaining positions with `0`s.

### **Time Complexity:**
- **Step 1 (Processing Operations):** \(O(n)\) (since we iterate once through the array)
- **Step 2 (Shifting Zeros):** \(O(n)\) (since we traverse the array again to rearrange elements)

### **Final Complexity:**  
\(O(n)\), which is optimal for this problem.
