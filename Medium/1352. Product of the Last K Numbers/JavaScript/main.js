var ProductOfNumbers = function () {
  this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.nums = [];
  } else {
    if (this.nums.length === 0) {
      this.nums.push(num);
    } else {
      this.nums.push(this.nums[this.nums.length - 1] * num);
    }
  }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  if (k > this.nums.length) {
    return 0;
  }
  if (k === this.nums.length) {
    return this.nums[this.nums.length - 1];
  }
  return this.nums[this.nums.length - 1] / this.nums[this.nums.length - k - 1];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

