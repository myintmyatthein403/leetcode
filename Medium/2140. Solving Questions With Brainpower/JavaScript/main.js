/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  let n = questions.length;
  let dp = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    let [points, brainpower] = questions[i];

    // If solving this question, move to i + brainpower + 1
    let nextIndex = i + brainpower + 1;
    let solve = points + (nextIndex < n ? dp[nextIndex] : 0);

    // Skip this question
    let skip = dp[i + 1];

    // Take the maximum of both choices
    dp[i] = Math.max(solve, skip);
  }

  return dp[0]; // Maximum points starting from question 0
};
