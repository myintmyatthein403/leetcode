To solve this problem efficiently, we need to **count the number of index pairs** \((i, j)\) such that:

- \(0 \leq i < j < n\)
- \( \text{lower} \leq \text{nums}[i] + \text{nums}[j] \leq \text{upper} \)

### Naive approach (brute-force)
You could use a **nested loop** to check every pair \((i, j)\) and see if the sum of `nums[i] + nums[j]` falls within the given range. This has **O(n²)** time complexity, which is **too slow** for large arrays.

---

### Efficient approach (using sorting + binary search)

We can **optimize** the solution by leveraging sorting and binary search to reduce the complexity to **O(n log n)**.

Here’s the **step-by-step logic**:

#### Step 1: Sort the array
- This allows us to apply binary search to efficiently find how many pairs exist within a sum range.

#### Step 2: For each index `i`, fix `nums[i]` and find valid `nums[j]` (where `j > i`)
- We want to find how many values of `nums[j]` exist such that:
  \[
  \text{lower} - \text{nums}[i] \leq \text{nums}[j] \leq \text{upper} - \text{nums}[i]
  \]
- Since the array is sorted, we can binary search the **left bound** (smallest `j` where the sum is ≥ lower) and the **right bound** (largest `j` where the sum is ≤ upper).

#### Step 3: Count all valid `j` between those bounds (excluding those where `j <= i`)

#### Step 4: Sum over all valid pairs from each `i`

---

### Why this works
- Sorting gives us order so we can search faster.
- Binary search allows us to quickly find how many numbers in the tail of the array form valid pairs with the current `nums[i]`.
- Overall complexity is **O(n log n)** due to sorting and binary searches for each element.
