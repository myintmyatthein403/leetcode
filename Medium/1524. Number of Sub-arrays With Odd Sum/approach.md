### **Approach: Counting Odd and Even Prefix Sums**

We need to count the number of subarrays whose sum is **odd**. A **brute-force** approach would involve checking all possible subarrays and computing their sums, but this would be too slow for large inputs (\(O(n^2)\) complexity). Instead, we can solve this problem efficiently using **prefix sums and counting parity (odd/even).**

---

### **Observations**
1. A **subarray sum is odd** if the difference between the number of odd and even elements in it results in an odd sum.
2. The key observation is that the **parity (odd/even nature) of a subarray sum** depends on the prefix sum up to that point.

---

### **Efficient Approach (Using Prefix Parity Count)**
Instead of checking each subarray individually, we track:
- **Count of prefix sums that are odd** (`count_odd`).
- **Count of prefix sums that are even** (`count_even`).

#### **Key Idea:**
- If the prefix sum up to an index is **odd**, then the number of subarrays ending at this index with an odd sum depends on the number of **even** prefix sums before it.
- If the prefix sum up to an index is **even**, then the number of subarrays ending at this index with an odd sum depends on the number of **odd** prefix sums before it.
  
**Why?**  
- **Odd prefix sum - Even prefix sum = Odd subarray sum**
- **Even prefix sum - Odd prefix sum = Odd subarray sum**

#### **Steps to Solve:**
1. Initialize two counters: `count_odd = 0` and `count_even = 1` (we consider an implicit prefix sum of `0`, which is even).
2. Maintain a running prefix sum (`prefix_sum`).
3. As we iterate over the array:
   - Update `prefix_sum`.
   - Check its parity:
     - If `prefix_sum` is odd, the number of valid subarrays ending at this index is equal to `count_even` (since `odd - even = odd`).
     - If `prefix_sum` is even, the number of valid subarrays ending at this index is equal to `count_odd` (since `even - odd = odd`).
   - Update `count_odd` and `count_even` accordingly.
4. Use **modulo \(10^9 + 7\)** to prevent overflow.

---

### **Complexity Analysis**
- **Time Complexity:** \(O(n)\) → We iterate through the array once.
- **Space Complexity:** \(O(1)\) → We only use a few integer variables.

This approach ensures an efficient solution compared to the brute-force \(O(n^2)\) method. 🚀
