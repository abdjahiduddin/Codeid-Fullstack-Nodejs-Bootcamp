function maxWordLength(params) {
  let maxWord = "";
  let maxLength = 0;

  const wordsArr = params.split(" ");
  wordsArr.forEach((word) => {
    if (word.length > maxLength) {
      maxWord = word;
      maxLength = word.length;
    }
  });
  return maxWord;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
