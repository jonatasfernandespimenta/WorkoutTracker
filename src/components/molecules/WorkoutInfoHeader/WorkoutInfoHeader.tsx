import React from "react";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";

import { Container } from "./styles";
import MIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WorkoutInfoHeader: React.FC = () => {
  const navigation: any = useNavigation();

  return (
    <Header>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Workouts')}>
          <MIcon color={"white"} size={20} name="chevron-left" />
        </TouchableOpacity>

        <Text bold>Supino Reto</Text>
        <Text></Text>
      </Container>
    </Header>
  );
};

export default WorkoutInfoHeader;
