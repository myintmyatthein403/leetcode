### Real World Example 1: Analyzing Stock Prices

Imagine you have an array representing the stock prices of a company over several days. You want to identify the number of "bad pairs" of days where the difference in stock prices does not match the difference in days. This can help in identifying unusual patterns or anomalies in stock price movements.

```javascript
let stockPrices = [100, 102, 101, 105, 107];
let badPairs = countBadPairs(stockPrices);
console.log(badPairs); // Output: Number of bad pairs
```

### Real World Example 2: Examining Temperature Readings

Consider an array of temperature readings taken at regular intervals throughout the day. You want to find the number of "bad pairs" of readings where the difference in temperatures does not match the difference in time intervals. This can be useful for detecting faulty sensors or irregular temperature changes.

```javascript
let temperatures = [30, 32, 31, 35, 37];
let badPairs = countBadPairs(temperatures);
console.log(badPairs); // Output: Number of bad pairs
```

In both examples, the `countBadPairs` function helps identify pairs of data points that do not follow the expected pattern, which can be crucial for further analysis and decision-making.
