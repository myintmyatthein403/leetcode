/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length <= 1) return chars.length;
  let count = 1;
  let prev = chars[0];
  let result = [];
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === prev && i !== chars.length - 1) {
      count++;
    } else if (chars[i] === prev && i === chars.length - 1) {
      result.push(prev);
      count++;
      if (count > 1) {
        result.push(...count.toString().split(""));
      }
    } else {
      result.push(prev);
      if (count > 1) {
        result.push(...count.toString().split(""));
      }
      prev = chars[i];
      count = 1;
    }
  }
  return result.length;
};

var compressGPT = function (chars) {
  let write = 0;
  let i = 0;

  while (i < chars.length) {
    let char = chars[i];
    let count = 0;

    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    chars[write] = char;
    write++;

    if (count > 1) {
      for (let digit of count.toString()) {
        chars[write] = digit;
        write++;
      }
    }
  }
  return write;
}

// For example
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // Output: ["a","2","b","2","c","3"]
console.log(compress(["a"])); // Output: ["a"]
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])); // Output: ["a","b","1","2"]

console.log(compressGPT(["a", "a", "b", "b", "c", "c", "c"])); // Output: ["a","2","b","2","c","3"]
console.log(compressGPT(["a"])); // Output: ["a"]
console.log(compressGPT(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])); // Output: ["a","b","1","2"]
