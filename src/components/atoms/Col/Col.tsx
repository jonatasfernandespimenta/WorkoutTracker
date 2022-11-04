import React from "react";

import { Container } from "./styles";
import { TColProps } from "./types";

const Col = (props: TColProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Col;
