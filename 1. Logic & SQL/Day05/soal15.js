//soal 15
/**
    Buat function untuk membayar cicilan angsuran rumah,
    diketahui angsuran rumah per bulan Rp.3.500.000,
    
    function payment(tglBayar,tglJatuhTempo,cicilan);

    jika penghuni telat membayar dari tgl jatuh tempo 
    akan dikenakan denda sebesar 2 mile/hari atau 2/1000 dari total angsuran.
    Pembayaran dapat dilakukan paling cepat 5 hari sebelum jatuh tempo.
 */
function payment(tglBayar, tglJatuhTempo, cicilan) {
  // const monthArr = Array.from(Array(12).keys(), (value) => value + 1);
  if (cicilan < 3500000) {
    return "Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran";
  }

  const diffDays = differenceInDays(tglBayar, tglJatuhTempo);
  const month = new Date(tglJatuhTempo).getMonth();
  if (diffDays > 5) {
    return `Tagihan bulan ${month + 1} belum tersedia`;
  }

  let terlambat = 0;
  let denda = 0;

  if (diffDays < 0) {
    terlambat = diffDays * -1;
    denda = (2 / 1000) * cicilan * terlambat;
  }

  return showTagihan(
    tglBayar,
    tglJatuhTempo,
    cicilan,
    cicilan,
    terlambat,
    denda
  );
}

function showTagihan(payDate, dueDate, angsuran, cicilan, terlambat, denda) {
  // const monthArr = Array.from(Array(12).keys(), (value) => value + 1);
  payDate = new Date(payDate);
  dueDate = new Date(dueDate);
  const tglBayar = payDate.toLocaleDateString("id-ID");
  const tglJatuhTempo = dueDate.toLocaleDateString("id-ID");
  const month = payDate.getMonth();
  const tahunBayar = new Date().getFullYear();

  const total = cicilan + denda;

  return `
--------------------------
Tanggal Bayar : ${tglBayar}
Jatuh Tempo :  ${tglJatuhTempo}
--------------------------
Tagihan bulan ${month + 1},${tahunBayar} = Rp. ${angsuran} 
Denda = Rp. ${denda} (terlambat ${terlambat} hari)
Total = Rp. ${total} (lunas)
--------------------------
Kwitansi ini sebagai alat bukti pembayaran
`;
}

function differenceInDays(startDate, endDate) {
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  const diffMilisec = endDate.getTime() - startDate.getTime();
  const diffDays = diffMilisec / 86400000; 
  return diffDays;
}

console.log(payment("09/30/2021", "09/27/2021", 50000)); //Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
console.log(payment("09/21/2021", "09/27/2021", 3500000)); //Tagihan bulan 8 belum tersedia
console.log(payment("09/27/2021", "09/27/2021", 3500000)); // Tepat waktu
console.log(payment("09/30/2021", "09/27/2021", 3500000)); // Terlambat

/**
--------------------------
Tanggal Bayar : 27/9/2021
Jatuh Tempo :  27/9/2021
--------------------------
Tagihan bulan 9,2021 = Rp.3500000 
Denda = Rp.0 (terlambat 0 hari)
Total = Rp.3500000 (lunas)
--------------------------
Kwitansi ini sebagai alat bukti pembayaran
 */
