/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
  let maxDiagonalSquared = 0;
  let maxArea = 0;

  for (let [length, width] of dimensions) {
    let dSquared = length * length + width * width;
    let area = length * width;

    if (dSquared > maxDiagonalSquared) {
      maxDiagonalSquared = dSquared;
      maxArea = area;
    } else if (dSquared === maxDiagonalSquared) {
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};
