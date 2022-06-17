function isPalindrome(word) {
  word = word.toLocaleLowerCase();
  const wordArr = word.split("");
  const reverseWord = wordArr.reverse().join("");
  if (reverseWord === word) {
    return true;
  }
  return false;
}

console.log(isPalindrome("kasur ini rUsak")); //true
