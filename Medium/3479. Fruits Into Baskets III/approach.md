To solve **Leetcode 3479: Fruits Into Baskets III**, we need to simulate placing fruits into baskets following specific rules:

---

### 🔍 Problem Recap:

You're given:

* `fruits[i]` = quantity of the *i-th* fruit type.
* `baskets[j]` = capacity of the *j-th* basket.

Rules:

1. Go **left to right** through the `fruits` array.
2. For each fruit, find the **leftmost basket** that:

   * Is **available** (unused).
   * Has capacity **≥ the fruit quantity**.
3. Each basket can be used **once**.
4. If no such basket is found, the fruit is **unplaced**.
5. Return the **count of unplaced fruit types**.

---

### ✅ Goal:

Return the number of fruit types that **could not be placed** into any basket.

---

### ⚙️ Approach:

#### Step 1: Track Basket Usage

* Since each basket can be used only once, keep a data structure that helps:

  * Efficiently find the **leftmost available basket** with enough capacity.
  * Efficiently mark a basket as used.

#### Step 2: Use a Balanced Data Structure

* This is similar to the **online assignment** problem:

  * You need to efficiently find the **smallest index ≥ current pointer** where `baskets[j] ≥ fruits[i]` and `j` is not used.

* However, due to the **left-to-right rule**, we must process fruits in order and **always pick the leftmost basket** (i.e., smallest valid index) that satisfies the condition.

---

### 🔄 Strategy:

* Initialize a pointer `j = 0` to track the current basket to check.

* Loop through each fruit from left to right:

  * From `j` to `n`, find the first basket such that:

    * `baskets[j] >= fruits[i]`
    * `basket[j]` is unused
  * If such a basket is found, mark it as used and move on.
  * If not found, increment the **unplaced count**.

* The key is to **scan baskets from left to right only once**, maintaining an efficient way to skip used or incompatible baskets.

---

### ⏱️ Time Complexity:

* In the **naïve** approach, each fruit may scan up to `n` baskets → **O(n²)**.
* However, since we only scan each basket **once**, the **optimized linear scan** gives us:

  * **O(n)** time overall
  * Each fruit and each basket is processed at most once.

---

### 🧠 Optimization Insights:

* You don't need sorting or advanced data structures (like trees or heaps) because the order matters and left-to-right scanning simplifies things.
* You just need a **greedy**, forward-only, linear scan.

---

### 🔚 Final Thoughts:

This is a greedy matching problem. For each fruit, find the first compatible basket starting from where you left off, skipping already used or insufficient baskets.

If you want code for it, let me know — but this is the core idea.
