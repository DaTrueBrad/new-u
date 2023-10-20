import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useState, useContext } from "react";
import Dashboard from "./screens/Dashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import NewWorkoutScreen from "./screens/NewWorkoutScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import ArticleScreen from "./screens/ArticleScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Provider, useSelector } from "react-redux";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TrackWorkout from "./components/TrackWorkout";
import TrackingScreen from "./screens/TrackingScreen";

export default function NavContainer() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();

  const dashboardOptions = {
    tabBarIcon: ({ color }) => {
      return <MaterialCommunityIcons name="home" color={color} size={26} />;
    },
  };
  const newOptions = {
    tabBarIcon: ({ color }) => {
      return <MaterialCommunityIcons name="plus" color={color} size={26} />;
    },
  };
  const startOptions = {
    tabBarIcon: ({ color }) => {
      return <MaterialCommunityIcons name="dumbbell" color={color} size={26} />;
    },
  };
  const articleOptions = {
    tabBarIcon: ({ color }) => {
      return (
        <MaterialCommunityIcons name="newspaper" color={color} size={26} />
      );
    },
  };
  const profileOptions = {
    tabBarIcon: ({ color }) => {
      return <MaterialCommunityIcons name="home" color={color} size={26} />;
    },
  };
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator
          shifting={true}
          activeColor="#38BDF9"
          inactiveColor="#ffffff"
          barStyle={{
            backgroundColor: "#0c4a6e",
          }}
        >
          <Tab.Screen
            options={dashboardOptions}
            name="Dashboard"
            component={Dashboard}
            tabBarLabel="Hello"
          />
          <Tab.Screen
            options={newOptions}
            name="New"
            component={NewWorkoutScreen}
          />
            {/* <Tab.Screen
              options={startOptions}
              name="Start"
              component={WorkoutScreen}
            /> */}
            <Tab.Screen
              options={startOptions}
              name="Start"
              component={TrackingScreen}
            />
          <Tab.Screen
            options={articleOptions}
            name="Articles"
            component={ArticleScreen}
          />
          <Tab.Screen
            options={profileOptions}
            name="Profile"
            component={ProfileScreen}
          />
        </Tab.Navigator>
      ) : (
        <HomeScreen />
      )}
    </NavigationContainer>
  );
}
