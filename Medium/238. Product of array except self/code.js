/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    var product = 1;
    for (var j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    result.push(product);
  }
  return result;
};

// O(n) solution
var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  // Compute the left products
  let leftProduct = 1;
  for (let i = 0; i < length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Compute the right products and multiply them with the left products
  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};


// For Example
console.log(productExceptSelf([1, 2, 3, 4])) // Output: [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // Output: [0,0,9,0,0]
