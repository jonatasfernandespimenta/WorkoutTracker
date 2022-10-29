import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Workouts from '../screens/Workouts';
import { RootStackParamList } from './types';

// import { Container } from './styles';


const RootStack = createNativeStackNavigator<RootStackParamList>();

const StackRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Workouts" component={Workouts} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default StackRouter;
