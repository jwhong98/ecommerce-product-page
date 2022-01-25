import React from "react";
import ReactDOM from "react-dom";
import {
  Backdrop,
  Cart,
  CartHead,
  CartContent,
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

const CartModal = (props) => {
  const portalElement = document.getElementById("overlay");
  const price = 125.0;
  const quantity = 3;
  const totalCost = price * quantity;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseCart}>
          <Cart>
            <CartHead>Cart</CartHead>
            <CartContent>
              <Item>
                <Img src={item} />
                <Info>
                  <Name>Autumn Limited Edition...</Name>
                  <Cost>
                    <Span>${price}</Span>
                    <Span> x {quantity}</Span>
                    <TotalCost> ${totalCost}</TotalCost>
                  </Cost>
                </Info>
                <Trash src={trash} />
              </Item>
              <Button>Checkout</Button>
            </CartContent>
          </Cart>
        </Backdrop>,
        portalElement
      )}
    </>
  );
};

export default CartModal;
