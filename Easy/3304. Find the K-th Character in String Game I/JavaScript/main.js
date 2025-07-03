const kthCharacter = (k) => {
  let res = 0;
  let shift;

  const leadingZeros = (val) => {
    let binStr = val.toString(2);
    return 32 - binStr.length;
  };

  while (k !== 1) {
    shift = 31 - leadingZeros(k);
    if (Math.pow(2, shift) === k) {
      shift--;
    }
    k -= Math.pow(2, shift);
    res++;
  }

  return String.fromCharCode(97 + res);
};
