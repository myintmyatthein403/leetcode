function findTheDifference(s: string, t: string): string {
  let result: string = '';
  let sArr: string[] = s.split('');
  let tArr: string[] = t.split('');
  sArr.sort();
  tArr.sort();
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      result = tArr[i];
      break;
    }
  }
  if (result === '') {
    result = tArr[tArr.length - 1];
  }
  return result;
}

console.log(findTheDifference('abcd', 'abcde')); // e
console.log(findTheDifference('', 'y')); // y
console.log(findTheDifference('a', 'aa')); // a
