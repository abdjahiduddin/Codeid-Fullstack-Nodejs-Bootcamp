export default class Product {
  constructor(prodId, prodName, category, price = 0, totalBuy = 1) {
    this.prodId = prodId;
    this.prodName = prodName;
    this.category = category;
    this.price = price;
    this.totalBuy = totalBuy;
    this.subTotal = price * totalBuy;
  }

  setPrice(price) {
    this.price = price;
    this.setSubTotal(price, this.totalBuy)
  }

  setTotalBuy(total) {
    this.totalBuy = total;
    this.setSubTotal(this.price, total)
  }

  setSubTotal(price, total) {
     this.subTotal = price * total 
  }

  toString() {
    return `===============================
ID: ${this.prodId}
Product Name: ${this.prodName}
Category: ${this.category}
Price: ${this.price}
Total Buy: ${this.totalBuy}
Total Harga: ${this.subTotal}
===============================`;
  }
}
