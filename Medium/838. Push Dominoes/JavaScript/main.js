/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const n = dominoes.length;
  const forces = new Array(n).fill(0);
  let force = 0;

  // Step 1: Apply forces from left to right (Right pushes)
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === 'R') {
      force = n; // large enough force
    } else if (dominoes[i] === 'L') {
      force = 0; // left blocks right force
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] += force;
  }

  // Step 2: Apply forces from right to left (Left pushes)
  force = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (dominoes[i] === 'L') {
      force = n; // large enough force
    } else if (dominoes[i] === 'R') {
      force = 0; // right blocks left force
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] -= force; // subtract since leftward force is negative
  }

  // Step 3: Determine final state
  let result = '';
  for (let f of forces) {
    if (f > 0) result += 'R';
    else if (f < 0) result += 'L';
    else result += '.';
  }

  return result;
};
