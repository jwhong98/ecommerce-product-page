import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Overlay = styled.div`
  width: 70%;
  background-color: #fff;
  height: 100%;
  z-index: 21;
  padding: 1rem;
`;

export const CloseIcon = styled.img``;

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
`;

export const Item = styled.li`
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;
