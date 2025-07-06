var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.freqMap2 = new Map();

  for (let num of nums2) {
    this.freqMap2.set(num, (this.freqMap2.get(num) || 0) + 1);
  }
};

FindSumPairs.prototype.add = function (index, val) {
  const oldVal = this.nums2[index];
  const newVal = oldVal + val;

  // Update frequency map
  this.freqMap2.set(oldVal, this.freqMap2.get(oldVal) - 1);
  if (this.freqMap2.get(oldVal) === 0) {
    this.freqMap2.delete(oldVal);
  }

  this.freqMap2.set(newVal, (this.freqMap2.get(newVal) || 0) + 1);
  this.nums2[index] = newVal;
};

FindSumPairs.prototype.count = function (tot) {
  let count = 0;

  for (let num of this.nums1) {
    const complement = tot - num;
    if (this.freqMap2.has(complement)) {
      count += this.freqMap2.get(complement);
    }
  }

  return count;
};
