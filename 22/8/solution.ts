export function checkPart(part: string) { 
  const isPalindrome = (word: string) => word === [...word].reverse().join("");

  if(isPalindrome(part)) return true;


  return [...part].some((_letter, index) => {
      const leftPart = part.slice(0, index);
      const rightPart = part.slice(index + 1);
      const newWord = leftPart + rightPart;
      
      if(isPalindrome(newWord)) return true;
    });
}