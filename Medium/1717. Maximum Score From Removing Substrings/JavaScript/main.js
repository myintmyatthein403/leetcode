/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let total = 0;

  // Decide order: which substring gives more points?
  const firstPair = x >= y ? ['a', 'b', x] : ['b', 'a', y];  // [char1,char2,points]
  const secondPair = x >= y ? ['b', 'a', y] : ['a', 'b', x];

  // Helper: remove occurrences of pattern [p0,p1] using stack
  const removePair = ([p0, p1, pts], str) => {
    const stack = [];
    let gained = 0;

    for (const ch of str) {
      if (ch === p1 && stack.length > 0 && stack[stack.length - 1] === p0) {
        // Found p0+p1, remove and add points
        stack.pop();
        gained += pts;
      } else {
        stack.push(ch);
      }
    }

    return [gained, stack.join('')];
  };

  // First pass: remove all of the higher-value pair
  let res = removePair(firstPair, s);
  total += res[0];

  // Second pass: remove occurrences of the other pair
  res = removePair(secondPair, res[1]);
  total += res[0];

  return total;
};
