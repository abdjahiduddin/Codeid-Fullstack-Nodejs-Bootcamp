// SOAL 4
// Bentuk 01
const bentukSatu = () => {
  for (let i = 1; i <= 7; i++) {
    let strTmp = "";
    for (let y = i; y < i * 2; y++) {
      strTmp += y + " ";
    }
    console.log(strTmp);
  }
};
bentukSatu();

// Bentuk 02
const bentukDua = () => {
  for (let i = 0; i < 7; i++) {
    let strTmp = "";
    for (let y = i + 5; y <=  i * 2 + 5; y++) {
      strTmp += y + " ";
    }
    console.log(strTmp);
  }
};
bentukDua();