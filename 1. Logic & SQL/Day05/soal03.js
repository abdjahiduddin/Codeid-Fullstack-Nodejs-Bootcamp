//soal 3
// Buat script program supaya bisa muncul output seperti di bawah
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9

const soalTiga = () => {
  for (let i = 1; i <= 5; i++) {
    let tmpNum = "";
    let count = i;
    for (let y = 0; y < i; y++) {
      tmpNum += count++ + " ";
    }
    console.log(tmpNum);
  }
};

soalTiga()