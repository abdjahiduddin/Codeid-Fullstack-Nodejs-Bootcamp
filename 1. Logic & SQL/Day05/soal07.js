// soal 7
//buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
//jika total nilai akhir adalah 0 dan U maka = +1 
function countingValleys(s) {
  let countValleys = 0;
  let strArr = s.split("");
  strArr.forEach((str) => {
    if (str === "U") {
      //   console.log(str + "+1");
      countValleys++;
    } else {
      //   console.log(str + "-1");
      countValleys--;
    }
  });
  // console.log(countValleys);
  if (strArr[strArr.length - 1] === "U" && countValleys === 0) {
    countValleys++;
  }
  return countValleys;
}
console.log(countingValleys("UDDUUDUD")); //0
console.log(countingValleys("UDDDUDUU")); //1