/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
    } else if (i === 1) {
      result.push([1, 1]);
    } else {
      let newArr = [];
      let lastArr = result[result.length - 1];

      // Array ရဲ့အစနဲ့အဆုံးကို 1 ထည့်ဖို့
      newArr.push(1);

      // ယခင် row က နံပါတ်တွေကို ပေါင်းပြီး ထည့်ဖို့
      for (let j = 0; j < lastArr.length - 1; j++) {
        newArr.push(lastArr[j] + lastArr[j + 1]);
      }

      // Array ရဲ့အဆုံးကို 1 ထည့်ဖို့
      newArr.push(1);

      result.push(newArr);
    }
  }

  return result;
};

console.log(generate(3));
// Expected Output: [[1], [1, 1], [1, 2, 1]]

console.log(generate(5));
// Expected Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
//
//
// better 
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let row = 0; row < numRows; row++) {
    const currentRow = new Array(row + 1).fill(1); // Initialize row with 1s

    for (let col = 1; col < row; col++) {
      // Fill inner elements using previous row
      currentRow[col] = result[row - 1][col - 1] + result[row - 1][col];
    }

    result.push(currentRow); // Add the row to the result
  }

  return result;
};

