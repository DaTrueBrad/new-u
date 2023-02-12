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
import store from "./store/store";
import NavContainer from "./NavContainer";

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
}
