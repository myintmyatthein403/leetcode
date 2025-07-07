To solve **Leetcode 1353: Maximum Number of Events That Can Be Attended**, we need a **greedy + priority queue** approach. Here's a step-by-step explanation of the **idea and logic** without using code:

---

### 🔍 **Goal**

Maximize the number of events you can attend, with the restriction that you can attend **only one event per day**, and you must attend each event on one of its valid days (`startDay ≤ day ≤ endDay`).

---

### 🧠 **Strategy Overview**

We want to **attend the earliest-ending event** available **each day**, because:

* Events with early end dates expire quickly.
* If we skip an early-ending event, we might not get another chance later.

This calls for a **greedy approach**:

> **Always attend the event that ends earliest among those currently available.**

---

### 🧩 **Steps**

1. **Sort the events by start day**.

   * This helps us know which events are available as we simulate each day.

2. **Use a min-heap (priority queue) to track end dates** of ongoing events.

   * On each day, add to the heap all events that start **that day**.
   * The heap ensures we always pick the event that ends the earliest.

3. **Simulate each day**, starting from day 1 up to the last day any event ends.

   * On each day:

     * **Add** all events that start on this day into the heap.
     * **Remove** from the heap any events that already ended (i.e., end day < current day).
     * If the heap is not empty, **attend one event** (the one with the earliest end day), and remove it from the heap.

4. **Count how many events were attended** this way.

---

### 📌 Why It Works

* By **always attending the soonest-ending available event**, we minimize conflict with future events.
* The priority queue gives efficient access to the next best candidate.

---

### ⏱️ Time Complexity

* Sorting: `O(n log n)` for `n` events.
* Simulating up to 100,000 days.
* Each event is pushed and popped at most once → `O(n log n)` for heap operations.
* **Total: O(n log n)** — efficient for `n ≤ 10⁵`.

---

### 🧠 Intuition Example

Input: `[[1,2], [2,3], [3,4]]`

* Day 1: event \[1,2] starts → heap = \[2] → attend and remove → count = 1
* Day 2: event \[2,3] starts → heap = \[3] → attend → count = 2
* Day 3: event \[3,4] starts → heap = \[4] → attend → count = 3

✅ Attended all events.

---
