/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let punishmentNumber = 0;

  for (let i = 1; i <= n; i++) {
    const square = i * i;
    if (canBePartitioned(square, i)) {
      punishmentNumber += square;
    }
  }

  return punishmentNumber;
};

function canBePartitioned(num, target) {
  const str = num.toString();
  const len = str.length;

  function dfs(index, currentSum) {
    if (index === len) {
      return currentSum === target;
    }

    let number = 0;
    for (let i = index; i < len; i++) {
      number = number * 10 + parseInt(str[i], 10);
      if (dfs(i + 1, currentSum + number)) {
        return true;
      }
    }
    return false;
  }

  return dfs(0, 0);
}
