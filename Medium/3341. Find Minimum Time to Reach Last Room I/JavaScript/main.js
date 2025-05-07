/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
  const n = moveTime.length;
  const m = moveTime[0].length;

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const heap = [[0, 0, 0]]; // [time, x, y]
  const seen = Array.from({ length: n }, () => Array(m).fill(Infinity));
  seen[0][0] = 0;

  while (heap.length > 0) {
    heap.sort((a, b) => a[0] - b[0]); // naive min-heap
    const [time, x, y] = heap.shift();

    if (x === n - 1 && y === m - 1) return time;

    for (const [dx, dy] of directions) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      const waitTime = Math.max(time, moveTime[nx][ny]) + 1;

      if (waitTime < seen[nx][ny]) {
        seen[nx][ny] = waitTime;
        heap.push([waitTime, nx, ny]);
      }
    }
  }

  return -1;
};
