import React from "react";

const CartContext = React.createContext({
  price: 125,
  quantity: 0,
  totalAmount: 0,
  addItem: (quantity) => {},
  removeItem: () => {},
});

export default CartContext;
