To solve **Leetcode 2566. Maximum Difference by Remapping a Digit**, we can break the problem into two clear parts: **finding the maximum possible value** and **finding the minimum possible value** by remapping **exactly one digit** in the original number.

---

### ✅ **Key Observations:**

* You are allowed to remap **only one digit**, but **all its occurrences** must be replaced.
* You can choose **different digit mappings** to maximize and minimize the value.
* You are allowed to remap a digit to **itself**, meaning the original number remains unchanged.
* Leading zeroes are **allowed**, so we don't have to worry about validity after remapping.

---

### 🎯 Goal:

Find the **maximum** number and **minimum** number you can get by **remapping a single digit**, then return the **difference** between them.

---

### 🚶‍♂️ Step-by-Step Approach:

#### 1. **Convert `num` to string**:

This allows you to work digit by digit easily.

#### 2. **For maximum value**:

You want to increase digits to get the largest possible number.

* Try **remapping each digit** `d1` (from `0` to `9`) to `9`.
* For each digit `d1` in the number:

  * Replace all occurrences of `d1` with `9`.
  * Convert the result back to an integer.
  * Keep track of the **maximum** result across all such attempts.

#### 3. **For minimum value**:

You want to decrease digits to get the smallest possible number.

* Try **remapping each digit** `d1` to `0`.
* For each digit `d1` in the number:

  * Replace all occurrences of `d1` with `0`.
  * Convert the result back to an integer.
  * Keep track of the **minimum** result.

#### 4. **Return the difference**:

```plaintext
result = max_value - min_value
```

---

### 🧠 Example Walkthrough:

Input: `num = 11891`

* To maximize:

  * Remap `1` to `9`: becomes `99899`
* To minimize:

  * Remap `1` to `0`: becomes `890`

Result: `99899 - 890 = 99009`

---

### 💡 Optimization:

* You only need to remap digits that are **present** in the original number, not all `0-9`.
* So iterate over the **unique digits** in `num`.

---

### ⏱️ Time Complexity:

* O(n) where `n` is the number of digits in `num`, because for each unique digit (max 10), we may perform a full replacement and conversion.

