/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n) {
  if (isNaN(n)) {
    return "a123 is not number, try again...";
  }

  const num = parseInt(n);

  if (num >= 10000) {
    return `${num} harus lebih kecil dari 10000`;
  }

  const numArr = ("" + num).split("");
  const sum = numArr.map(Number).reduce((a, b) => a + b);
  //   let sum = 0;
  //   for (let i = 0; i < numArr.length; i++) {
  //     sum += parseInt(numArr[i]);
  //   }
  return sum;
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...
