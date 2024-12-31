### Example 1: Summing Up Scores
Suppose you have an array of scores from different games, and you want to use the `ArrayWrapper` class to easily sum up the total score and display it as a string.

```javascript
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((acc, val) => acc + val, 0);
  }

  toString() {
    return `[${this.nums.join(',')}]`;
  }
}

// Example usage
const scores = new ArrayWrapper([10, 20, 30, 40]);
console.log(scores.valueOf()); // Output: 100
console.log(scores.toString()); // Output: [10,20,30,40]
```

### Example 2: Managing Product Prices
Imagine you have an array of product prices, and you want to use the `ArrayWrapper` class to calculate the total price and display the prices as a string.

```javascript
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((acc, val) => acc + val, 0);
  }

  toString() {
    return `[${this.nums.join(',')}]`;
  }
}

// Example usage
const prices = new ArrayWrapper([19.99, 29.99, 4.99, 9.99]);
console.log(prices.valueOf()); // Output: 64.96
console.log(prices.toString()); // Output: [19.99,29.99,4.99,9.99]
```

These examples demonstrate how the `ArrayWrapper` class can be used to manage and manipulate arrays of numbers in real-world scenarios, such as summing up scores or calculating total prices.

