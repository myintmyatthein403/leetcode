/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  const map = new Map(); // key: product, value: count
  let res = 0; // result

  // calculate all possible products
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const product = nums[i] * nums[j];
      map.set(product, (map.get(product) || 0) + 1);
    }
  }

  for (const [key, value] of map.entries()) {
    if (value > 1) {
      res += (value * (value - 1)) / 2;
    }
  }
  return res * 8; // 8 permutations for each product
};
