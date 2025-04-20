/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  const count = {};

  // Count frequency of each answer
  for (const ans of answers) {
    count[ans] = (count[ans] || 0) + 1;
  }

  let totalRabbits = 0;

  for (const x in count) {
    const groupSize = parseInt(x) + 1;
    const freq = count[x];

    // Calculate number of groups needed (round up)
    const groups = Math.ceil(freq / groupSize);

    totalRabbits += groups * groupSize;
  }

  return totalRabbits;
};
