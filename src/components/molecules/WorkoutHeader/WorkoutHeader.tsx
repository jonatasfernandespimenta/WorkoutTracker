import React, { useState } from "react";
import { View } from "react-native";
import CircleWithText from "../../atoms/CircleWithText";
import Header from "../../atoms/Header";

import { Container } from "./styles";

const week = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

const currWeekDay = new Date().getDay();

const WorkoutHeader: React.FC = () => {
  const [active, setActive] = useState(currWeekDay);

  return (
    <Header>
      <Container horizontal>
        {week.map((day, id) => (
          <CircleWithText
            text={day}
            key={id}
            active={active === id}
            onTouch={() => setActive(id)}
          />
        ))}
      </Container>
    </Header>
  );
};

export default WorkoutHeader;
