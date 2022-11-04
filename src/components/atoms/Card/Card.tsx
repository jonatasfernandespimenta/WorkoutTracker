import React from "react";
import { TouchableOpacity } from "react-native";


import { Container } from "./styles";
import { TCardProps } from "./types";

const Card = (props: TCardProps) => {
  return (
    <Container
      minH={props.minH}
      height={props.height}
      {...(props?.touchable && { as: TouchableOpacity })}
      {...props}
    >
      {props.children}
    </Container>
  );
};

export default Card;






















































// penis grande e grosso