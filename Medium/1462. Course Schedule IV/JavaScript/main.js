/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  // Initialize the adjacency matrix
  const reachable = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));

  // Fill the adjacency matrix with direct prerequisites
  for (const [u, v] of prerequisites) {
    reachable[u][v] = true;
  }

  // Floyd-Warshall algorithm to compute transitive closure
  for (let k = 0; k < numCourses; k++) {
    for (let i = 0; i < numCourses; i++) {
      for (let j = 0; j < numCourses; j++) {
        if (reachable[i][k] && reachable[k][j]) {
          reachable[i][j] = true;
        }
      }
    }
  }

  // Answer the queries
  return queries.map(([u, v]) => reachable[u][v]);
};
