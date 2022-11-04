import { useRoute, RouteProp, useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/atoms/Button";
import Card from "../../components/atoms/Card";
import Col from "../../components/atoms/Col";
import Row from "../../components/atoms/Row";
import Text from "../../components/atoms/Text";
import Input from "../../components/Input";
import MainLayout from "../../components/layouts/Main/MainLayout";
import WorkoutInfoHeader from "../../components/molecules/WorkoutInfoHeader";
import { RootStackParamList } from "../../routes/types";

const WorkoutInfo = () => {
  const [weight, setWeight] = useState('');
  const [sets, setSets] = useState(0);
  const [done, setDone] = useState(false);

  const route = useRoute<RouteProp<RootStackParamList, 'Workout'>>();

  useEffect(() => {
    if(sets == Number(route?.params?.sets)) {
      setDone(true);
    }
  }, [sets])

  const onPress = () => {
    setSets(old => old +1);
  }

  return (
    <>
      <WorkoutInfoHeader title={route?.params.title} />

      <MainLayout>
        <Card height="100%">
          <Row>
            <Col align="flex-start"  flex={.5}>
              <Text bold>Carga</Text>
              <Input onChangeText={(value) => setWeight(value)} metric="KG" value={weight} />
            </Col>

            <Col align="flex-start" flex={.22}>
              <Text bold>Séries</Text>
              <Input metric={route?.params?.sets} value={sets.toString()} filled={done} />
            </Col>
          </Row>

          <Button onPress={onPress} title="Nova Série" />
        </Card>

      </MainLayout>
    </>
  );
};

export default WorkoutInfo;
