Sure! Here are **two real-world scenarios** where a function like `countGoodNumbers` could be practically useful:

---

### 🔐 1. **Secure PIN/OTP Code Generation System**

**Scenario:**  
A banking application wants to generate **secure PIN codes** that follow certain rules:
- Every digit at an even position must be an even number for easy detection and validation.
- Every digit at an odd position must be a prime digit to increase entropy (unpredictability).

**Why it helps:**  
The function helps calculate how many **valid PIN combinations** can be generated for a given length, ensuring security through enforced patterns.

**Example:**  
- Length = 6-digit OTP  
- `countGoodNumbers(6)` tells how many secure OTPs can exist under these rules.  
  That can then guide generation limits or inform brute-force resistance metrics.

---

### 🎮 2. **Pattern-Locked Levels in a Game**

**Scenario:**  
In a puzzle or logic-based game, levels are locked with codes that must follow a pattern:
- Even indices = doors that need even-numbered keys.
- Odd indices = doors that need prime-numbered keys.

**Why it helps:**  
Designers can use `countGoodNumbers(n)` to determine how many distinct level codes can be designed for level lengths of `n`, maintaining a balance between challenge and uniqueness.

**Example:**  
- For a 4-step challenge sequence, `countGoodNumbers(4)` = 400 combinations → enough to create unique levels without repetition.

