var numberOfPairs = function (points) {
  let ans = 0;
  let n = points.length;
  for (let i = 0; i < points.length; i++) {
    const pointA = points[i];
    for (let j = 0; j < points.length; j++) {
      const pointB = points[j];
      if (
        i === j ||
        !(pointA[0] <= pointB[0] && pointA[1] >= pointB[1])
      ) {
        continue;
      }

      if (points.length === 2) {
        ans++;
        continue;
      }

      let illegal = false;

      for (const pointTmp of points) {
        if (pointA === pointTmp || pointB === pointTmp) {
          continue;
        }

        const isXContained =
          pointTmp[0] >= pointA[0] && pointTmp[0] <= pointB[0];
        const isYContained =
          pointTmp[1] <= pointA[1] && pointTmp[1] >= pointB[1];

        illegal = isXContained && isYContained;

        if (illegal) {
          break;
        }
      }

      if (!illegal) {
        ans++;
      }
    }
  }

  return ans;
};
