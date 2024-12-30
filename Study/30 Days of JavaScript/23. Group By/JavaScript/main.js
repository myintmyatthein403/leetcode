/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce(function (acc, val) {
    var key = typeof fn === 'function' ? fn(val) : val[fn];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(val);
    return acc;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
