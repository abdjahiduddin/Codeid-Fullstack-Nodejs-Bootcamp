/** A
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
  if (isNaN(price) && isNaN(tax)) {
    return "Price & Pajak harus dalam angka";
  }

  if (isNaN(price)) {
    return "Price harus dalam angka";
  }

  if (isNaN(tax)) {
    return "Pajak harus dalam angka";
  }

  const harga = parseInt(price);
  let pajak = parseInt(tax);

  pajak = (pajak / 100) * harga;
  const total = harga + pajak;

  const fcPrice = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDK",
  }).format(price);
  const fcPajak = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(pajak);
  const fcTotal = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(total);

  const result = `Total Sales : ${fcPrice}
Pajak : ${pajak}
Total Harga + Pajak : ${fcTotal}`;

  return result;
}

console.log(getSalesTax("a", 1)); //Price harus dalam angka
console.log(getSalesTax(500, "pajak")); //Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); //Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
