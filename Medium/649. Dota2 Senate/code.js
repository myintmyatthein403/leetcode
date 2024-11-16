/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let radiant = [],
    dire = [];
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }
  while (radiant.length > 0 && dire.length > 0) {
    if (radiant[0] < dire[0]) {
      radiant.push(radiant[0] + senate.length);
    } else {
      dire.push(dire[0] + senate.length);
    }
    radiant.shift();
    dire.shift();
  }
  return radiant.length > 0 ? "Radiant" : "Dire";
};

// For Example
console.log(predictPartyVictory("RD")); // Radiant
console.log(predictPartyVictory("RDD")); // Dire
console.log(predictPartyVictory("RRDDD")); // Radiant
