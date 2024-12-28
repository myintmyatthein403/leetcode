/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  let timeoutId;
  const cancel = () => clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    fn(...args);
    cancel();
  }, t);

  return cancel;
};

// Real world example - cancellable function execution after t ms if not already 
// Ticket: Cancellable function execution

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

// Test cases
const result = [];
const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;
const start = performance.now();
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ "time": diff, "returned": fn(...argsArr) });
}
const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelTimeMs);
setTimeout(cancel, cancelTimeMs);
setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15)

