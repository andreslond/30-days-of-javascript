export function findLargestPalindrome(words) {

    const isPalindrome = ((word) => {
      console.log('Start -> ' + word);
  
      if (!word) {
        return false;
      }
  
      const leng = word.length;
      const middleChar = Math.floor(leng / 2);
      //console.log('middleChar: ' + middleChar);
      //const isEven = leng % 2 === 0;
  
      let j = leng - 1;
      for (let i = 0; i < middleChar; i++) {
        //console.log(i + ' -> ' + word[i] + ' === ' + word[j]);
        if (word[i] !== word[j]) {
          return false;
        }
        j--;
      }
      return true;
    });
  
    let longestLength = -1;
    let longestPalindrome = null;
  
    for (const word of words) {
      if (!isPalindrome(word)) {
        console.log('is not a palindrome');
        continue;
      }
  
      const wLength = word.length;
      if (wLength > longestLength) {
        longestLength = wLength;
        longestPalindrome = word;
      }
    }  
    return longestPalindrome;
  }
  