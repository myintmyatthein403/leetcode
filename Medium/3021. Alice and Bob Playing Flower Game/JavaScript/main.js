/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function (n, m) {
  let oddsN = Math.floor((n + 1) / 2);
  let evensN = Math.floor(n / 2);
  let oddsM = Math.floor((m + 1) / 2);
  let evensM = Math.floor(m / 2);

  return oddsN * evensM + evensN * oddsM;
};
