To solve **Leetcode 1233: Remove Sub-Folders from the Filesystem**, we can follow this **efficient sorting + filtering approach**:

---

### ✅ **Key Idea**

If we **sort the folder paths lexicographically**, then any **sub-folder** will appear **immediately after its parent folder**, and will start with the parent folder followed by `'/'`.

---

### 🧠 **Approach (Step-by-Step Explanation)**

1. **Sort the input list of folder paths lexicographically.**

   * Example:
     `["/a", "/a/b", "/a/b/c", "/b"]`
     becomes → `["/a", "/a/b", "/a/b/c", "/b"]`.

2. **Iterate over the sorted list**, keeping track of the **latest parent folder** added to the result.

3. For each folder:

   * Check if it is a **sub-folder of the last added folder** in the result.

     * A sub-folder means it **starts with the last added folder** + `"/"`.
   * If it **is a sub-folder**, skip it.
   * If it is **not a sub-folder**, add it to the result.

4. Return the resulting list of folders (with sub-folders removed).

---

### 💡 Why This Works

* Sorting ensures that **parent folders come before sub-folders**.
* By checking only the most recent added folder in the result, we avoid unnecessary comparisons, keeping it efficient.

---

### 📈 Time Complexity

* **Sorting** takes `O(n log n)`, where `n = folder.length`.
* **Linear scan** after that takes `O(n * k)`, where `k` is the average length of folder strings.
* Overall: **`O(n log n + n * k)`**

---

### ✅ Example Walkthrough

Input:
`["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]`
Sorted:
`["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]`

Processing:

* Add `/a` → result = \[`/a`]
* `/a/b` starts with `/a/` → skip
* `/c/d` → does not start with `/a/` → add → result = \[`/a`, `/c/d`]
* `/c/d/e` starts with `/c/d/` → skip
* `/c/f` → does not start with `/c/d/` → add → result = \[`/a`, `/c/d`, `/c/f`]

---
