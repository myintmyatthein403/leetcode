/**
* @param {number} n
* @param {number[][]} edges
* @return {number}
*/
var countCompleteComponents = function (n, edges) {
  const adj = Array(n).fill(null).map(() => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const visited = Array(n).fill(false);
  let completeComponents = 0;

  const isComplete = (component) => {
    for (let i = 0; i < component.length; i++) {
      for (let j = i + 1; j < component.length; j++) {
        if (!adj[component[i]].includes(component[j])) {
          return false;
        }
      }
    }
    return true;
  };

  const dfs = (u, component) => {
    visited[u] = true;
    component.push(u);
    for (const v of adj[u]) {
      if (!visited[v]) {
        dfs(v, component);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      const component = [];
      dfs(i, component);
      if (isComplete(component)) {
        completeComponents++;
      }
    }
  }

  return completeComponents;
};
