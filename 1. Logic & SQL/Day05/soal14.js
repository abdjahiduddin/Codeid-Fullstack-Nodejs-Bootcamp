//soal 14
/**
 *  Peminjaman komik di taman bacaan
 *  hanya dibolehkan 3hari dihitung saat peminjaman,
 *  lebih dari 6 hari akan dikenakan denda sebesar
 *  Rp.500 tiap komik. biaya komik peminjaman Rp.2000/tiap komik.
 *  buat function dengan :
 *  totalKomikPinjam(starDate,endDate, totalkomik)
 *  startDate : tgl pinjam komik
 *  endDate : tgl kembalikan komik
 *  totalKomik : jumlah komik, maksimal 10 komik
 */

function tagihanKomik(tglPinjam, tglKembali, totalkomik) {
  const denda = 500;
  const biaya = 2000;
  const pinjam = new Date(tglPinjam);
  const kembali = new Date(tglKembali);

  // Input Validation
  if (isNaN(pinjam).valueOf() && isNaN(kembali).valueOf()) {
    return `Tgl.Pinjam ${tglPinjam} & Tgl.Kembali ${tglKembali} not valid formated date`;
  }
  if (isNaN(pinjam).valueOf()) {
    return `Tgl.Pinjam ${tglPinjam} not valid formated date`;
  }
  if (isNaN(kembali).valueOf()) {
    return `Tgl.Kembali ${tglKembali} not valid formated date`;
  }

  const diff = kembali.getTime() - pinjam.getTime();
  const hari = diff / 86400000;
  const tagihan = hari * biaya * totalkomik;

  let dendaHari = 0;
  if (hari > 6) {
    dendaHari = hari - 6;
    const totalDenda = dendaHari * denda * totalkomik;
    const totalTagihan = totalDenda + tagihan;

    return `
    Total Hari = ${hari}
    Total Komik = ${totalkomik} x ${biaya}
    Total Hari Denda = ${dendaHari}
    Total Denda = ${totalkomik} x ${denda}
    ------------------------
    Total Tagihan =Rp. ${totalTagihan}`;
  }

  return `
  Total Hari = ${hari}
  Total Komik = ${totalkomik} x ${biaya}
  ------------------------
  Total Tagihan =Rp. ${tagihan}`;
}

console.log(tagihanKomik("09-03-20xx", "09-06-2021", 4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021", 4)); //Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021", 4)); //Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-6-2021", 4));
/**
 Total Hari = 3 
 Total Komik = 4 x 2000 
 ------------------------
 Total Tagihan =Rp.30000
 */
