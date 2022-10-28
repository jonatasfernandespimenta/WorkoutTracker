import React, { useState } from "react";
import { View } from "react-native";
import CircleWithText from "../../atoms/CircleWithText";
import Header from "../../atoms/Header";

import { Container } from "./styles";

const week = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

const WorkoutHeader: React.FC = () => {
  const [active, setActive] = useState(0);

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
