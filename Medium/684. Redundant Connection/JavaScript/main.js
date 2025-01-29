/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const parent = [];
  const rank = [];

  // Initialize Union-Find
  for (let i = 0; i < edges.length + 1; i++) {
    parent[i] = i;
    rank[i] = 1;
  }

  // Find function with path compression
  function find(node) {
    if (parent[node] !== node) {
      parent[node] = find(parent[node]);
    }
    return parent[node];
  }

  // Union function with union by rank
  function union(node1, node2) {
    const root1 = find(node1);
    const root2 = find(node2);

    if (root1 === root2) {
      return false; // Cycle detected
    }

    if (rank[root1] > rank[root2]) {
      parent[root2] = root1;
    } else if (rank[root1] < rank[root2]) {
      parent[root1] = root2;
    } else {
      parent[root2] = root1;
      rank[root1] += 1;
    }

    return true;
  }

  // Process each edge
  for (const [node1, node2] of edges) {
    if (!union(node1, node2)) {
      return [node1, node2];
    }
  }

  return [];
};
