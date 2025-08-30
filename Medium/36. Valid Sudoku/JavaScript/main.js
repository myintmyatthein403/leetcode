/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // Use sets to track seen numbers in rows, cols, and boxes
  let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let val = board[r][c];

      if (val === ".") continue; // skip empty cells

      // Check row
      if (rows[r].has(val)) return false;
      rows[r].add(val);

      // Check column
      if (cols[c].has(val)) return false;
      cols[c].add(val);

      // Check 3x3 sub-box
      let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (boxes[boxIndex].has(val)) return false;
      boxes[boxIndex].add(val);
    }
  }

  return true;
};
