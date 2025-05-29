/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2) {
  const n = edges1.length + 1;
  const m = edges2.length + 1;

  const buildGraph = (edges, size) => {
    const graph = Array.from({ length: size }, () => []);
    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
    return graph;
  };

  const tree1 = buildGraph(edges1, n);
  const tree2 = buildGraph(edges2, m);

  const getParityInfo = (graph) => {
    const depth = Array(graph.length).fill(-1);
    const queue = [[0, 0]]; // [node, depth]
    let even = 0, odd = 0;

    while (queue.length) {
      const [node, d] = queue.pop();
      if (depth[node] !== -1) continue;
      depth[node] = d;
      if (d % 2 === 0) even++;
      else odd++;
      for (const nei of graph[node]) {
        if (depth[nei] === -1) {
          queue.push([nei, d + 1]);
        }
      }
    }

    return { depth, even, odd };
  };

  // Get parity info for both trees
  const { depth: depth1, even: even1, odd: odd1 } = getParityInfo(tree1);
  const { even: even2, odd: odd2 } = getParityInfo(tree2);

  const res = new Array(n);

  for (let i = 0; i < n; i++) {
    const isEven = depth1[i] % 2 === 0;
    const targetInTree1 = isEven ? even1 : odd1;
    const targetInTree2 = Math.max(even2, odd2); // best connection choice
    res[i] = targetInTree1 + targetInTree2;
  }

  return res;
};
