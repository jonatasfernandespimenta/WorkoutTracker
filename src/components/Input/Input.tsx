import React from "react";
import { TextInputProps, View } from "react-native";
import RenderIf from "../atoms/RenderIf";
import Text from "../atoms/Text";
import {StatusBar} from 'expo-status-bar';

import { Container, Metric, StyledInput } from "./styles";
import { TInputProps } from "./types";

const Input = (props: TInputProps & TextInputProps) => {
  return (
    <Container width={props.width}>
      <StyledInput {...props} />
      <StatusBar style={'light'}/>
      <RenderIf condition={props.metric}>
        <Metric metric={props.metric}>
          <Text color="white">{props.metric}</Text>
        </Metric>
      </RenderIf>
    </Container>
  );
};

export default Input;
