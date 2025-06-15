/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  const numStr = num.toString();

  // 1. Maximize: Replace first non-9 digit with 9
  let maxNumStr = numStr;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== '9') {
      const toReplace = numStr[i];
      maxNumStr = numStr.split('').map(ch => ch === toReplace ? '9' : ch).join('');
      break;
    }
  }

  // 2. Minimize: 
  let minNumStr = numStr;
  if (numStr[0] !== '1') {
    // Replace first digit (not 1) with 1
    const toReplace = numStr[0];
    minNumStr = numStr.split('').map(ch => ch === toReplace ? '1' : ch).join('');
  } else {
    // Find first non-0, non-1 digit and replace it with 0
    for (let i = 1; i < numStr.length; i++) {
      if (numStr[i] !== '0' && numStr[i] !== '1') {
        const toReplace = numStr[i];
        minNumStr = numStr.split('').map(ch => ch === toReplace ? '0' : ch).join('');
        break;
      }
    }
  }

  const maxNum = parseInt(maxNumStr, 10);
  const minNum = parseInt(minNumStr, 10);

  return maxNum - minNum;
};
