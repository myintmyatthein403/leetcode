To solve the Coin Change II problem, you can use a dynamic programming approach. Here's a step-by-step explanation:

1. **Define the DP Array**: Create a DP array `dp` where `dp[i]` represents the number of ways to make up amount `i` using the given coins.

2. **Initialize the DP Array**: Initialize `dp[0]` to 1 because there is one way to make the amount 0, which is to use no coins.

3. **Update the DP Array**: Iterate over each coin and for each coin, update the DP array for all amounts from the coin's value to the target amount. For each amount `i`, add the number of ways to make up the amount `i - coin` to `dp[i]`.

4. **Return the Result**: The value `dp[amount]` will contain the number of ways to make up the given amount using the available coins.

Here is the Python code implementing this approach:

```python
def change(amount, coins):
    dp = [0] * (amount + 1)
    dp[0] = 1
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]
    
    return dp[amount]
```

### Example Usage
```python
amount = 5
coins = [1, 2, 5]
print(change(amount, coins))  # Output: 4
```

This code will correctly compute the number of combinations to make up the given amount using the provided coins.
