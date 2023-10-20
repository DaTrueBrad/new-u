import { View, Text } from "react-native";
import React, { useMemo } from "react";
import { Input } from "@rneui/themed";
import SetTracker from "./SetTracker";
import uuid from "react-native-uuid";

export default function ExerciseTracking({ exercise, dispatch, index }) {
  // const setDisplay = useMemo(() => {
  //   return exercise.sets
  //     .sort((a, b) => a.order - b.order)
  //     .map((s, i) => {
  //       let id = uuid.v4();
  //       return (
  //         <SetTracker
  //           exerciseIndex={index}
  //           set={s}
  //           key={id}
  //           index={i}
  //           dispatch={dispatch}
  //         />
  //       );
  //     });
  // }, []);
  const setDisplay = exercise.sets
    .sort((a, b) => a.order - b.order)
    .map((s, i) => {
      return (
        <SetTracker
          exerciseIndex={index}
          set={s}
          key={s.id}
          index={i}
          dispatch={dispatch}
        />
      );
    });

  return (
    <View className="flex-col">
      <Text className=" px-4 text-2xl text-sky-500 font-semibold">
        {exercise.name}
      </Text>
      {setDisplay}
    </View>
  );
}
