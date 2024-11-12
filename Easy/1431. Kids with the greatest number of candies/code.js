/**
* @param  {number[]}  candies
* @param  {number}  extraCandies
* @return  {boolean[]}
*/
var kidsWithCandies = function (candies, extraCandies) {
  var results = [];
  for (var i = 0; i < candies.length; i++) {
    var newCandies = candies[i] + extraCandies;
    for (var j = 0; j < candies.length; j++) {
      if (newCandies < candies[j]) {
        results[i] = false;
        break;
      }
      results[i] = true;
    }
  }
  return results;
};

var kidsWithCandiesWithMath = function (candies, extraCandies) {
  var results = [];
  var max = Math.max(...candies);
  for (var i = 0; i < candies.length; i++) {
    results.push(candies[i] + extraCandies >= max);
  }
  return results;
}

// For Example
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // Output: [true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // Output: [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); // Output: [true,false,true]
