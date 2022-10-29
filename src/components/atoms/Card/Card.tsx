import React from "react";
import RenderIf from "../RenderIf";

import { Container, TouchableContainer } from "./styles";
import { TCardProps } from "./types";

const Card = (props: TCardProps) => {
  return (
    <>
      <RenderIf condition={props.touchable}>
        <TouchableContainer onPress={props.onPress} minH={props.minH} height={props.height}>
          {props.children}
        </TouchableContainer>
      </RenderIf>

      <RenderIf condition={!props.touchable}>
        <Container minH={props.minH} height={props.height}>
          {props.children}
        </Container>
      </RenderIf>
    </>
  );
};

export default Card;
