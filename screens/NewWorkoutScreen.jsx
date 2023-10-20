import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useReducer } from "react";
import { Button, Input } from "@rneui/themed";
import NewExerciseSection from "../components/NewExerciseSection";
import uuid from "react-native-uuid";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { url } from "../s";

const initialState = {
  title: "",
  exercises: [
    {
      exercise: "",
      sets: [
        {
          reps: null,
          weight: null,
        },
      ],
    },
  ],
};

export default function NewWorkoutScreen() {
  const [editName, setEditName] = useState(false);
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
        let newSet = {
          reps: null,
          weight: null,
        };
        let newState = { ...state, exercises: [...state.exercises] };

        newState.exercises[action.location].sets.push(newSet);
        return newState;

      case "CHANGEREPINFO":
        let newRepInfo = state;
        newRepInfo.exercises[action.exerciseLocation].sets[
          action.setLocation
        ].reps = action.payload;
        return newRepInfo;

      case "CHANGEWEIGHTINFO":
        let newWeightInfo = state;
        newWeightInfo.exercises[action.exerciseLocation].sets[
          action.setLocation
        ].weight = action.payload;
        return newWeightInfo;

      case "CHANGEEXERCISENAME":
        console.log("REDUCER");
        let newExerciseInfo = state;
        newExerciseInfo.exercises[action.exerciseLocation].exercise =
          action.payload;
        return newExerciseInfo;
      case "CHANGETITLE":
        let newTitleInfo = state
        newTitleInfo.title = action.payload
        return newTitleInfo
      case "RESET":
        return initialState
      default:
        console.log("DEFAULT");
        return state;
    }
  };

  // const url = "http://10.0.7.93:8080";
  const [state, dispatch] = useReducer(reducer, initialState);
  const userId = useSelector((state) => state.userId);
  const token = useSelector((state) => state.token);

  let display = state.exercises.map((e, i) => {
    let id = uuid.v4();
    return (
      <NewExerciseSection
        dispatch={dispatch}
        currentInfo={e}
        index={i}
        key={id}
      />
    );
  });

  const saveWorkout = () => {
    const body = {
      ...state,
      userId,
    };
    axios
      .post(url + "/api/createProgram", body)
      .then((res) => {
        console.log(res);
        alert("You successfully created a workout!")
        dispatch({type: "RESET"})
      })
      .catch((err) => {
        alert("Something went wrong...")
        console.error(err);
      });
    console.log("WORKOUT: ", state);
  };

  console.log("STATE: =>", state);
  return (
    <ScrollView className="pb-8">
      <SafeAreaView className="min-h-screen w-screen flex flex-col items-center bg-sky-900">
        <View className="px-4 flex-row w-screen justify-between items-start pt-12">
          {editName ? (
            <Input />
          ) : (
            <View className="text-left justify-start">
              <Text className="text-white text-5xl">Something</Text>
              <View className="flex-row items-center gap-3">
                <Text className="text-white text-5xl mt-1 ">New.</Text>
                <Foundation name="pencil" color="#38BDF9" size="30" />
              </View>
            </View>
          )}
          <Ionicons
            name="md-checkbox"
            color="#38BDF9"
            size={40}
            onPress={saveWorkout}
          />
        </View>
        <Input
      placeholder="Name Your Workout"
      onChangeText={(newTitle) => dispatch({type: "CHANGETITLE", payload: newTitle})}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 5,
          paddingLeft: 5,
          boxSizing: "border-box",
          marginTop: 15
        }}
      />
        {display}
        <Button
          onPress={() => dispatch({ type: "ADDEXERCISE" })}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["#38BDF9", "#2c9ed1"],
            // start: { x: '0', y: '0.5' },
            // end: { x: '1', y: '0.5' },
          }}
        >
          Add Exercise
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
}
