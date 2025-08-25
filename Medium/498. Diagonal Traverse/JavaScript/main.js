/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let m = mat.length, n = mat[0].length;
  let result = [];

  // There are m + n - 1 diagonals
  for (let d = 0; d < m + n - 1; d++) {
    let temp = [];

    // Find row range for this diagonal
    let rStart = Math.max(0, d - (n - 1));
    let rEnd = Math.min(m - 1, d);

    for (let r = rStart; r <= rEnd; r++) {
      let c = d - r;
      temp.push(mat[r][c]);
    }

    // Reverse if diagonal index is even
    if (d % 2 === 0) {
      temp.reverse();
    }

    result.push(...temp);
  }

  return result;
};
