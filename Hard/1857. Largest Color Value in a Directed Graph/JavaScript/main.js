/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
  const n = colors.length;
  const graph = Array.from({ length: n }, () => []);
  const indegree = Array(n).fill(0);

  // Build graph and indegree
  for (const [u, v] of edges) {
    graph[u].push(v);
    indegree[v]++;
  }

  // Initialize color counts
  const dp = Array.from({ length: n }, () => Array(26).fill(0));
  const queue = [];

  // Add nodes with indegree 0 to queue
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) queue.push(i);
    dp[i][colors.charCodeAt(i) - 97] = 1;
  }

  let visited = 0;
  let maxColorValue = 0;

  while (queue.length > 0) {
    const u = queue.shift();
    visited++;

    for (const v of graph[u]) {
      for (let c = 0; c < 26; c++) {
        const colorIndex = colors.charCodeAt(v) - 97;
        const additional = (c === colorIndex) ? 1 : 0;
        dp[v][c] = Math.max(dp[v][c], dp[u][c] + additional);
      }

      indegree[v]--;
      if (indegree[v] === 0) {
        queue.push(v);
      }
    }

    maxColorValue = Math.max(maxColorValue, Math.max(...dp[u]));
  }

  return visited === n ? maxColorValue : -1;
};
