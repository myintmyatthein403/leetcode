class MinHeap {
  constructor() {
    this.heap = [];
    this.indexSet = new Set();  // Track valid indices for quick lookup
  }

  insert(val) {
    this.heap.push(val);
    this.indexSet.add(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 1) {
      let val = this.heap.pop();
      this.indexSet.delete(val);
      return val;
    }
    const min = this.heap[0];
    this.indexSet.delete(min);
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;

      if (leftChildIndex < length) {
        let leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        let rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < this.heap[swap])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }

  peek() {
    while (this.heap.length > 0 && !this.indexSet.has(this.heap[0])) {
      this.extractMin(); // Remove outdated min values
    }
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.indexSet.size;
  }

  remove(val) {
    if (this.indexSet.has(val)) {
      this.indexSet.delete(val);
    }
  }
}

var NumberContainers = function () {
  this.indexToNumber = new Map();  // Maps index -> number
  this.numberToIndices = new Map(); // Maps number -> MinHeap of indices
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
  if (this.indexToNumber.has(index)) {
    let oldNumber = this.indexToNumber.get(index);
    if (oldNumber !== number) {
      let minHeap = this.numberToIndices.get(oldNumber);
      if (minHeap) {
        minHeap.remove(index);
        if (minHeap.size() === 0) {
          this.numberToIndices.delete(oldNumber);
        }
      }
    }
  }
  this.indexToNumber.set(index, number);
  if (!this.numberToIndices.has(number)) {
    this.numberToIndices.set(number, new MinHeap());
  }
  this.numberToIndices.get(number).insert(index);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
  if (this.numberToIndices.has(number) && this.numberToIndices.get(number).size() > 0) {
    return this.numberToIndices.get(number).peek() ?? -1;
  }
  return -1;
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
