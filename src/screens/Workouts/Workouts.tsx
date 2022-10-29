import React from "react";
import { View } from "react-native";
import MainLayout from "../../layouts/Main/MainLayout";
import Workout from "../../molecules/Workout";
import WorkoutHeader from "../../molecules/WorkoutHeader";

// import { Container } from './styles';

const Workouts: React.FC = () => {
  return (
    <>
      <WorkoutHeader />
      <MainLayout>
        <Workout
          difficulty={5}
          reps={"20"}
          sets={"2"}
          title={"Supino Inclinado (Aquecimento)"}
          performance={"+6"}
          weight={"10KG"}
          done
        />

        <Workout
          difficulty={3}
          reps={"12"}
          sets={"4"}
          title={"Supino Inclinado"}
          performance={"+6"}
          weight={"10KG"}
          done
        />

        <Workout
          difficulty={0}
          reps={"10"}
          sets={"4"}
          title={"Supino Reto"}
          performance={"+0"}
          weight={""}
          done={false}
        />
      </MainLayout>
    </>
  );
};

export default Workouts;
