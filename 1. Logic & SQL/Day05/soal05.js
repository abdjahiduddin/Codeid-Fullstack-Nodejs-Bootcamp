//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.

const soalLima = (penduduk, max) => {
  let jmlPenduduk = penduduk;
  let countYear = 0;
  while (jmlPenduduk < max) {
    let pertumbuhanPenduduk = (3 / 100) * jmlPenduduk;
    jmlPenduduk += pertumbuhanPenduduk;
    countYear++;
    // console.log("Tahun: " + countYear);
    // console.log("Jumlah Penduduk: " + jmlPenduduk);
  }
  console.log(
    `Total tahun yang dibutuhkan untuk mencapai jumlah penduduk ${max} adalah ${countYear} tahun`
  );
};
soalLima(30000,100000);
