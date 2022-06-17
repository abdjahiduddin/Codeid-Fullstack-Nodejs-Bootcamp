//soal 8
//buat isi function untuk menentukan nilai checkPermute di console jika length
//kedua inputan tidak sama makan hasilnya false, dan jika length sama maka di cek apakah
//jumlah kata dari masing2 inputan perjumlah sama atau tidak

// function checkPermute(stringOne, stringTwo) {
//   if (stringOne.length !== stringTwo.length) {
//     return false;
//   }
//   const strOneArr = stringOne.split(" ");
//   const strTwoArr = stringTwo.split(" ");
//   if (strOneArr.length === strTwoArr.length) {
//     return true;
//   }
//   return false;
// }
const checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    const sortStrOne = stringOne.split("").sort().join("");
    const sortStrTwo = stringTwo.split("").sort().join("");
    if (sortStrOne === sortStrTwo) {
      return true;
    }
    return false;
  }
  // else sort and compare
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
};
console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aaa")); //false;
