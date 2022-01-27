import styled from "styled-components";
import { device } from "../../deviceSize";

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;

  @media ${device.tablet} {
    margin-bottom: 2rem;
  }

  @media ${device.desktop} {
    height: 7rem;
    margin-bottom: 5rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    border-bottom: 1px solid rgba(182, 188, 200, 0.25);
  }

  @media ${device.desktop} {
    max-width: 1100px;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleMenu = styled.img`
  margin-right: 1rem;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Logo = styled.img``;

export const Personal = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  @media ${device.desktop} {
    margin-right: 3rem;
  }
`;

export const Cart = styled.img`
  cursor: pointer;
  /* margin-right: 1.25rem; */
`;

export const Badge = styled.span`
  vertical-align: top;
  position: relative;
  font-size: 0.5rem;
  left: -0.75rem;
  z-index: 5;
  padding: 1px 8px;
  background-color: hsl(26, 100%, 55%);
  border-radius: 10px;
  color: #fff;
  /* margin-left: -1.25rem; */

  @media ${device.desktop} {
  }
`;

export const Profile = styled.img`
  width: 1.5rem;
  cursor: pointer;

  @media ${device.desktop} {
    width: 3rem;
  }
`;
