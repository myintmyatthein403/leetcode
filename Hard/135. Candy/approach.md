To solve the **Candy** problem optimally, we need to ensure two key conditions:

1. **Every child gets at least one candy.**
2. **If a child has a higher rating than their immediate neighbor, they must get more candies.**

### ✅ Core Idea:

This is a **greedy** problem that requires a **two-pass** approach — one pass from left to right, and another from right to left. The main challenge is to satisfy both the local increasing and decreasing relationships.

---

### 🔍 Step-by-Step Explanation:

#### 1. **Initial Setup**

* Start by assigning **1 candy to every child**, since each child must receive at least one.

#### 2. **Left-to-Right Pass**

* Traverse the `ratings` array from **left to right**.
* If the current child's rating is **greater than the previous child’s**, give them **one more candy than the previous child**.
* This ensures that all ascending rating sequences (left to right) satisfy the rules.

#### 3. **Right-to-Left Pass**

* Traverse the `ratings` array from **right to left**.
* If the current child's rating is **greater than the next child’s**, they must get more candies than the next child.
* So, update the current child’s candy count to be the **maximum of their current candies and one more than the next child’s**.
* This pass corrects cases where the left-to-right pass might have violated the second rule (especially in descending sequences).

#### 4. **Sum the Candies**

* Finally, sum all the candies in the array and return the result.

---

### 💡 Why This Works:

* The left-to-right pass ensures increasing sequences are handled.
* The right-to-left pass ensures decreasing sequences are handled.
* Both passes combined ensure all rules are respected with the minimum total number of candies.

---

### 🧠 Time and Space Complexity:

* **Time Complexity:** O(n) — Two passes through the `ratings` array.
* **Space Complexity:** O(n) — To store the candies for each child.

This is the optimal approach for this problem.
