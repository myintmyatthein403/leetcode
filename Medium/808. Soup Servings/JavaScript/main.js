/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  // Large n cutoff — probability approaches 1
  if (n > 4800) return 1.0;

  // Convert to units of 25 mL
  const m = Math.ceil(n / 25);

  const memo = new Map();

  const dp = (a, b) => {
    if (a <= 0 && b <= 0) return 0.5; // both empty
    if (a <= 0) return 1.0;           // A empty first
    if (b <= 0) return 0.0;           // B empty first

    const key = `${a},${b}`;
    if (memo.has(key)) return memo.get(key);

    const res = 0.25 * (
      dp(a - 4, b) +
      dp(a - 3, b - 1) +
      dp(a - 2, b - 2) +
      dp(a - 1, b - 3)
    );

    memo.set(key, res);
    return res;
  };

  return dp(m, m);
};
