from typing import List

class Solution:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        # Step 1: Sieve of Eratosthenes to find all primes up to 'right'
        def sieve(limit):
            is_prime = [True] * (limit + 1)
            is_prime[0] = is_prime[1] = False  # 0 and 1 are not primes
            
            for i in range(2, int(limit**0.5) + 1):
                if is_prime[i]:  # Mark multiples of prime numbers as False
                    for j in range(i * i, limit + 1, i):
                        is_prime[j] = False
            return is_prime

        is_prime = sieve(right)
        
        # Step 2: Collect primes within the given range
        primes = [i for i in range(left, right + 1) if is_prime[i]]

        # Step 3: Find the closest prime pair
        if len(primes) < 2:
            return [-1, -1]

        min_diff = float('inf')
        result = [-1, -1]

        for i in range(len(primes) - 1):
            diff = primes[i+1] - primes[i]
            if diff < min_diff:
                min_diff = diff
                result = [primes[i], primes[i+1]]

        return result
