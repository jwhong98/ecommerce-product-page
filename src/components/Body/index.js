import React from "react";
import { Container } from "./BodyElements";

const Body = (props) => {
  return <Container>{props.children}</Container>;
};

export default Body;
