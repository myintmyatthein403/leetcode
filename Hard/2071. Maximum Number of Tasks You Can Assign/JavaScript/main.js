/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function (tasks, workers, pills, strength) {
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);

  const canAssign = (k) => {
    const taskList = tasks.slice(0, k);
    const workerList = workers.slice(workers.length - k);
    const deque = [];
    let pillCount = pills;
    let j = k - 1;

    for (let i = k - 1; i >= 0; i--) {
      const task = taskList[i];

      while (j >= 0 && workerList[j] + strength >= task) {
        deque.push(workerList[j]);
        j--;
      }

      if (deque.length === 0) return false;

      // If the weakest available worker can do the task directly
      if (deque[0] >= task) {
        deque.shift(); // use the weakest worker
      } else {
        if (pillCount === 0) return false;
        pillCount--;
        deque.pop(); // use strongest and boost with pill
      }
    }

    return true;
  };

  let left = 0, right = Math.min(tasks.length, workers.length);
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canAssign(mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};
