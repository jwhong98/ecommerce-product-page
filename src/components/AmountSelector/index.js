import React, { useContext, useState } from "react";
import {
  Span,
  Minus,
  Plus,
  AddButton,
  CartIcon,
} from "./AmountSelectorElements";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cart from "../../images/icon-cart.svg";
import CartContext from "../store/cart-context";

const AmountSelector = () => {
  const [amount, setAmount] = useState(0);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem(amount);
  };
  const onMinus = () => {
    if (amount === 0) {
      return;
    } else {
      setAmount(amount - 1);
    }
  };
  const onPlus = () => {
    setAmount(amount + 1);
  };
  return (
    <>
      <Span>
        <Minus src={minus} onClick={onMinus} />
        {amount}
        <Plus src={plus} onClick={onPlus} />
      </Span>
      <AddButton onClick={addToCartHandler}>
        <CartIcon src={cart} />
        Add to cart
      </AddButton>
    </>
  );
};

export default AmountSelector;
