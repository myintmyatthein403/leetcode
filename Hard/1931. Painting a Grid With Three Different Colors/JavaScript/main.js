/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function (m, n) {
  const MOD = 1e9 + 7;

  // Step 1: Generate all valid column states
  const validStates = [];
  const generateStates = (state, pos) => {
    if (pos === m) {
      validStates.push([...state]);
      return;
    }
    for (let color = 0; color < 3; color++) {
      if (pos > 0 && state[pos - 1] === color) continue; // no vertical repetition
      state[pos] = color;
      generateStates(state, pos + 1);
    }
  };
  generateStates(new Array(m), 0);

  // Convert state arrays to string for hashing
  const stateKeys = validStates.map(state => state.join(''));

  // Step 2: Build a transition map
  const transitions = new Map();
  for (let i = 0; i < stateKeys.length; i++) {
    const curr = stateKeys[i];
    transitions.set(curr, []);
    for (let j = 0; j < stateKeys.length; j++) {
      const prev = stateKeys[j];
      let isValid = true;
      for (let k = 0; k < m; k++) {
        if (curr[k] === prev[k]) {
          isValid = false; // horizontal conflict
          break;
        }
      }
      if (isValid) transitions.get(curr).push(prev);
    }
  }

  // Step 3: Dynamic Programming
  let dp = new Map();
  for (const key of stateKeys) dp.set(key, 1); // Base case: first column

  for (let col = 1; col < n; col++) {
    const newDp = new Map();
    for (const curr of stateKeys) {
      let count = 0;
      for (const prev of transitions.get(curr)) {
        count = (count + dp.get(prev)) % MOD;
      }
      newDp.set(curr, count);
    }
    dp = newDp;
  }

  // Step 4: Sum all possibilities
  let result = 0;
  for (const val of dp.values()) {
    result = (result + val) % MOD;
  }
  return result;
};
