/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let result = [];
  for (let i = 0; i < boxes.length; i++) {
    let count = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] === "1") {
        count += Math.abs(i - j);
      }
    }
    result.push(count);
  }
  return result;
};

// Test Case
console.log(minOperations("110")); // [1, 1, 3]
console.log(minOperations("001011")); // [11, 8, 5, 4, 3, 4]
