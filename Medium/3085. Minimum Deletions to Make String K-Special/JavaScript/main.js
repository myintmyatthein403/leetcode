/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
  // Step 1: Count frequency of each character
  const freqMap = {};
  for (let ch of word) {
    freqMap[ch] = (freqMap[ch] || 0) + 1;
  }

  const freqs = Object.values(freqMap);
  freqs.sort((a, b) => a - b); // Sort frequencies in ascending order

  let minDeletions = Infinity;

  for (let i = 0; i < freqs.length; i++) {
    const targetMinFreq = freqs[i]; // We try to keep frequencies between targetMinFreq and targetMinFreq + k
    let deletions = 0;

    for (let f of freqs) {
      if (f < targetMinFreq) {
        // Too small, delete all
        deletions += f;
      } else if (f > targetMinFreq + k) {
        // Too large, delete the excess
        deletions += f - (targetMinFreq + k);
      }
      // else it's within range, no deletions needed
    }

    minDeletions = Math.min(minDeletions, deletions);
  }

  return minDeletions;
};
