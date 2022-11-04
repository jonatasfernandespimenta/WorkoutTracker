import { MotiView } from "moti";
import React from "react";
import { Easing } from "react-native-reanimated";
import Text from "../Text";

import { Container } from "./styles";
import { TCircleWTextProps } from "./types";

const CircleWithText = (props: TCircleWTextProps) => {
  return (
    <MotiView
      from={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity:  1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        mass: 1,
        damping: 100,
        delay: props.index * 100,
      }}
    >
      <Container
        onPress={props.onTouch}
        active={props.active}
        style={
          props.active
            ? {
                shadowColor: "#ce3df3",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: 4,
              }
            : null
        }
      >
        <Text>{props.text}</Text>
      </Container>
    </MotiView>
  );
};

export default CircleWithText;
