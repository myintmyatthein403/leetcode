To solve **[898. Bitwise ORs of Subarrays](https://leetcode.com/problems/bitwise-ors-of-subarrays/)** efficiently, we need to understand a key property of **bitwise OR** and avoid the naive O(n²) approach.

---

### 🔍 **Understanding the Problem**

You're given an array `arr`, and you must find how many **distinct results** can be formed by taking the **bitwise OR of every possible subarray**.

* Bitwise OR is **monotonic**: once a bit is set (i.e., becomes 1), it **never becomes 0** again as you extend the subarray.
* This property helps reduce the number of intermediate results we have to track.

---

### ✅ **Approach: Dynamic Set Tracking**

Instead of generating all subarrays, we **track only the current possibilities efficiently** using sets.

#### Key Idea:

At each index `i`, we compute all possible **bitwise ORs** ending at index `i`, by OR-ing `arr[i]` with all results from the previous index. We:

1. Maintain a set `prev` that contains all OR results ending at index `i-1`.
2. Create a new set `cur` for the current index:

   * Start with `arr[i]`
   * For each value `x` in `prev`, include `x | arr[i]` in `cur`
3. Add all elements of `cur` to a global `result` set to collect **all distinct ORs**.

#### Why It Works:

* Because OR is monotonic, the number of unique results in `cur` at each step is limited (typically ≤ 32 because integers are ≤ 32 bits).
* We avoid recomputing overlapping subarrays.

---

### 🧠 Time Complexity

* Worst-case time: **O(n \* 32)**, where `n` is the length of `arr`, and `32` is the maximum number of different OR results due to bit length.
* Much faster than O(n²) brute force.

---

### 🧩 Real-World Use Case

This technique is useful in areas involving:

* **Signal processing** or **mask analysis**, where you track how feature combinations evolve over time.
* **Compiler optimization**, where tracking changes in control flags over a sequence of instructions is needed.
* **Network security**, where packet headers or flag masks are ORed to track cumulative states.

---

Let me know if you want a visual breakdown or the code version!
