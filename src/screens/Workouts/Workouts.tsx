import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";
import React, { useCallback, useMemo, useState } from "react";
import { FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
import { Easing } from "react-native-reanimated";
import MainLayout from "../../components/layouts/Main";
import Workout from "../../components/molecules/Workout";
import { TWorkoutProps } from "../../components/molecules/Workout/types";
import WorkoutHeader from "../../components/molecules/WorkoutHeader";
import { getCurrentWeekDay, getCurrentWeekDayLabel } from "../../utils/helpers";

// import { Container } from './styles';

const workouts: Omit<TWorkoutProps, "index" | 'onPress'>[] = [
  {
    title: "Supino Inclinado (Aquecimento)",
    reps: "20",
    sets: "2",
    weight: "10KG",
    done: true,
    performance: "+6",
    difficulty: 5,
    weekday: 'SEX'
  },

  {
    title: "Supino Inclinado",
    reps: "12",
    sets: "4",
    weight: "10KG",
    done: false,
    performance: "+10",
    difficulty: 0,
    weekday: 'SEX'
  },

  {
    title: "Supino Reto",
    reps: "12",
    sets: "4",
    weight: "10KG",
    done: false,
    performance: "-5",
    difficulty: 0,
    weekday: 'SEG'
  },
];

const keyExtractor = ({ title }: typeof workouts[number]) =>
  title.toLowerCase();

const Workouts: React.FC = () => {
  const navigation = useNavigation();

  const [activeDay, setActiveDay] = useState(getCurrentWeekDay());

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<typeof workouts[number]>) => (
      <Workout
        index={index}
        {...item}
        onPress={() =>
          navigation.navigate("Workout", { title: item.title, sets: item.sets })
        }
      />
    ),
    []
  );

  const filteredWorkouts = useMemo(() => {
    return workouts.filter(workout => workout.weekday === getCurrentWeekDayLabel(activeDay));
  }, [activeDay])

  return (
    <>
      <WorkoutHeader active={activeDay} onChange={setActiveDay} />
      <MainLayout>
        <FlatList
          data={filteredWorkouts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </MainLayout>
    </>
  );
};

export default Workouts;
