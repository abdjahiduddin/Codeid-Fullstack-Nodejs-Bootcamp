/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
  if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
    return "Price, Tax & Discount harus dalam angkaa";
  }

  if (isNaN(price)) {
    return "Price harus dalam angka";
  }

  if (isNaN(tax)) {
    return "Pajak harus dalam angka";
  }

  if (isNaN(discount)) {
    return "Diskon harus dalam angka";
  }

  price = parseInt(price);
  tax = parseInt(tax);
  discount = parseInt(discount);

  const diskon = (discount / 100) * price;
  const hargaSetelahDiskon = price + diskon;
  const pajak = (tax / 100) * hargaSetelahDiskon;
  const total = hargaSetelahDiskon + pajak;

  const fcHarga = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
  const fcDiskon = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(diskon);
  const fcHargaSetelahDiskon = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(hargaSetelahDiskon);
  const fcPajak = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(pajak);
  const fcTotal = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(total);

  return `Total Sales         : ${fcHarga}
Discount (${discount}%)       : ${fcDiskon}
PriceAfterDiscount  : ${fcHargaSetelahDiskon}
Pajak (${tax}%)         : ${fcPajak}
----------------------------------
TotalPayment        : ${fcTotal}`;
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
