class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._sinkDown();
    }
    return top;
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx][0] <= element[0]) break;
      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = element;
  }

  _sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length && this.heap[leftIdx][0] < element[0]) {
        swap = leftIdx;
      }
      if (rightIdx < length && this.heap[rightIdx][0] < (swap === null ? element[0] : this.heap[leftIdx][0])) {
        swap = rightIdx;
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      idx = swap;
    }
    this.heap[idx] = element;
  }
}

var minTimeToReach = function (moveTime) {
  const n = moveTime.length;
  const m = moveTime[0].length;
  const heap = new MinHeap();

  // [time, x, y, moveCount]
  heap.push([0, 0, 0, 0]);

  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => [Infinity, Infinity])
  );

  const dirs = [
    [-1, 0], [1, 0],
    [0, -1], [0, 1]
  ];

  while (heap.size()) {
    const [time, x, y, moveCount] = heap.pop();
    const parity = moveCount % 2;

    if (visited[x][y][parity] <= time) continue;
    visited[x][y][parity] = time;

    if (x === n - 1 && y === m - 1) return time;

    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      const duration = parity === 0 ? 1 : 2;
      const start = Math.max(time, moveTime[nx][ny]);
      const arrival = start + duration;

      heap.push([arrival, nx, ny, moveCount + 1]);
    }
  }

  return -1;
};
