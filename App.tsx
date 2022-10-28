import { StatusBar } from "expo-status-bar";
import React from "react";
import MainLayout from "./src/layouts/Main/MainLayout";
import WorkoutHeader from "./src/molecules/WorkoutHeader";
import Workout from "./src/molecules/Workout";

export default function App() {
  return (
    <>
      <WorkoutHeader />
      <MainLayout>
        <StatusBar style="auto" />

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
}
