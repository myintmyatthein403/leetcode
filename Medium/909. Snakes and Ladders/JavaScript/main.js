/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;

  // Convert square number to (row, col) on the board
  function getCoordinates(s) {
    let quot = Math.floor((s - 1) / n);
    let rem = (s - 1) % n;
    let row = n - 1 - quot;
    let col = quot % 2 === 0 ? rem : n - 1 - rem;
    return [row, col];
  }

  const visited = new Array(n * n + 1).fill(false);
  const queue = [[1, 0]]; // [square, number of moves]

  while (queue.length > 0) {
    const [curr, moves] = queue.shift();

    if (curr === n * n) return moves;

    for (let i = 1; i <= 6 && curr + i <= n * n; i++) {
      let next = curr + i;
      const [r, c] = getCoordinates(next);

      if (board[r][c] !== -1) {
        next = board[r][c];
      }

      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, moves + 1]);
      }
    }
  }

  return -1; // Not reachable
};
