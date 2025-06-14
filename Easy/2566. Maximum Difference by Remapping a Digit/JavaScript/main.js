/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  const strNum = num.toString();
  let maxVal = num;
  let minVal = num;

  // Try remapping each digit to '9' to get max value
  for (let d = 0; d <= 9; d++) {
    const fromDigit = d.toString();
    if (strNum.includes(fromDigit)) {
      const remapped = strNum.replaceAll(fromDigit, '9');
      maxVal = Math.max(maxVal, parseInt(remapped));
    }
  }

  // Try remapping each digit to '0' to get min value
  for (let d = 0; d <= 9; d++) {
    const fromDigit = d.toString();
    if (strNum.includes(fromDigit)) {
      const remapped = strNum.replaceAll(fromDigit, '0');
      minVal = Math.min(minVal, parseInt(remapped));
    }
  }

  return maxVal - minVal;
};
