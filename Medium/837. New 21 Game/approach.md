Great question — this problem is tricky because it mixes **probability** with a **stopping condition**. Let’s break down the approach clearly (without code).

---

### 🔑 Key Insights

1. **When does Alice stop?**

   * Alice only keeps drawing **while her score < k**.
   * Once her score is **≥ k**, she stops.

2. **Final range of possible scores:**

   * The smallest possible final score is `k`.
   * The largest possible final score is `k - 1 + maxPts` (because she could be at `k-1` and then draw `maxPts`).

   So Alice’s final score lies in `[k, k-1+maxPts]`.

3. **What do we want?**

   * The probability that her **final score ≤ n**.

   Equivalently:

   * Probability of ending in `[k, n]` divided by probability of ending in `[k, k-1+maxPts]`.

---

### 🎲 Dynamic Programming Approach

This is a **DP probability distribution problem**.

* Define `dp[x]` = probability that Alice’s score ends at exactly `x`.
* We only care about scores `0 ≤ x ≤ n`.

How do we compute this?

#### Step 1: Base case

* Alice starts at `0` with probability `1`.

#### Step 2: Transition

* If Alice is at score `i` (with probability `dp[i]`) and `i < k`, she draws a number between `1` and `maxPts`.

* That means:

  ```
  dp[i + j] += dp[i] * (1/maxPts),   for each 1 ≤ j ≤ maxPts
  ```

* If `i ≥ k`, Alice stops → no transitions.

#### Step 3: Answer

* Once all probabilities are distributed, the answer is:

  ```
  sum(dp[k] + dp[k+1] + ... + dp[n])
  ```

---

### 🚀 Optimization with Sliding Window

The naïve DP transition is **O(n × maxPts)**, which is too slow (`10^4 × 10^4`).

Instead:

* Notice each state `dp[i]` depends on the **average probability of the previous `maxPts` states**.
* Maintain a **sliding window sum** of probabilities to update efficiently in `O(n)`.

---

### 🔍 Edge Cases

1. **k = 0**

   * Alice never draws → score = 0.
   * Answer is `1` if `n ≥ 0`.

2. **n ≥ k - 1 + maxPts**

   * Alice’s maximum possible score is ≤ `n`.
   * She always ends ≤ `n`.
   * Answer is `1`.

---

### 🧠 Intuition Summary

* We are basically simulating Alice’s probability of reaching each score.
* Because draws are uniform, every step spreads probability evenly across the next `maxPts` scores.
* The sliding window trick makes it efficient to calculate.

---

👉 In short:

* Use DP to model probabilities of reaching each score.
* Optimize with a sliding window for efficiency.
* Answer is the probability mass in `[k, n]`.

---
