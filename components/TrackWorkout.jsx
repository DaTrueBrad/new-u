import { View, Text, SafeAreaView } from "react-native";
import React, { useMemo, useReducer } from "react";
import ExerciseTracking from "./ExerciseTracking";
import { Button } from "@rneui/themed";
import uuid from "react-native-uuid";
import { url } from "../s";
import { useSelector } from "react-redux";
import axios from "axios";

export default function TrackWorkout({ route, navigation }) {
  const { id, workout } = route.params;
  const userId = useSelector((s) => s.userId);

  const goBack = () => {
    navigation.navigate("Select");
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FINISH":
        state.userId = userId;
        axios
          .post(url + "/api/logWorkout", state)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });
        return state;
      case "CHANGEREPINFO":
        console.log(
          "\u001b[1;34m" + action.exerciseLocation + " " + action.payload
        );
        let newRepInfo = state;
        newRepInfo.exercises[action.exerciseLocation].sets[
          action.setLocation
        ].reps = action.payload;
        return newRepInfo;

      case "CHANGEWEIGHTINFO":
        console.log("inside weight info");
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
        let newTitleInfo = state;
        newTitleInfo.title = action.payload;
        return newTitleInfo;

      default:
        let firstState = state;
        firstState.programId = id;
        // ? state should be initialized as the variabel workout from the params because it is the initial structure, but we then alter each rep /set/weight as we alter the input fields.
        return firstState;
    }
  };

  const [state, dispatch] = useReducer(reducer, workout);

  const exerciseDisplay = state.exercises
    .sort((a, b) => a.order - b.order)
    .map((e, i) => {
      return (
        <ExerciseTracking
          key={e.id}
          index={i}
          exercise={e}
          dispatch={dispatch}
        />
      );
    });

  const finishWorkout = () => {
    dispatch({ type: "FINISH" });
  };

  return (
    <SafeAreaView className="min-h-screen w-screen flex flex-col bg-sky-900">
      <Text className="text-white" onPress={goBack}>
        {"<"} Cancel
      </Text>
      <View className="w-screen">
        <Text className="px-4 text-white text-5xl mt-12">{workout.title}</Text>
        {/* <Text className="text-gray-500">Params: {id}</Text>; */}
        {exerciseDisplay.length !==0 && exerciseDisplay}
        <Button onPress={finishWorkout}>Finish</Button>
      </View>
    </SafeAreaView>
  );
}
