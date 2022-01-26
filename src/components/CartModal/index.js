import React, { useContext } from "react";
import ReactDOM from "react-dom";
import {
  Backdrop,
  Cart,
  CartHead,
  CartContent,
  CartEmpty,
  Item,
  Img,
  Info,
  Name,
  Cost,
  Span,
  TotalCost,
  Trash,
  Button,
} from "./CartModalElements";
import item from "../../images/image-product-1-thumbnail.jpg";
import trash from "../../images/icon-delete.svg";
import CartContext from "../store/cart-context";

const CartModal = (props) => {
  const portalElement = document.getElementById("overlay");
  const cartCtx = useContext(CartContext);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseCart}>
          <Cart>
            <CartHead>Cart</CartHead>
            {cartCtx.quantity !== 0 ? (
              <CartContent>
                <Item>
                  <Img src={item} />
                  <Info>
                    <Name>Autumn Limited Edition...</Name>
                    <Cost>
                      <Span>${cartCtx.price.toFixed(2)}</Span>
                      <Span> x {cartCtx.quantity}</Span>
                      <TotalCost> ${cartCtx.totalAmount.toFixed(2)}</TotalCost>
                    </Cost>
                  </Info>
                  <Trash src={trash} />
                </Item>
                <Button>Checkout</Button>
              </CartContent>
            ) : (
              <CartEmpty>Your cart is empty.</CartEmpty>
            )}
          </Cart>
        </Backdrop>,
        portalElement
      )}
    </>
  );
};

export default CartModal;
