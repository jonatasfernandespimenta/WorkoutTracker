export type RootStackParamList = {
  Tab: undefined;
  Workout: {
    title: string,
    sets: string,
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
