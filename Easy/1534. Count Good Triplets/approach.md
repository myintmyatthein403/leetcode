To solve this problem, we need to count how many **triplets** in the array satisfy the three given conditions related to absolute differences.

---

### 🔍 Problem Breakdown

You're given:
- An array `arr` of integers.
- Three integers `a`, `b`, and `c`.

You need to find how many **triplets** `(i, j, k)` exist such that:
1. Indices satisfy: `0 <= i < j < k < arr.length`
2. Values satisfy:
   - `|arr[i] - arr[j]| <= a`
   - `|arr[j] - arr[k]| <= b`
   - `|arr[i] - arr[k]| <= c`

---

### 🧠 Approach

#### 1. **Brute Force (Straightforward)**
- Loop through **all possible combinations** of triplets with indices `i < j < k`.
- For each triplet:
  - Check all three conditions.
  - If all are satisfied, count the triplet as good.

#### 2. **Steps**
1. Start with `i = 0` to `arr.length - 3`
2. For each `i`, loop `j = i + 1` to `arr.length - 2`
3. For each `j`, loop `k = j + 1` to `arr.length - 1`
4. For each triplet `(i, j, k)`:
   - Compute `|arr[i] - arr[j]|`, `|arr[j] - arr[k]|`, and `|arr[i] - arr[k]|`
   - Check if each is within bounds `a`, `b`, and `c` respectively
5. If all checks pass, increment a counter
6. Return the counter at the end

---

### 💡 Why This Works
- The constraints imply a relatively small input size (for larger inputs, a more optimized approach would be needed).
- Brute force is acceptable because checking all triplets in a small array won’t be too slow (O(n³)).

---

### 📌 Example

For `arr = [3,0,1,1,9,7]` and `a=7, b=2, c=3`:

We try all triplets `(i, j, k)` such that `i < j < k`, and check if the conditions are satisfied. After checking them all, we find there are 4 such triplets.
