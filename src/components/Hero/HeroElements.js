import styled from "styled-components";
import { device } from "../../deviceSize";

export const HeroContainer = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 70%;

    border-radius: 5px;
  }

  @media ${device.desktop} {
    max-width: 460px;
  }
`;

export const HeroImg = styled.img`
  @media ${device.tablet} {
    border-radius: 20px;
  }
`;

export const ThumbnailContainer = styled.div`
  display: none;

  @media ${device.desktop} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;
