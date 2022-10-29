import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Workouts from "../screens/Workouts";

import MIcons from '@expo/vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Workouts') {
            iconName = 'dumbbell';
          }

          return <MIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#CE3DF3',
        tabBarStyle: {
          backgroundColor: "#272A33",
          borderTopColor: "#CE3DF3",
          borderTopWidth: 2,
        },
        tabBarShowLabel: false
      })}>
      <Tab.Screen name="Workouts" component={Workouts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
