
/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function (n, firstPlayer, secondPlayer) {
  const memo = new Map();

  function dfs(players, round) {
    const key = players.join(',') + ',' + round;
    if (memo.has(key)) return memo.get(key);

    const len = players.length;
    let res = [Infinity, -Infinity];

    for (let i = 0; i < Math.floor(len / 2); i++) {
      const a = players[i];
      const b = players[len - 1 - i];

      if ((a === firstPlayer && b === secondPlayer) || (a === secondPlayer && b === firstPlayer)) {
        return [round, round];
      }
    }

    const nextRounds = [];

    const backtrack = (i, curr) => {
      if (i >= Math.floor(len / 2)) {
        if (len % 2 === 1) curr.push(players[Math.floor(len / 2)]);
        curr.sort((a, b) => a - b);
        nextRounds.push([...curr]);
        if (len % 2 === 1) curr.pop();
        return;
      }

      const a = players[i];
      const b = players[len - 1 - i];

      if (a === firstPlayer || b === firstPlayer) {
        backtrack(i + 1, [...curr, firstPlayer]);
      } else if (a === secondPlayer || b === secondPlayer) {
        backtrack(i + 1, [...curr, secondPlayer]);
      } else {
        backtrack(i + 1, [...curr, a]);
        backtrack(i + 1, [...curr, b]);
      }
    };

    backtrack(0, []);

    for (const next of nextRounds) {
      const [earliest, latest] = dfs(next, round + 1);
      res[0] = Math.min(res[0], earliest);
      res[1] = Math.max(res[1], latest);
    }

    memo.set(key, res);
    return res;
  }

  const initialPlayers = Array.from({ length: n }, (_, i) => i + 1);
  return dfs(initialPlayers, 1);
};
