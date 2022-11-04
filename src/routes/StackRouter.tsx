import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Workouts from '../screens/Workouts';
import { RootStackParamList } from './types';
import TabNavigation from './TabNavigation';
import WorkoutInfo from '../screens/WorkoutInfo';

// import { Container } from './styles';


const RootStack = createNativeStackNavigator<RootStackParamList>();

const StackRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Tab" component={TabNavigation} />
        <RootStack.Screen name="Workout" component={WorkoutInfo} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default StackRouter;
