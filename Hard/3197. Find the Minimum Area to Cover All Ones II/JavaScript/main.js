/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumSum = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  // collect all 1's positions
  const ones = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        ones.push([i, j]);
      }
    }
  }

  // if less than 3 ones (though constraint says at least 3)
  if (ones.length < 3) return -1;

  const INF = 1e9;
  let ans = INF;

  // helper to compute area of rectangle covering a set of points
  function rectArea(points) {
    if (points.length === 0) return 0;
    let minR = INF, maxR = -INF, minC = INF, maxC = -INF;
    for (let [r, c] of points) {
      minR = Math.min(minR, r);
      maxR = Math.max(maxR, r);
      minC = Math.min(minC, c);
      maxC = Math.max(maxC, c);
    }
    return (maxR - minR + 1) * (maxC - minC + 1);
  }

  // check vertical splits into 3 bands
  for (let c1 = 0; c1 < m; c1++) {
    for (let c2 = c1 + 1; c2 < m - 1; c2++) {
      let g1 = [], g2 = [], g3 = [];
      for (let [r, c] of ones) {
        if (c <= c1) g1.push([r, c]);
        else if (c <= c2) g2.push([r, c]);
        else g3.push([r, c]);
      }
      if (g1.length && g2.length && g3.length) {
        let total = rectArea(g1) + rectArea(g2) + rectArea(g3);
        ans = Math.min(ans, total);
      }
    }
  }

  // check horizontal splits into 3 bands
  for (let r1 = 0; r1 < n; r1++) {
    for (let r2 = r1 + 1; r2 < n - 1; r2++) {
      let g1 = [], g2 = [], g3 = [];
      for (let [r, c] of ones) {
        if (r <= r1) g1.push([r, c]);
        else if (r <= r2) g2.push([r, c]);
        else g3.push([r, c]);
      }
      if (g1.length && g2.length && g3.length) {
        let total = rectArea(g1) + rectArea(g2) + rectArea(g3);
        ans = Math.min(ans, total);
      }
    }
  }

  // check mixed: one vertical cut + one horizontal cut → 4 regions, pick best 3
  for (let r = 0; r < n - 1; r++) {
    for (let c = 0; c < m - 1; c++) {
      let q1 = [], q2 = [], q3 = [], q4 = [];
      for (let [x, y] of ones) {
        if (x <= r && y <= c) q1.push([x, y]);
        else if (x <= r && y > c) q2.push([x, y]);
        else if (x > r && y <= c) q3.push([x, y]);
        else q4.push([x, y]);
      }
      let groups = [q1, q2, q3, q4].filter(g => g.length > 0);
      if (groups.length === 3) {
        let total = groups.reduce((sum, g) => sum + rectArea(g), 0);
        ans = Math.min(ans, total);
      }
      if (groups.length === 4) {
        // must merge two into one rectangle
        for (let i = 0; i < 4; i++) {
          for (let j = i + 1; j < 4; j++) {
            let merged = groups[i].concat(groups[j]);
            let rest = [];
            for (let k = 0; k < 4; k++) {
              if (k !== i && k !== j) rest.push(groups[k]);
            }
            let total = rectArea(merged) + rest.reduce((s, g) => s + rectArea(g), 0);
            ans = Math.min(ans, total);
          }
        }
      }
    }
  }

  return ans;
};
