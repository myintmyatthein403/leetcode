### Approach:

1. **Generate Prime Numbers in the Range:**  
   - Use the **Sieve of Eratosthenes** (or a simple primality test) to identify all prime numbers between `left` and `right`.
   - Store these primes in a list.

2. **Find the Closest Prime Pair:**  
   - Iterate through the list of prime numbers and track the minimum difference between consecutive primes.
   - Maintain variables to store the pair with the smallest difference.

3. **Return the Result:**  
   - If a valid pair is found, return `[num1, num2]`.
   - If no such pair exists, return `[-1, -1]`.

### Explanation:

- The sieve method efficiently finds all primes in the range, making it faster than checking each number individually.
- By storing primes in a list, we only need a **single pass** to determine the closest pair, making the approach **efficient**.
- The problem constraints suggest a **greedy approach**, always selecting the first valid minimum pair found.

This ensures an optimal **O(N log log N) complexity** with the sieve method and **O(N) for the search**, which is efficient for larger values of `right`.
