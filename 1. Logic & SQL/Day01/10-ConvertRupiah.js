/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
    const rates = {
        "yen": 114.81,
        "usd": 14631.80,
        "euro": 15609.94
    }

    if (!rates[type]) {
        return "no match type currency"
    }

    const rupiah = money * rates[type]
    const fcRupiah = new Intl.NumberFormat("ID", {style:"currency", currency:"IDR"}).format(rupiah)

    return `${money} ${type} = ${fcRupiah}`
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency