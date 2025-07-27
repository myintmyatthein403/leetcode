To solve the problem **"Count Hills and Valleys in an Array"**, here’s a **step-by-step approach and explanation**:

---

### ✅ **Core Concept**

An index `i` is part of a **hill** if:

* It has non-equal neighbors on **both sides**, and
* Its value is **greater** than both of its closest non-equal neighbors.

An index `i` is part of a **valley** if:

* It has non-equal neighbors on **both sides**, and
* Its value is **less** than both of its closest non-equal neighbors.

Also, **adjacent equal values** (like `[1,1]`) are considered **part of the same hill or valley**, and we should only **count once per group**.

---

### 🧠 **Approach**

#### 1. **Preprocess to Remove Consecutive Duplicates**

We only care about the "shape" of the array — ups and downs — so consecutive duplicates don't change the hill/valley structure. Removing them simplifies checking neighbors.

For example, `[2, 4, 1, 1, 6, 5]` becomes `[2, 4, 1, 6, 5]`.

This helps:

* Avoid overcounting the same hill/valley.
* Ensure that `nums[i-1]` and `nums[i+1]` are not equal to `nums[i]`.

#### 2. **Iterate from Index 1 to n-2**

For each index `i` (not the first or last), do the following:

* Compare `nums[i]` to its neighbors `nums[i-1]` and `nums[i+1]`.

  * If `nums[i] > nums[i-1] && nums[i] > nums[i+1]`: it's a **hill**.
  * If `nums[i] < nums[i-1] && nums[i] < nums[i+1]`: it's a **valley**.
* If either condition is true, **increment the count**.

#### 3. **Return the Count**

At the end, you’ll have the total number of hills and valleys.

---

### 🧪 Example

Input: `[2, 4, 1, 1, 6, 5]`
After removing duplicates: `[2, 4, 1, 6, 5]`
Check:

* `4` is a **hill** (greater than 2 and 1)
* `1` is a **valley** (less than 4 and 6)
* `6` is a **hill** (greater than 1 and 5)
  Total: **3**

---

### 💡 Summary of Steps

1. **Remove consecutive duplicates** to simplify neighbor comparison.
2. **Iterate** through indices 1 to n−2.
3. **Check conditions** for hill or valley based on neighbors.
4. **Increment count** accordingly.
5. **Return total count** at the end.

This approach ensures you account for hills/valleys accurately and efficiently in O(n) time.
