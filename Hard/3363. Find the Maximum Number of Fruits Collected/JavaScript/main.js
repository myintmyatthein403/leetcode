var maxCollectedFruits = function (fruits) {
  const n = fruits.length;
  let ans = 0;
  for (let i = 0; i < n; ++i) ans += fruits[i][i];

  function dp() {
    let prev = Array(n).fill(-Infinity);
    let curr = Array(n).fill(-Infinity);
    prev[n - 1] = fruits[0][n - 1];

    for (let i = 1; i < n - 1; ++i) {
      for (let j = Math.max(n - 1 - i, i + 1); j < n; ++j) {
        let best = prev[j];
        if (j - 1 >= 0) {
          best = Math.max(best, prev[j - 1]);
        }
        if (j + 1 < n) {
          best = Math.max(best, prev[j + 1]);
        }
        curr[j] = best + fruits[i][j];
      }
      [prev, curr] = [curr, prev];
    }
    return prev[n - 1];
  }

  ans += dp();
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      [fruits[i][j], fruits[j][i]] = [fruits[j][i], fruits[i][j]];
    }
  }

  ans += dp();
  return ans;
};
