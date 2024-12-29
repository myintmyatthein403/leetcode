function strStr(haystack: string, needle: string): number {
  switch (true) {
    case needle.length == 0:
      return 0
    case haystack.length < needle.length:
      return -1
    default:
      return haystack.indexOf(needle)
  }
};
