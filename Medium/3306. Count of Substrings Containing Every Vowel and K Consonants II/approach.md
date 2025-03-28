### Approach Explanation:

The goal of the problem is to count how many valid substrings of a given string `word` contain **exactly** `k` consonants and all 5 vowels ('a', 'e', 'i', 'o', 'u'). Let's break down the approach step by step.

#### Key Concepts:
1. **Sliding Window**: This technique involves using two pointers (let's call them `start` and `end`) to define a "window" within the string. The `end` pointer expands the window by moving forward through the string, and the `start` pointer shrinks the window when certain conditions are met.
2. **Vowel and Consonant Counts**: We need to track the number of vowels and consonants in the current window. For each valid substring, we need to ensure there are **exactly `k` consonants** and **all 5 vowels**.
3. **Optimization with Next Consonant**: To avoid unnecessary computations, we precompute the next consonant for each position in the string, so that we can quickly jump to the next consonant when needed.

#### Detailed Approach:

1. **Sliding Window**:
   - We use two pointers, `start` and `end`, to represent the sliding window. Initially, both pointers are at the beginning of the string.
   - The `end` pointer is used to expand the window. It moves through the string from left to right, one character at a time.
   - The `start` pointer is used to shrink the window when certain conditions are violated (i.e., when there are more than `k` consonants).
   
2. **Character Classification (Vowel vs Consonant)**:
   - For each character at position `end`, we check if it’s a vowel or consonant.
   - If it's a vowel, we increase the count of that vowel in a dictionary `vowel_count`.
   - If it's a consonant, we increase the `consonant_count`.
   
3. **Handling the Window**:
   - We continue to expand the window by moving `end` to the right and updating the `vowel_count` and `consonant_count`.
   - If the number of consonants exceeds `k`, we shrink the window by moving `start` to the right, removing characters from the window until the consonant count is reduced to `k` or fewer.
   
4. **Valid Substring Check**:
   - Once we have a valid window where the number of consonants is exactly `k`, we check if we have all 5 vowels in the window.
   - If both conditions are met, we count this substring as valid.
   - The number of valid substrings is determined by the number of substrings that can be formed starting from `start` to `end` (all substrings between `start` and `end` are valid).

5. **Efficient Jump with Next Consonant Array**:
   - To speed up the calculation, we precompute an array `next_consonant` that stores the index of the next consonant for each position in the string. This helps in quickly determining how many valid substrings can be formed once we find a valid window.
   
6. **Final Count**:
   - For every valid window (where consonant count is `k` and all vowels are present), we add the number of valid substrings that can start from the current `start` position and end at the current `end` position.

#### Summary of Steps:
1. Initialize variables:
   - `vowel_count`: to store counts of vowels in the window.
   - `consonant_count`: to store the count of consonants in the window.
   - `next_consonant`: to store the index of the next consonant for each position.
2. Expand the window by moving the `end` pointer.
3. Adjust the `start` pointer to maintain the window's validity (consonant count <= `k`).
4. Check if the window contains all 5 vowels and exactly `k` consonants.
5. Count valid substrings and return the result.

This method ensures that we process each character efficiently, resulting in a solution that works in linear time relative to the size of the input string, `O(n)`. The sliding window ensures we only look at each character a constant number of times.
