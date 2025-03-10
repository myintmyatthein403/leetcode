function mergeAlternately(word1: string, word2: string): string {
  let result: string = '';
  let i: number = 0;
  for (i; i < word1.length || i < word2.length; i++) {
    if (i < word1.length) {
      result += word1[i];
    }
    if (i < word2.length) {
      result += word2[i];
    }
  }
  return result;
};

console.log(mergeAlternately('abc', 'pqr')); // apbqcr
console.log(mergeAlternately('ab', 'pqrs')); // apbqrs
console.log(mergeAlternately('abcd', 'pq')); // apbqcd
