import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Workouts from "../screens/Workouts";

import MIcons from "@expo/vector-icons/MaterialCommunityIcons";
import WorkoutInfo from "../screens/WorkoutInfo";

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

            switch (route.name) {
              case "Workouts":
                iconName = "dumbbell";
                break;

              case "Water":
                iconName = "water";
                break;

              case "Dashboard":
                iconName = "view-dashboard";
                break;

              default:
                break;
            }

            return <MIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#CE3DF3",
          tabBarInactiveTintColor: "#1C1F26",
          tabBarStyle: {
            backgroundColor: "#272A33",
            borderTopColor: "#CE3DF3",
            borderTopWidth: 2,
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Water" component={WorkoutInfo} />
        <Tab.Screen name="Workouts" component={Workouts} />
        <Tab.Screen name="Dashboard" component={Workouts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
