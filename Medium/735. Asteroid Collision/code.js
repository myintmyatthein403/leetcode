/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (stack.length === 0) {
      stack.push(asteroids[i]);
    } else {
      if (stack[stack.length - 1] > 0 && asteroids[i] < 0) {
        let flag = true;
        while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroids[i] < 0) {
          if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroids[i])) {
            stack.pop();
            flag = false;
            break;
          } else if (Math.abs(stack[stack.length - 1]) > Math.abs(asteroids[i])) {
            flag = false;
            break;
          } else {
            stack.pop();
          }
        }
        if (flag) {
          stack.push(asteroids[i]);
        }
      } else {
        stack.push(asteroids[i]);
      }
    }
  }
  return stack;
};

// For Example
console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
