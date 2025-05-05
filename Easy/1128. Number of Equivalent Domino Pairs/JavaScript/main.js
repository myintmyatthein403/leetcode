/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const map = new Array(100).fill(0); // since values are in range 1-9, (min*10 + max) is in range [11,99]
  let count = 0;

  for (const [a, b] of dominoes) {
    const key = a < b ? a * 10 + b : b * 10 + a; // normalize
    count += map[key]; // if same domino seen before, add how many times it appeared
    map[key]++; // increment the count for this normalized domino
  }

  return count;
};
