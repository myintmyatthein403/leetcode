You are given a  **0-indexed**  2D integer matrix  `grid`  of size  `n * n`  with values in the range  `[1, n2]`. Each integer appears  **exactly once**  except  `a`  which appears  **twice**  and  `b`  which is  **missing**. The task is to find the repeating and missing numbers  `a`  and  `b`.

Return  _a  **0-indexed** integer array_ `ans` _of size_ `2` _where_ `ans[0]` _equals to_ `a` _and_ `ans[1]` _equals to_ `b`_._

**Example 1:**

**Input:** grid = [[1,3],[2,2]]
**Output:** [2,4]
**Explanation:** Number 2 is repeated and number 4 is missing so the answer is [2,4].

**Example 2:**

**Input:** grid = [[9,1,7],[8,9,2],[3,4,6]]
**Output:** [9,5]
**Explanation:** Number 9 is repeated and number 5 is missing so the answer is [9,5].
