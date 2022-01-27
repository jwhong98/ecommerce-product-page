import styled from "styled-components";
import { device } from "../../deviceSize";

export const Container = styled.section`
  @media ${device.desktop} {
    margin: auto;
    max-width: 1100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
