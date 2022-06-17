/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
  const persenTaxEmp1 = taxGaji(gaji1);
  const persenTaxEmp2 = taxGaji(gaji2);
  const persenTaxEmp3 = taxGaji(gaji3);

  const taxEmp1 = persenTaxEmp1 * gaji1;
  const taxEmp2 = persenTaxEmp2 * gaji2;
  const taxEmp3 = persenTaxEmp3 * gaji3;

  const afterTaxEmp1 = taxEmp1 + gaji1;
  const afterTaxEmp2 = taxEmp2 + gaji2;
  const afterTaxEmp3 = taxEmp3 + gaji3;

  const total = afterTaxEmp1 + afterTaxEmp2 + afterTaxEmp3;

  const fcGaji1 = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(gaji1);
  const fcGaji2 = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(gaji2);
  const fcGaji3 = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(gaji3);

  const fcAfterTaxEmp1 = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(afterTaxEmp1);
  const fcAfterTaxEmp2 = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(afterTaxEmp2);
  const fcAfterTaxEmp3 = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(afterTaxEmp3);

  const fcTotal = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(total);

  return `
Total gaji yang harus dibayar :  
Emp1 : ${fcGaji1} + Pajak(${persenTaxEmp1 * 100}%) = ${fcAfterTaxEmp1}
Emp1 : ${fcGaji2} + Pajak(${persenTaxEmp2 * 100}%) = ${fcAfterTaxEmp2}
Emp1 : ${fcGaji3} + Pajak(${persenTaxEmp3 * 100}%) = ${fcAfterTaxEmp3}
Total : ${fcTotal}
`;
}

function taxGaji(gaji) {
  if (gaji >= 10000) {
    return (10 / 100).toFixed(2);
  } else if (gaji >= 1000 && gaji < 10000) {
    return (5 / 100).toFixed(2);
  } else if (gaji >= 100 && gaji < 1000) {
    return (2 / 100).toFixed(2);
  }
}

console.log(totalGaji(500, 2000, 12000));

/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */
