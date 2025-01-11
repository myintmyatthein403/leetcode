/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) return false;
  if (s.length === k) return true;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  let odd = 0;
  for (let value of map.values()) {
    if (value % 2 !== 0) {
      odd++;
    }
  }
  return odd <= k;
};
