Here are two real-world examples where the Coin Change II algorithm can be applied:

### Example 1: Vending Machine Change
A vending machine needs to provide change for a given amount using a limited set of coin denominations. The machine needs to calculate the number of ways it can provide the exact change.

```javascript
function vendingMachineChange(amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}

let amount = 10;
let coins = [1, 2, 5];
console.log(vendingMachineChange(amount, coins)); // Output: 10
```

### Example 2: Making a Donation
A charity organization wants to know how many ways they can collect a specific donation amount using different denominations of bills and coins they accept.

```javascript
function donationWays(amount, denominations) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let denomination of denominations) {
    for (let i = denomination; i <= amount; i++) {
      dp[i] += dp[i - denomination];
    }
  }

  return dp[amount];
}

let donationAmount = 7;
let denominations = [1, 2, 3];
console.log(donationWays(donationAmount, denominations)); // Output: 8
```

In both examples, the algorithm calculates the number of ways to make up a specific amount using the given denominations, which can be useful in various financial and logistical applications.

