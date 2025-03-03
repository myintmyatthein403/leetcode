To solve this problem, we need to rearrange the elements in a stable manner while ensuring they follow the conditions:

1. **Partitioning the Array**  
   - We classify the elements into three categories:
     - **Less than `pivot`** → Should appear first.
     - **Equal to `pivot`** → Should appear in the middle.
     - **Greater than `pivot`** → Should appear last.
   
2. **Maintaining Relative Order**  
   - The problem explicitly states that the order of elements within each category must remain unchanged. This means we should avoid using in-place sorting techniques that disrupt the sequence.

3. **Optimal Approach (Three-Pass or Three-List Method)**  
   - **First pass**: Extract all elements that are smaller than `pivot` and store them in a list.  
   - **Second pass**: Extract all elements that are equal to `pivot` and store them in another list.  
   - **Third pass**: Extract all elements that are greater than `pivot` and store them in a third list.  
   - Finally, concatenate these three lists together to form the result.

### **Time Complexity**
- Since we are iterating through the array three times (O(n) each) and concatenating lists (O(n)), the overall time complexity is **O(n)**.

### **Space Complexity**
- We use three additional lists to store values separately, which results in **O(n)** extra space. If in-place modifications were required, we could explore an alternative partitioning approach, but it may not maintain the order.

This approach is efficient and ensures that we maintain the relative order while correctly partitioning the elements. 🚀
