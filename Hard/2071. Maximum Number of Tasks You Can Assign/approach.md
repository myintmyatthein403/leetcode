To solve the problem of assigning tasks to workers with the help of limited magical pills, we can approach it using a **greedy + binary search strategy**. Here’s a breakdown of the approach and the reasoning:

---

### 🔍 **High-Level Idea**
We aim to **maximize the number of tasks** that can be completed by assigning each task to a worker who meets the strength requirement—either directly or with the help of a pill. Each worker can do at most one task, and each pill can be used to boost only one worker’s strength by a fixed amount.

---

### 🧠 Step-by-Step Approach

#### 1. **Sort Tasks and Workers**
- Sort `tasks` in **descending order** (hardest tasks first).
- Sort `workers` in **ascending order** (weakest workers first).
This sets us up for a binary search and efficient matching.

#### 2. **Binary Search on the Maximum Number of Tasks**
We binary search on `k`, the number of tasks to try assigning (`0 <= k <= min(n, m)`). For each `k`, we check:  
> **Is it possible to assign `k` tasks using available workers, pills, and strength boost?**

#### 3. **Feasibility Check for a Given k**
We try to assign the **hardest `k` tasks** (since they are the most restrictive) to the **strongest `k` workers** (from the end of the sorted list). We attempt to match each task:

- If the current strongest worker can do the task directly, assign it.
- Else, check if we can use a pill on a weaker worker to boost them to meet the task requirement.
- Use a **double-ended queue** or pointer technique to manage worker selection and pill usage efficiently.

We use pills only when strictly needed—preferably on the weakest workers who could meet the requirement with a boost (greedy).

#### 4. **Return the Maximum k Found**
Binary search narrows down to the highest number of tasks that can be feasibly assigned.

---

### ✅ Why This Works
- Binary search ensures we check only `O(log n)` task counts.
- Greedy assignment ensures we always match the hardest task with the strongest available help.
- Sorting and managing worker/task lists lets us perform feasibility checks efficiently.

---

### ⏱️ Time Complexity
- Sorting: O(n log n + m log m)
- Binary search + each feasibility check: O(log n * k log k) (due to sorting + greedy check)
