import React, { memo } from "react";
import Card from "../../atoms/Card";
import Row from "../../atoms/Row";
import Text from "../../atoms/Text";
import { Feather } from "@expo/vector-icons";

import { Container } from "./styles";
import { TWorkoutProps } from "./types";
import Difficulty from "../../atoms/Difficulty";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const Workout = (props: TWorkoutProps) => {
  return (
    <Card touchable onPress={props.onPress}>
      <Container>
        <Row>
          <Text bold>{props.title}</Text>
          <Feather
            name="check"
            size={24}
            color={props.done ? "#ce3df3" : "#6B6B6B"}
          />
        </Row>

        <Text>
          {props.sets}x{props.reps}
        </Text>
        <Row>
          <Row>
            <Text>Carga: {props.weight}</Text>
            <Text color={props.performance[0] === "+" ? "#0AFC05" : "#F07575"}>
              {props.performance}%
            </Text>
          </Row>

          <Difficulty difficulty={props.difficulty} />
        </Row>
      </Container>
    </Card>
  );
};

export default memo(Workout, (prevProps, nextProps) => {
  if (prevProps.title !== nextProps.title) {
    return false;
  }

  return true;
});
