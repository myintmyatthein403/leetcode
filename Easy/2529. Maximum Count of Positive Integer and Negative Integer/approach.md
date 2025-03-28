### **Approach**

Since the array is sorted in **non-decreasing** order, all negative numbers will appear before positive numbers, with zeros (if present) in between. Our goal is to find and compare the number of positive and negative integers and return the maximum count.

### **Steps to Solve the Problem:**

1. **Identify the number of negative integers (`neg`)**  
   - Since the array is sorted, the negative numbers appear at the beginning.
   - We need to find the **index of the first non-negative number** (i.e., the first `0` or positive number).
   - The count of negative numbers will be equal to this index.

2. **Identify the number of positive integers (`pos`)**  
   - The positive numbers appear at the end of the array.
   - We need to find the **index of the first positive number** and count how many numbers exist after that.

3. **Compare and return the maximum of `neg` and `pos`**  
   - The final result will be `max(neg, pos)`.

### **Optimized Search Approach**
- Since the array is sorted, we can use **binary search** to efficiently locate the first non-negative number and the first positive number.
- This allows us to determine `neg` and `pos` in **O(log n)** time complexity instead of **O(n)** if we were to count them linearly.

### **Edge Cases**
1. **All elements are positive** → `neg = 0`, return `pos`
2. **All elements are negative** → `pos = 0`, return `neg`
3. **Contains zeros** → Ensure that zeros are **excluded** from both counts.
4. **Balanced positive and negative numbers** → Simply return the count.

This approach ensures that we efficiently determine and compare the counts of positive and negative numbers while leveraging the sorted order for optimization. 🚀
