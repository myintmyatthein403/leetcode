/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  if (A.length === 0 || B.length === 0) {
    return [];
  }
  if (A.length !== B.length) {
    return [];
  }
  let result = [];
  for (let i = 0; i < A.length; i++) {
    let A1 = A.slice(0, i + 1);
    let B1 = B.slice(0, i + 1);
    let common = A1.filter((value) => B1.includes(value));
    result.push(common.length)
  }
  return result;
}

// Test Case
console.log(findThePrefixCommonArray([3, 1, 2, 4], [1, 3, 2, 4])); // [0, 2, 3, 4]


/* refactor version */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  if (A.length === 0 || B.length === 0 || A.length !== B.length) {
    return [];
  }

  let result = [];
  let setA = new Set();
  let setB = new Set();
  let commonCount = 0;

  for (let i = 0; i < A.length; i++) {
    setA.add(A[i]);
    setB.add(B[i]);

    if (setB.has(A[i])) {
      commonCount++;
    }
    if (setA.has(B[i])) {
      commonCount++;
    }
    if (A[i] === B[i]) {
      commonCount--; // Avoid double counting if A[i] and B[i] are the same
    }

    result.push(commonCount);
  }

  return result;
}

/* 
 * ### improvements and best practices:
1. **early return**: the function checks if the lengths of the arrays are zero or not equal at the beginning and returns an empty array immediately if true. this avoids unnecessary computation.
2. **use of sets**: using sets to keep track of elements seen so far in both arrays allows for o(1) average time complexity for membership checks, making the solution more efficient.
3. **single loop**: the function uses a single loop to iterate through the arrays, reducing the time complexity to o(n).
4. **avoiding double counting**: the function checks if the current elements of both arrays are the same and adjusts the common count to avoid double counting.
5. **memory efficiency**: the use of sets and a single result array ensures that memory usage is kept to a minimum.

these changes improve both the runtime and memory efficiency of the function.
*/
