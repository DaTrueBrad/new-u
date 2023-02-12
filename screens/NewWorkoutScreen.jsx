import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useReducer } from "react";
import { Button, Input } from "@rneui/themed";
import { Button as TextButton } from "react-native";
import NewExerciseSection from "../components/NewExerciseSection";
import uuid from "react-native-uuid";

const initialState = {
  title: "",
  exercises: [
    {
      exercise: "",
      sets: [
        {
          reps: "7",
          weight: null,
        },
      ],
    },
  ],
};

export default function NewWorkoutScreen() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADDEXERCISE":
        const newExercise = {
          exercise: "",
          sets: [
            {
              reps: 0,
              weight: 0,
            },
          ],
        };
        return { ...state, exercises: [...state.exercises, newExercise] };
      case "ADDSET":
        // let newSet = [...state.exercises[action.location].sets]
        let newSet = {
          reps: 0,
          weight: 0,
        };

        console.log(newSet);
        // newSet = newSet.pop()
        let newState = { ...state, exercises: [...state.exercises] };

        newState.exercises[action.location].sets.push(newSet);
        return { ...newState };
      case "CHANGEREPINFO":
        let newRepInfo = { ...state };
        newRepInfo.exercises[action.exerciseLocation].sets[
          action.setLocation
        ].reps = action.payload;
        return { ...newRepInfo };
      case "CHANGEWEIGHTINFO":
        state.exercises[action.exerciseLocation].sets[
          action.setLocation
        ].weight = action.payload;
        return { ...state };
      case "CHANGEEXERCISENAME":
        let newExerciseInfo = {...state}
        newExerciseInfo.exercises[action.exerciseLocation].exercise = action.payload
        return {...newExerciseInfo}
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  let display = state.exercises.map((e, i) => {
    // let id = uuid.v4();
    return (
      <NewExerciseSection
        dispatch={dispatch}
        currentInfo={e}
        index={i}
        // key={id}
      />
    );
  });
  console.log("STATE: =>", state);
  return (
    <ScrollView className="pb-8">
      <SafeAreaView className="min-h-screen w-screen flex flex-col items-center bg-sky-900">
        <View className="px-4 text-left w-screen">
          <Text className="text-white text-5xl mt-12">Something</Text>
          <Text className="text-white text-5xl mt-1">New.</Text>
        </View>
        {display}
        <Button onPress={() => dispatch({ type: "ADDEXERCISE" })}>
          Add Exercise
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
}
