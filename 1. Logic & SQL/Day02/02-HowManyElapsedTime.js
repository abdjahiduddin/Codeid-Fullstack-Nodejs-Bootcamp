/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  const len = year2 - year1;
  const yearArr = [...Array(len + 1).keys()].map((x) => x + year1);
  let countKabisat = 0;
  yearArr.forEach((year) => {
    if (isKabisat(year)) {
      console.log(year);
      countKabisat++;
    }
  });
  return countKabisat;
}

function isKabisat(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  }
  return false;
}

console.log(howManyKabisat(1997, 2021));
