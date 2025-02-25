/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  const n = amount.length;
  const tree = Array.from({ length: n }, () => []);

  // Build the tree (adjacency list)
  for (const [u, v] of edges) {
    tree[u].push(v);
    tree[v].push(u);
  }

  // Step 1: Find Bob's path to node 0
  let bobTime = Array(n).fill(Infinity);
  function findBobPath(node, parent, time) {
    if (node === 0) {
      bobTime[node] = time;
      return true;
    }
    for (const neighbor of tree[node]) {
      if (neighbor === parent) continue;
      if (findBobPath(neighbor, node, time + 1)) {
        bobTime[node] = time;
        return true;
      }
    }
    return false;
  }
  findBobPath(bob, -1, 0); // Start DFS from Bob's node

  // Step 2: DFS for Alice to find the max net income
  let maxIncome = -Infinity;
  function dfsAlice(node, parent, time, currentIncome) {
    // Determine Alice's earnings at this node
    if (time < bobTime[node]) {
      currentIncome += amount[node]; // Alice arrives first, gets full amount
    } else if (time === bobTime[node]) {
      currentIncome += amount[node] / 2; // They arrive together, split amount
    }

    // Check if we are at a leaf node
    let isLeaf = true;
    for (const neighbor of tree[node]) {
      if (neighbor !== parent) {
        isLeaf = false;
        dfsAlice(neighbor, node, time + 1, currentIncome);
      }
    }

    // Update max income if we reach a leaf node
    if (isLeaf) {
      maxIncome = Math.max(maxIncome, currentIncome);
    }
  }

  dfsAlice(0, -1, 0, 0); // Start DFS from Alice's root node (0)

  return maxIncome;
};

// Example test cases
console.log(mostProfitablePath([[0, 1], [1, 2], [1, 3], [3, 4]], 3, [-2, 4, 2, -4, 6]));  // Output: 6
console.log(mostProfitablePath([[0, 1]], 1, [-7280, 2350]));  // Output: -7280
