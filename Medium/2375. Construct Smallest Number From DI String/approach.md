### **Approach and Explanation**

The problem requires generating the smallest numerical sequence that follows a given pattern of **"I" (Increasing)** and **"D" (Decreasing)**. The numbers used must be **distinct and in the range [1, 9]**, ensuring lexicographically smallest ordering.

---

### **Intuition**
- The smallest possible number starts from **1** and increases sequentially.
- "I" means the next number should be greater.
- "D" means the next number should be smaller.
- To handle **"D"**, we delay adding numbers to the result and use a **stack**.

---

### **Step-by-Step Approach**
1. **Iterate over the pattern**:
   - Process each character (`I` or `D`).
   - Maintain a **stack** to store numbers temporarily.

2. **Push numbers onto the stack**:
   - Always push `i + 1` onto the stack (since numbers start from `1`).

3. **Pop from the stack when needed**:
   - Whenever we encounter an `"I"` or reach the end of the pattern, pop all elements from the stack and append them to the result.
   - This ensures that numbers associated with `"D"` remain on the stack, reversing their order when popped.

---

### **Example Walkthrough**
#### **Input:**  
`pattern = "DID"`

#### **Iteration Process**:
| Step | Pattern Char | Stack State | Result Output |
|------|-------------|-------------|--------------|
| 1    | `"D"`       | `[1]`       | `""` |
| 2    | `"I"`       | `[1,2]`     | `"21"` (Pop stack) |
| 3    | `"D"`       | `[3]`       | `"21"` |
| 4    | **End**     | `[3,4]`     | `"2143"` (Pop stack) |

#### **Final Output:**  
`"2143"`

---

### **Key Observations**
- **Stack stores numbers in order**, helping reverse sequences when needed.
- **Immediate pop ensures proper placement of numbers** when `"I"` appears.
- **Delaying pop for `"D"` ensures decreasing order is maintained**.

This approach ensures that the resulting number is the **lexicographically smallest** while satisfying the pattern constraints. 🚀
