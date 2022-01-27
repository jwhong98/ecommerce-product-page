import styled from "styled-components";
import { device } from "../../deviceSize";

export const ContentContainer = styled.section`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    width: 65%;
  }

  @media ${device.desktop} {
    max-width: 460px;
  }
`;

export const Subtitle = styled.p`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: hsl(26, 100%, 55%);
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media ${device.desktop} {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.75rem;

  @media ${device.desktop} {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

export const Description = styled.p`
  color: hsl(219, 9%, 45%);

  @media ${device.desktop} {
    margin-bottom: 1.5rem;
  }
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
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
  text-decoration: line-through;

  @media ${device.desktop} {
    flex-basis: 100%;
  }
`;

export const CartAction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const CartIcon = styled.img`
  margin-right: 1rem;
  filter: brightness(0) invert(1);
`;
