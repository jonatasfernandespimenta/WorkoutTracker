import React from "react";
import MainLayout from "../../components/layouts/Main";
import Workout from "../../components/molecules/Workout";
import WorkoutHeader from "../../components/molecules/WorkoutHeader";

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
