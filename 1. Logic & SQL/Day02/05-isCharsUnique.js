function isCharsUnique(string) {
  let uniqueStr = string.split("");
  uniqueStr = new Set(uniqueStr);
  uniqueStr = [...uniqueStr].join("");
  if (uniqueStr === string) {
    return true;
  }
  return false;
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false
