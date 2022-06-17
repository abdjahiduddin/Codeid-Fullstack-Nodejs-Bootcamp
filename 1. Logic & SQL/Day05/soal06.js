// soal 6
//buat isi function untuk menentukan nilai palindrome di console true atau false
function isPalindrome(word) {
  word = word.toLocaleLowerCase();
  const reverseWord = word.split("").reverse().join("");
  if (word == reverseWord) {
    return true;
  }
  return false;
}

console.log(isPalindrome("kasur ini rUsak")); //true