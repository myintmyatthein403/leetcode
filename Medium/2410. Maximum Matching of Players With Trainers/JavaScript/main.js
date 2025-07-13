/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  // Step 1: Sort both arrays in ascending order
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let i = 0; // pointer for players
  let j = 0; // pointer for trainers
  let matches = 0;

  // Step 2: Traverse both arrays with two pointers
  while (i < players.length && j < trainers.length) {
    if (players[i] <= trainers[j]) {
      // Match found
      matches++;
      i++;
      j++;
    } else {
      // Trainer too weak, try the next one
      j++;
    }
  }

  return matches;
};
