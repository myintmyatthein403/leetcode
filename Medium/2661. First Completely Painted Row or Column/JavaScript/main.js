/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  let m = mat.length;
  let n = mat[0].length;
  let rowCount = new Array(m).fill(0);
  let colCount = new Array(n).fill(0);
  let position = {};

  // Map each value in mat to its (row, col) position
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      position[mat[i][j]] = [i, j];
    }
  }

  // Iterate through arr and paint the cells
  for (let index = 0; index < arr.length; index++) {
    let value = arr[index];
    let [row, col] = position[value];
    rowCount[row]++;
    colCount[col]++;

    // Check if the current row or column is completely painted
    if (rowCount[row] === n || colCount[col] === m) {
      return index;
    }
  }

  return -1; // In case no row or column is completely painted
};
