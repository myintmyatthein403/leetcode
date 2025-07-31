/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
  const result = new Set();  // to store all distinct OR results
  let prev = new Set();      // OR results ending at previous index

  for (let num of arr) {
    const curr = new Set();
    curr.add(num);

    for (let val of prev) {
      curr.add(val | num);
    }

    for (let val of curr) {
      result.add(val);
    }

    prev = curr; // move to next index
  }

  return result.size;
};
