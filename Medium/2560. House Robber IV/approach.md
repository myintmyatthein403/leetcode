### Approach:

To solve this problem, we need to determine the **minimum possible capability** that allows the robber to steal from at least `k` houses while ensuring **no two adjacent houses** are robbed.

#### **Observations & Key Insights:**
1. **Binary Search on Capability:**  
   - The "capability" of a robbery set is determined by the **maximum** amount robbed in a single house from that set.  
   - We need to **minimize this maximum**, which suggests a binary search approach on the range of possible values of `nums[i]`.

2. **Checking Feasibility:**  
   - Given a capability `x`, we must check if it is possible to rob at least `k` houses such that the maximum robbed value does not exceed `x`.  
   - This can be done greedily:  
     - Start from the first house and try to rob houses without picking adjacent ones.  
     - If `nums[i] ≤ x`, consider robbing it and move to `i+2` (skipping the adjacent house).  
     - If we can rob at least `k` houses this way, then `x` is a valid capability.

3. **Binary Search Implementation:**  
   - The lowest capability is `min(nums)`, and the highest is `max(nums)`.  
   - We perform binary search in this range to find the smallest `x` for which we can rob at least `k` houses.

---

### **Algorithm:**
1. **Initialize binary search range:**  
   - `low = min(nums)`, `high = max(nums)`.
   
2. **Binary search on capability `x`:**  
   - **Mid-point calculation:** `mid = (low + high) / 2`.  
   - **Feasibility check:** Using a greedy approach, determine if we can rob at least `k` houses without exceeding `mid`.  
   - **Adjust search range:**  
     - If possible, try a smaller `mid` (`high = mid`).
     - Otherwise, increase `mid` (`low = mid + 1`).

3. **Final result:**  
   - `low` will eventually converge to the minimum valid capability.

---

### **Complexity Analysis:**
- **Binary search:** \(O(\log M)\), where \(M\) is the max value in `nums`.
- **Greedy check:** \(O(N)\), where \(N\) is the length of `nums`.
- **Total Complexity:** \(O(N \log M)\), which is efficient.

---

### **Intuition Behind Binary Search:**
- If `x` is too small, we won’t be able to select `k` houses → Increase `x`.
- If `x` is valid, we try smaller values to find the minimum → Decrease `x`.
- This ensures we get the smallest possible maximum (`min capability`).
