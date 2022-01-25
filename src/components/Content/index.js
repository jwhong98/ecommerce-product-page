import React from "react";
import {
  ContentContainer,
  Subtitle,
  Title,
  Description,
  Price,
  Current,
  Savings,
  Original,
  CartAction,
  AmountSelector,
  Minus,
  Plus,
  AddButton,
  CartIcon,
} from "./ContentElements";

import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cart from "../../images/icon-cart.svg";

const Content = () => {
  return (
    <ContentContainer>
      <Subtitle>sneaker company</Subtitle>
      <Title>fall limited edition sneakers</Title>
      <Description>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Description>
      <Price>
        <Current>$125.00</Current>
        <Savings>50%</Savings>
        <Original>$250.00</Original>
      </Price>
      <CartAction>
        <AmountSelector>
          {/* <Minus src={minus} />
          <Plus src={plus} /> */}
        </AmountSelector>
        <AddButton>
          <CartIcon src={cart} />
          Add to cart
        </AddButton>
      </CartAction>
    </ContentContainer>
  );
};

export default Content;
