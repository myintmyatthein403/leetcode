/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
  const buildGraph = (edges, size) => {
    const graph = Array.from({ length: size }, () => []);
    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
    return graph;
  };

  const bfs = (graph, start, maxDepth) => {
    const visited = new Array(graph.length).fill(false);
    const queue = [[start, 0]];
    visited[start] = true;
    const distCount = new Array(maxDepth + 1).fill(0);
    while (queue.length > 0) {
      const [node, dist] = queue.shift();
      if (dist > maxDepth) continue;
      distCount[dist]++;
      for (const nei of graph[node]) {
        if (!visited[nei]) {
          visited[nei] = true;
          queue.push([nei, dist + 1]);
        }
      }
    }
    return distCount;
  };

  const prefixSums = (distCounts) => {
    return distCounts.map(counts => {
      const prefix = [...counts];
      for (let i = 1; i < prefix.length; i++) {
        prefix[i] += prefix[i - 1];
      }
      return prefix;
    });
  };

  const n = edges1.length + 1;
  const m = edges2.length + 1;
  const graph1 = buildGraph(edges1, n);
  const graph2 = buildGraph(edges2, m);

  // Step 1: compute BFS distances and prefix sums for both trees
  const dist1 = Array.from({ length: n }, (_, i) => bfs(graph1, i, k));
  const dist2 = Array.from({ length: m }, (_, i) => bfs(graph2, i, k - 1));

  const prefix1 = prefixSums(dist1);
  const prefix2 = prefixSums(dist2);

  // Step 2: find max number of target nodes in T2 within (k - 1) distance
  const maxT2Targets = new Array(m);
  for (let i = 0; i < m; i++) {
    maxT2Targets[i] = prefix2[i][k - 1] ?? 0;
  }
  const maxT2 = Math.max(...maxT2Targets);

  // Step 3: for each node in T1, calculate max reachable target nodes
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    const t1Reach = prefix1[i][k];
    result[i] = t1Reach + maxT2;
  }

  return result;
};
