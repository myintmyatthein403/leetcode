Here’s how I’d approach this problem step-by-step — no code, just logic.

---

### **1. Understanding what’s being asked**

We need to find the *largest* "good integer" in the string `num`.

* "Good integer" = substring of length 3 where all digits are the same (e.g., `"777"`, `"000"`).
* "Largest" is based on numerical value, so `"999"` > `"888"` > `"777"`, etc.
* If there’s no such substring, return `""`.

---

### **2. Observations**

* Since the substring length is fixed at **3**, we can slide through the string in **O(n)** time.
* Only 10 possible "good integers" exist (`"000"` to `"999"`) — so we can just track the best one we find.
* Leading zeros are fine — `"000"` is valid.
* The order of digits in `num` matters because we’re looking for contiguous sequences.

---

### **3. Step-by-step approach**

**Step A: Iterate through substrings of length 3**

* Start at index 0, check substring `num[i:i+3]` for all `i` from 0 to `len(num) - 3`.

**Step B: Check if substring is “good”**

* All three characters must be the same: `num[i] == num[i+1] == num[i+2]`.

**Step C: Keep track of the maximum good integer found**

* Compare the current "good" substring to the largest found so far.
* Since they’re numeric strings of equal length, a lexicographical comparison works.

**Step D: Return result**

* If we found at least one good integer, return the largest.
* If none found, return `""`.

---

### **4. Complexity analysis**

* **Time:** O(n) — check every substring of length 3 once.
* **Space:** O(1) — only storing the best substring found.

---

### **5. Example walk-through**

For `num = "6777133339"`:

* Substrings: `"677"`, `"777"`, `"771"`, `"713"`, `"133"`, `"333"`, `"333"`, `"339"`.
* Good integers found: `"777"`, `"333"`.
* Largest is `"777"` → return `"777"`.

---
