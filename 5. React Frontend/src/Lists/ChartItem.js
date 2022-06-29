import React, { useState, useEffect } from "react";

export default function ChartItem() {
  const listChart = [
    { prodId: 1, prodName: "Shampoo", qty: 1, salary: 5000 },
    { prodId: 2, prodName: "Shoap", qty: 1, salary: 4000 },
    { prodId: 3, prodName: "Tooth Paste", qty: 1, salary: 6000 },
  ];

  const [cart, setCart] = useState(listChart);
  const [total, setTotal] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    const TotalHarga = cart.reduce(
      (sum, item) => sum + item.salary * item.qty,
      0
    );
    setTotal(TotalHarga);
    const TotalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    setTotalQty(TotalQty);
  });

  const increment = (id) => {
    setCart([
      ...cart.map((item) => {
        if (id === item.prodId) {
          item.qty++;
          return item;
        } else {
          return item;
        }
      }),
    ]);
  };

  const decrement = (id) => {
    setCart([
      ...cart.map((item) => {
        if (id === item.prodId) {
          item.qty--;
          if (item.qty < 0) {
            item.qty = 0;
          }
          return item;
        } else {
          return item;
        }
      }),
    ]);
  };

  return (
    <div>
      <h2>List of Charts</h2>
      <table>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Salary</th>
        <th>Sub Total</th>
        <th>Action</th>
        <tbody>
          {(cart || []).map((cart) => (
            <tr key={cart.prodId}>
              <td>{cart.prodId}</td>
              <td>{cart.prodName}</td>
              <td>{cart.qty}</td>
              <td>{cart.salary}</td>
              <td>{cart.qty * cart.salary}</td>
              <td>
                <button onClick={() => increment(cart.prodId)}>+</button>
                <button onClick={() => decrement(cart.prodId)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Harga : Rp.{total}</h3>
      <h3>Total Quantity : {totalQty}</h3>
    </div>
  );
}
