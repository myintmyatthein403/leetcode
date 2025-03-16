/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  // Helper function to check if it's possible to repair all cars within the given time.
  function canRepairInTime(time) {
    let totalCarsRepaired = 0;
    for (let rank of ranks) {
      const maxCarsByMechanic = Math.floor(Math.sqrt(time / rank)); // Maximum cars a mechanic can repair
      totalCarsRepaired += maxCarsByMechanic;
      if (totalCarsRepaired >= cars) {
        return true; // Early exit if we've repaired enough cars
      }
    }
    return totalCarsRepaired >= cars;
  }

  // Binary search to find the minimum time
  let left = 0, right = ranks[0] * cars * cars; // Start with an upper bound as the worst-case scenario
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canRepairInTime(mid)) {
      result = mid; // This time is feasible, try to find a smaller one
      right = mid - 1;
    } else {
      left = mid + 1; // This time is not feasible, try a larger one
    }
  }

  return result;
};
