function findTheDifference(s, t) {
    var result = '';
    var sArr = s.split('');
    var tArr = t.split('');
    sArr.sort();
    tArr.sort();
    for (var i = 0; i < sArr.length; i++) {
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
;
console.log(findTheDifference('abcd', 'abcde')); // e
console.log(findTheDifference('', 'y')); // y
console.log(findTheDifference('a', 'aa')); // a
