import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
`;

export const Cart = styled.div`
  margin-top: 4.5rem;
  width: 95%;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.25);
`;

export const CartHead = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid hsl(220, 14%, 75%);
  font-weight: 700;
`;

export const CartContent = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CartEmpty = styled.div`
  width: 100%;
  height: 11.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: hsl(219, 9%, 45%);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: hsl(219, 9%, 45%);
`;

export const Img = styled.img`
  width: 3rem;
  border-radius: 5px;
`;

export const Info = styled.div`
  margin-left: 1rem;
  width: 100%;
`;

export const Name = styled.p`
  margin: 0;
`;

export const Cost = styled.div``;

export const Span = styled.span``;

export const TotalCost = styled.span`
  color: hsl(220, 13%, 13%);
  font-weight: 700;
`;

export const Trash = styled.img``;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: hsl(26, 100%, 55%);
  color: #fff;
  padding: 1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;

  :hover {
    opacity: 60%;
  }
`;
