//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas
const soalSatu = () => {
  const numberArr = [12, 24, 36, 48, 60];
  let strNum = "";
  numberArr.forEach((num) => {
    strNum += num + " ";
  });
  console.log(strNum);
  //   numberArr.forEach((num) => console.log(num));
};
soalSatu();