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
} from "./ContentElements";

import AmountSelector from "../AmountSelector";

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
        <AmountSelector />
      </CartAction>
    </ContentContainer>
  );
};

export default Content;
