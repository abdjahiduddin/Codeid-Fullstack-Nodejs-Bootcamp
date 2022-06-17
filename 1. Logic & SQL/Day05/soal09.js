//soal 9
//buat function menentukan kata mana yang paling panjang lengthnya

function maxWordLength(params) {
  const wordsArr = params.split(" ");
  let maxWord = "";
  let maxLength = 0;
  wordsArr.forEach((word) => {
    if (word.length > maxLength) {
      maxWord = word;
      maxLength = word.length;
    }
  });
  return maxWord;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp