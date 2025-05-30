/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  function getDistances(start, edges) {
    const dist = Array(edges.length).fill(-1);
    let current = start;
    let d = 0;
    while (current !== -1 && dist[current] === -1) {
      dist[current] = d;
      current = edges[current];
      d++;
    }
    return dist;
  }

  const dist1 = getDistances(node1, edges);
  const dist2 = getDistances(node2, edges);

  let minDistance = Infinity;
  let result = -1;

  for (let i = 0; i < edges.length; i++) {
    if (dist1[i] !== -1 && dist2[i] !== -1) {
      const maxDist = Math.max(dist1[i], dist2[i]);
      if (maxDist < minDistance || (maxDist === minDistance && i < result)) {
        minDistance = maxDist;
        result = i;
      }
    }
  }

  return result;
};
