export function findLargestPalindrome(words) {
  let largest = null;

  for (const word of words) {
    const reversed = word.split('').reverse().join('');
    if (reversed === word) {
      if (largest == null || word.length > largest.length) {
        largest = word;
      }
    }
  }
  return largest;
}
