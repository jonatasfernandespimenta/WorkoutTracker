import React from "react";
import { View } from "react-native";
import Text from "../Text";

import { Container } from "./styles";
import { TCircleWTextProps } from "./types";

const CircleWithText = (props: TCircleWTextProps) => {
  return (
    <Container
      onPress={props.onTouch}
      active={props.active}
      style={props.active ? {
        shadowColor: "#ce3df3",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
      } : null}
    >
      <Text>{props.text}</Text>
    </Container>
  );
};

export default CircleWithText;
