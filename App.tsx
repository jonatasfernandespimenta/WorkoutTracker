import { StatusBar } from "expo-status-bar";
import React from "react";
import MainLayout from "./src/layouts/Main/MainLayout";
import WorkoutHeader from "./src/molecules/WorkoutHeader";
import Workout from "./src/molecules/Workout";
import StackRouter from "./src/routes/StackRouter";
import TabNavigation from "./src/routes/TabNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <TabNavigation />
    </>
  );
}
