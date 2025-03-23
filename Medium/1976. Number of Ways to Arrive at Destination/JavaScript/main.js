/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  const adj = Array(n).fill(null).map(() => []);
  for (const [u, v, time] of roads) {
    adj[u].push([v, time]);
    adj[v].push([u, time]);
  }

  const dist = Array(n).fill(Infinity);
  const ways = Array(n).fill(0);
  const pq = [[0, 0]]; // [distance, node]
  const MOD = 10 ** 9 + 7;

  dist[0] = 0;
  ways[0] = 1;

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift();

    if (d > dist[u]) continue;

    for (const [v, time] of adj[u]) {
      if (dist[u] + time < dist[v]) {
        dist[v] = dist[u] + time;
        ways[v] = ways[u];
        pq.push([dist[v], v]);
      } else if (dist[u] + time === dist[v]) {
        ways[v] = (ways[v] + ways[u]) % MOD;
      }
    }
  }

  return ways[n - 1];
};
