/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const MOD = 1e9 + 7;
  let countOdd = 0, countEven = 1;
  let prefixSum = 0, result = 0;

  for (let num of arr) {
    prefixSum += num;

    if (prefixSum % 2 === 0) {
      result = (result + countOdd) % MOD;
      countEven++;
    } else {
      result = (result + countEven) % MOD;
      countOdd++;
    }
  }

  return result;
};
