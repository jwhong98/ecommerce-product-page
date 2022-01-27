import styled from "styled-components";

export const Thumbnail = styled.img`
  border-radius: 15px;
  width: 5.75rem;

  :hover,
  :focus {
    border: 3px solid hsl(26, 100%, 55%);
    opacity: 20%;
  }
`;
