var maxFreeTime = function (eventTime, k, startTime, endTime) {
  let n = startTime.length,
    res = 0;
  let sum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + endTime[i] - startTime[i];
  }
  for (let i = k - 1; i < n; i++) {
    let right = i === n - 1 ? eventTime : startTime[i + 1];
    let left = i === k - 1 ? 0 : endTime[i - k];
    res = Math.max(res, right - left - (sum[i + 1] - sum[i - k + 1]));
  }
  return res;
};
