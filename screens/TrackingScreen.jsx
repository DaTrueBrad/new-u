import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrackWorkout from "../components/TrackWorkout";
import WorkoutScreen from "./WorkoutScreen";

export default function TrackingScreen() {
  const Stack = createNativeStackNavigator();
  return (
    // <SafeAreaView className="min-h-screen w-screen flex flex-col bg-sky-900">
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Select"
      >
        <Stack.Screen name="Select" component={WorkoutScreen} />
        <Stack.Screen name="Track" component={TrackWorkout} />
      </Stack.Navigator>
    // </SafeAreaView>
  );
}
