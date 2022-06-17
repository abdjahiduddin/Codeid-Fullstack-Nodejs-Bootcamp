//soal 2
// Buatlah algoritma untuk menampilkan angka 1 s/d n, dengan ketentuan:
// kelipatan 3 diganti “OK”, kelipatan 4 diganti “YES”, kelipatan 3 & 4 diganti “OKYES”
// Contoh output di bawah adalah ketika nilai “n” = 15
const soalDua = (n = 1) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      console.log("OKYES");
    } else if (i % 3 === 0) {
      console.log("OK");
    } else if (i % 4 === 0) {
      console.log("YES");
    } else {
      console.log(i);
    }
  }
};

soalDua(15)