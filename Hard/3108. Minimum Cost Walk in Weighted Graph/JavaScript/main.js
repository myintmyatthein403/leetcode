/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, queries) {
  // Step 1: Build adjacency list
  let adjList = Array.from({ length: n }, () => []);
  for (let [u, v, w] of edges) {
    adjList[u].push([v, w]);
    adjList[v].push([u, w]);
  }

  let visited = new Array(n).fill(false);
  let components = new Array(n).fill(0);
  let componentCost = [];
  let componentId = 0;

  // Step 2: Identify connected components and compute min AND cost
  for (let node = 0; node < n; node++) {
    if (!visited[node]) {
      componentCost.push(getComponentCost(node, adjList, visited, components, componentId));
      componentId++;
    }
  }

  // Step 3: Process queries
  let result = [];
  for (let [start, end] of queries) {
    if (components[start] === components[end]) {
      result.push(componentCost[components[start]]);
    } else {
      result.push(-1);
    }
  }

  return result;
};

// Helper function to compute the min AND cost for a component using BFS
function getComponentCost(source, adjList, visited, components, componentId) {
  let queue = [source];
  let componentCost = -1; // All 1s in binary (~0)

  visited[source] = true;

  while (queue.length) {
    let node = queue.shift();
    components[node] = componentId;

    for (let [neighbor, weight] of adjList[node]) {
      componentCost &= weight;

      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  return componentCost;
}
