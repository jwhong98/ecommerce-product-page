import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  price: 125,
  quantity: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + state.price * action.quantity;
    const updatedQuantity = state.quantity + action.quantity;

    return {
      price: 125,
      quantity: updatedQuantity,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (quantity) => {
    dispatchCartAction({ type: "ADD", quantity: quantity });
  };

  const removeItemFromCartHandler = () => {
    dispatchCartAction({ type: "REMOVE" });
  };

  const cartContext = {
    price: 125,
    quantity: cartState.quantity,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
