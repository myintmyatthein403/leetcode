/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  const n = s.length;
  const suffixMin = Array(n).fill('');

  // Step 1: Precompute the suffix minimum characters
  suffixMin[n - 1] = s[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = s[i] < suffixMin[i + 1] ? s[i] : suffixMin[i + 1];
  }

  const t = [];      // The stack holding characters
  const result = []; // Final result

  let i = 0;
  while (i < n) {
    // Push character from s into t
    t.push(s[i]);

    // While top of t <= smallest remaining character in s, pop and write
    while (t.length && (i === n - 1 || t[t.length - 1] <= suffixMin[i + 1])) {
      result.push(t.pop());
    }

    i++;
  }

  // Empty remaining characters in t
  while (t.length) {
    result.push(t.pop());
  }

  return result.join('');
};
