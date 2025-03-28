/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  const result = new Array(queries.length).fill(0);
  const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const sortedQueries = queries.map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0]);

  const minHeap = new MinPriorityQueues({ priority: (element) => element[0] });
  const visited = Array.from({ length: rowCount }, () => new Array(colCount).fill(false));
  let totalPoints = 0;

  minHeap.enqueue([grid[0][0], 0, 0]);
  visited[0][0] = true;

  for (const [queryValue, queryIndex] of sortedQueries) {
    while (!minHeap.isEmpty() && minHeap.peek()[0] < queryValue) {
      const [cellValue, currentRow, currentCol] = minHeap.dequeue().element;
      totalPoints++;

      for (const [rowOffset, colOffset] of DIRECTIONS) {
        const newRow = currentRow + rowOffset;
        const newCol = currentCol + colOffset;

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < rowCount &&
          newCol < colCount &&
          !visited[newRow][newCol]
        ) {
          minHeap.enqueue([grid[newRow][newCol], newRow, newCol]);
          visited[newRow][newCol] = true;
        }
      }
    }
    result[queryIndex] = totalPoints;
  }

  return result;
};

// MinPriorityQueue implementation
class MinPriorityQueues {
  constructor(options = {}) {
    this.compare = options.priority ? (a, b) => options.priority(a) - options.priority(b) : (a, b) => a - b;
    this.heap = [];
  }

  enqueue(element) {
    this.heap.push(element);
    this.siftUp();
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > 0) {
      this.swap(0, bottom);
    }
    this.heap.pop();
    this.siftDown();
    return { element: poppedValue };
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  siftUp() {
    let node = this.size() - 1;
    while (node > 0 && this.compare(this.heap[node], this.heap[Math.floor((node - 1) / 2)]) < 0) {
      this.swap(node, Math.floor((node - 1) / 2));
      node = Math.floor((node - 1) / 2);
    }
  }

  siftDown() {
    let node = 0;
    while (
      (node * 2 + 1 < this.size() && this.compare(this.heap[node * 2 + 1], this.heap[node]) < 0) ||
      (node * 2 + 2 < this.size() && this.compare(this.heap[node * 2 + 2], this.heap[node]) < 0)
    ) {
      let minChild = node * 2 + 1;
      if (node * 2 + 2 < this.size() && this.compare(this.heap[node * 2 + 2], this.heap[node * 2 + 1]) < 0) {
        minChild = node * 2 + 2;
      }
      this.swap(node, minChild);
      node = minChild;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
