/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
  const res = new Array(2 * n - 1).fill(0);
  const visited = new Array(n + 1).fill(false);
  dfs(0, n, res, visited);
  return res;
};

function dfs(index, n, res, visited) {
  if (index === res.length) return true;
  if (res[index] !== 0) return dfs(index + 1, n, res, visited);

  for (let i = n; i >= 1; i--) {
    if (visited[i]) continue;
    if (i === 1) {
      res[index] = i;
      visited[i] = true;
      if (dfs(index + 1, n, res, visited)) return true;
      res[index] = 0;
      visited[i] = false;
    } else if (index + i < res.length && res[index + i] === 0) {
      res[index] = i;
      res[index + i] = i;
      visited[i] = true;
      if (dfs(index + 1, n, res, visited)) return true;
      res[index] = 0;
      res[index + i] = 0;
      visited[i] = false;
    }
  }
  return false;
}
