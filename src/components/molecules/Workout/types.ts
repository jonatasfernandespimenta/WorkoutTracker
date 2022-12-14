export type TWorkoutProps = {
  title: string;
  sets: string;
  reps: string;
  weight?: string;
  performance: string;
  difficulty: number;
  done: boolean;
  index: number;
  onPress?: () => void;
  weekday?: string;
};
