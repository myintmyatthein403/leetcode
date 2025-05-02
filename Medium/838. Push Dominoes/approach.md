To solve the dominoes problem, we need to simulate how the dominoes fall based on the initial pushes and their effect over time, but do so **efficiently without simulating every second**. Here’s the clean **approach and explanation**:

---

### **Core Idea**

Each domino can be affected by a **left force (`L`)**, a **right force (`R`)**, or **no force (`.`)**. Instead of simulating each second, we observe the **influence of the nearest `R` or `L` domino** on each `.` and decide the final direction based on which force reaches it first.

---

### **Step-by-Step Approach**

1. **Track Rightward Influence (from `R`)**:

   * Traverse from **left to right**.
   * Maintain a counter (`force`) that gets set to a high value when an `R` is encountered, and gradually decreases as we move rightward.
   * Reset to zero if `L` is encountered (rightward influence stops there).
   * Record these values in a list (`forces[]`), where each value represents the strength of the rightward force.

2. **Track Leftward Influence (from `L`)**:

   * Traverse from **right to left**.
   * Again, use a counter (`force`) that gets set when an `L` is encountered and decreases moving leftward.
   * Reset to zero on `R`.
   * Subtract this from the earlier `forces[]` (rightward positive, leftward negative).

3. **Determine Final State**:

   * After combining both directions, interpret the `forces[i]` value:

     * If > 0 → more right force → domino falls right (`R`)
     * If < 0 → more left force → domino falls left (`L`)
     * If 0 → balanced or no force → remains upright (`.`)

---

### **Why This Works**

* This avoids explicitly simulating each time step.
* Instead, it leverages **distance-based force influence**, which captures the same effect in **O(n)** time.
* Balanced forces are naturally handled by the `0` condition.
