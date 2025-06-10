To solve the problem **"Maximum Difference Between Even and Odd Frequency I"**, the goal is to:

> Find the **maximum difference `a1 - a2`** between any character with an **odd frequency (`a1`)** and any character with an **even frequency (`a2`)**.

---

### 🔍 Step-by-Step Approach (No Code)

#### 1. **Count Frequencies**

* First, determine how often each character appears in the input string.
* This gives you a frequency map or table for all characters in the string.

#### 2. **Separate Frequencies into Two Groups**

* Iterate through the frequency table and:

  * Add frequencies that are **odd** into a list called `odd_frequencies`.
  * Add frequencies that are **even** into a list called `even_frequencies`.

#### 3. **Check for Valid Pairs**

* The problem guarantees at least **one odd** and **one even** frequency exist, so both lists will be non-empty.

#### 4. **Find Maximum Difference**

* To find the **maximum possible difference `a1 - a2`**:

  * Take the **maximum value** from the `odd_frequencies` list (since we want the biggest odd frequency).
  * Take the **minimum value** from the `even_frequencies` list (since subtracting a smaller even frequency gives a larger result).
* Compute the difference: `max_odd - min_even`.

#### 5. **Return the Result**

* Return the computed maximum difference as the final answer.

---

### 🧠 Key Insight

* We don’t need to consider all combinations of odd and even frequencies. Only the **largest odd** and the **smallest even** frequency are relevant to maximize the difference.

---

### ✅ Example: `"aaaaabbc"`

* Frequencies: `a=5 (odd), b=2 (even), c=1 (odd)`
* Odd frequencies: `[5, 1]`, Even frequencies: `[2]`
* Max odd = `5`, Min even = `2`
* Output = `5 - 2 = 3`

---

### 🧮 Time and Space Complexity

* **Time Complexity:** `O(n)` where `n` is the length of the string (counting characters and scanning frequency table).
* **Space Complexity:** `O(1)` — since the alphabet is fixed (only 26 lowercase letters), frequency storage is constant.

Let me know if you'd like a code implementation as well.
