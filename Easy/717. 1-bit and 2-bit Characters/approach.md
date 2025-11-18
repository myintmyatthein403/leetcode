The logic is:

Start an index i at the beginning of the bits array.

Loop until i is less than the array length minus 1 (i.e., you haven't processed the last bit yet).

If bits[i] is 0, it's a one-bit character. Increment i by 1.

If bits[i] is 1, it's the start of a two-bit character (10 or 11). Increment i by 2.

After the loop finishes, if the index i is exactly equal to bits.length - 1, it means the last character was a one-bit character (0).
