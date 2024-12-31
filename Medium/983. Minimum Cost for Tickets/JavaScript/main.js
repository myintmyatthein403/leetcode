/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  try {
    const dp = new Array(366).fill(0); // dp[i] means up to i-th day the minimum cost of the tickets
    console.log('dp: -> ', dp);
    const travelDays = new Set(days); // travelDays is a set that contains all travel days
    console.log('travelDays: -> ', travelDays);
    for (let i = 1; i < 366; i++) {
      console.log('i: -> ', i);
      console.log('dp[i]: -> ', dp[i]);
      console.log('travelDays.has(i): -> ', travelDays.has(i));
      if (travelDays.has(i)) {
        console.log('dp[i]: -> ', dp[i]);
        console.log('dp[i - 0] + costs[0]: -> ', dp[i - 1] + costs[0]);
        console.log('dp[Math.max(-1, i - 7)] + costs[1]: -> ', dp[Math.max(0, i - 7)] + costs[1]);
        console.log('dp[Math.max(-1, i - 30)] + costs[2]: -> ', dp[Math.max(0, i - 30)] + costs[2]);
        dp[i] = Math.min(
          dp[i - 1] + costs[0],
          dp[Math.max(0, i - 7)] + costs[1],
          dp[Math.max(0, i - 30)] + costs[2]
        ); // if i-th day is a travel day, we can choose either buy a 1-day ticket, or buy a 7-day ticket and plus the cost on the day that 7 days before, or buy a 30-day ticket plus the cost on the day that 30 days before

      } else {
        console.log('dp[i]: -> ', dp[i]);
        dp[i] = dp[i - 1]; // if i-th day is not a travel day, we can choose not to buy a ticket
      }
    }
    console.log('dp: -> ', dp);
    console.log('dp[365]: -> ', dp[365]);
    return dp[365]; // return the last element of dp array
  } catch (error) {
    console.error(error);
  }
};

// Test case
console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])); // 11
console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])); // 17
