import styled from "styled-components";
import { device } from "../../deviceSize";

export const Span = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: hsl(223, 64%, 98%);
  border-radius: 10px;
  margin-bottom: 1rem;
  font-weight: 700;

  @media ${device.desktop} {
    max-width: 9rem;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Minus = styled.img`
  cursor: pointer;

  :hover {
    opacity: 60%;
  }
`;

export const Plus = styled.img`
  cursor: pointer;

  :hover {
    opacity: 60%;
  }
`;

export const AddButton = styled.button`
  border: none;
  background-color: hsl(26, 100%, 55%);
  color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 10px;
  width: 100%;

  :hover {
    opacity: 60%;
  }
`;

export const CartIcon = styled.img`
  margin-right: 1rem;
  filter: brightness(0) invert(1);
`;
