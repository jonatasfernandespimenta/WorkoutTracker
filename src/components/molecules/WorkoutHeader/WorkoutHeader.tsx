import React, { useState } from "react";
import { View } from "react-native";
import CircleWithText from "../../atoms/CircleWithText";
import Header from "../../atoms/Header";

import { Container } from "./styles";

const week = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

const currWeekDay = new Date().getDay();

interface WorkoutHeaderProps {
  active: number;
  onChange: (value: number) => void;
}

const WorkoutHeader: React.FC<WorkoutHeaderProps> = ({ active, onChange }) => {
  return (
    <Header>
      <Container horizontal>
        {week.map((day, index) => (
          <CircleWithText
            text={day}
            index={index}
            key={day}
            active={active === index}
            onTouch={() => onChange(index)}
          />
        ))}
      </Container>
    </Header>
  );
};

export default WorkoutHeader;
