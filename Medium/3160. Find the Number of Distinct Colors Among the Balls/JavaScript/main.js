/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const ballColors = new Map();
  const colorCount = new Map();
  const distinctColors = new Set();
  const result = [];

  for (const [x, y] of queries) {
    if (ballColors.has(x)) {
      const oldColor = ballColors.get(x);
      colorCount.set(oldColor, colorCount.get(oldColor) - 1);
      if (colorCount.get(oldColor) === 0) {
        distinctColors.delete(oldColor);
      }
    }
    ballColors.set(x, y);
    colorCount.set(y, (colorCount.get(y) || 0) + 1);
    distinctColors.add(y);
    result.push(distinctColors.size);
  }

  return result;
};
