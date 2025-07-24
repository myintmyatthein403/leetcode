/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var minimumScore = function (nums, edges) {
  const n = nums.length;
  const graph = Array.from({ length: n }, () => []);

  // Build undirected graph
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // Initialize arrays to store:
  // xor[node] = XOR of the subtree rooted at `node`
  // inTime/outTime = DFS timestamps
  const xor = Array(n).fill(0);
  const inTime = Array(n).fill(0);
  const outTime = Array(n).fill(0);
  let time = 0;

  // DFS to compute subtree XORs and entry/exit times
  const dfs = (node, parent) => {
    xor[node] = nums[node];
    inTime[node] = time++;
    for (const nei of graph[node]) {
      if (nei === parent) continue;
      dfs(nei, node);
      xor[node] ^= xor[nei];
    }
    outTime[node] = time++;
  };

  dfs(0, -1);
  const totalXor = xor[0];
  let res = Infinity;

  // Helper to check if a is in the subtree of b
  const isDescendant = (a, b) => {
    return inTime[b] <= inTime[a] && outTime[a] <= outTime[b];
  };

  // Try all pairs of edges by simulating the split at each child
  const directedEdges = [];

  const collectDirectedEdges = (node, parent) => {
    for (const nei of graph[node]) {
      if (nei === parent) continue;
      directedEdges.push([node, nei]); // direction: parent -> child
      collectDirectedEdges(nei, node);
    }
  };

  collectDirectedEdges(0, -1);

  // Try all pairs of directed edges
  for (let i = 0; i < directedEdges.length; i++) {
    for (let j = i + 1; j < directedEdges.length; j++) {
      const [u1, v1] = directedEdges[i];
      const [u2, v2] = directedEdges[j];

      let x1 = xor[v1], x2 = xor[v2], x3;

      if (isDescendant(v1, v2)) {
        // v1 is in v2's subtree
        x2 = xor[v2];
        x1 = xor[v1];
        x3 = totalXor ^ x2;
        x2 = x2 ^ x1;
      } else if (isDescendant(v2, v1)) {
        // v2 is in v1's subtree
        x1 = xor[v1];
        x2 = xor[v2];
        x3 = totalXor ^ x1;
        x1 = x1 ^ x2;
      } else {
        // Independent subtrees
        x1 = xor[v1];
        x2 = xor[v2];
        x3 = totalXor ^ x1 ^ x2;
      }

      const maxXor = Math.max(x1, x2, x3);
      const minXor = Math.min(x1, x2, x3);
      res = Math.min(res, maxXor - minXor);
    }
  }

  return res;
};
