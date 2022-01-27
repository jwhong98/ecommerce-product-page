import styled from "styled-components";
import { device } from "../../deviceSize";

export const Menu = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-left: 2rem;
    gap: 1rem;
    height: 100%;
    color: hsl(219, 9%, 45%);
  }

  @media ${device.desktop} {
    margin-left: 3rem;
    gap: 2rem;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
`;
