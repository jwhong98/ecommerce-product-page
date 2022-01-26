import styled from "styled-components";

export const ContentContainer = styled.section`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: hsl(26, 100%, 55%);
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.75rem;
`;

export const Description = styled.p`
  color: hsl(219, 9%, 45%);
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Current = styled.span`
  font-weight: 700;
  font-size: 1.75rem;
`;

export const Savings = styled.span`
  margin-left: 1rem;
  color: hsl(26, 100%, 55%);
  font-weight: 700;
  padding: 0.025rem 0.5rem;
  background-color: hsl(25, 100%, 94%);
  border-radius: 5px;
`;

export const Original = styled.span`
  margin-left: auto;
  color: hsl(220, 14%, 75%);
  /* font-weight: 700; */
  text-decoration: line-through;
`;

export const CartAction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Minus = styled.img``;

export const Plus = styled.img``;

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

  :hover {
    opacity: 60%;
  }
`;

export const CartIcon = styled.img`
  margin-right: 1rem;
  filter: brightness(0) invert(1);
`;
