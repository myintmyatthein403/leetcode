/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};
  let callCount = 0;
  function memoizedFunction(...args) {
    let key = JSON.stringify(args);
    console.log('key -> ', key);
    if (cache[key]) {
      console.log('cache[key) -> ', cache[key]);
      return cache[key];
    }
    callCount++;
    let result = fn(...args);
    console.log('result -> ', result);
    cache[key] = result;
    console.log('cache -> ', cache);
    return result;
  }

  memoizedFunction.getCallCount = function () {
    return callCount;
  };

  return memoizedFunction;
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

// Test cases
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
})
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1

