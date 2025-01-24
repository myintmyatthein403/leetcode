/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const color = new Array(n).fill(0); // 0 = unvisited, 1 = visiting, 2 = safe

  const dfs = (node) => {
    if (color[node] !== 0) {
      return color[node] === 2;
    }
    color[node] = 1;
    for (const neighbor of graph[node]) {
      if (color[neighbor] === 2) {
        continue;
      }
      if (color[neighbor] === 1 || !dfs(neighbor)) {
        return false;
      }
    }
    color[node] = 2;
    return true;
  };

  const safeNodes = [];
  for (let i = 0; i < n; i++) {
    if (dfs(i)) {
      safeNodes.push(i);
    }
  }
  return safeNodes.sort((a, b) => a - b);

};
