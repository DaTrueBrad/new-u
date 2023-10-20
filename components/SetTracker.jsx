import { View, Text } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";

export default function SetTracker({ set, dispatch, exerciseIndex, index }) {
  const changeRepInfo = (newText) => {
    console.log("\u001b[1;34m" + "Inside Set Tracker");
    dispatch({
      type: "CHANGEREPINFO",
      exerciseLocation: exerciseIndex,
      setLocation: index,
      payload: newText,
    });
  };
  const changeWeightInfo = (newText) => {
    dispatch({
      type: "CHANGEWEIGHTINFO",
      exerciseLocation: exerciseIndex,
      setLocation: index,
      payload: newText,
    });
  };

  return (
    <View className="flex-row justify-center w-96 h-12">
      <Input
        placeholder={`${set.reps} reps`}
        keyboardType="numeric"
        containerStyle={{
          margin: 0,
          width: "50%",
        }}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 5,
          paddingLeft: 5,
          boxSizing: "border-box",
          width: "100%",
          margin: 0,
          // position: "relative",
          // top: 0,
          // left: "100%",
        }}
        onChangeText={changeRepInfo}
      />
      <Input
        placeholder={`${set.weight}lbs`}
        keyboardType="numeric"
        containerStyle={{
          margin: 0,
          width: "50%",
        }}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 5,
          paddingLeft: 5,
          boxSizing: "border-box",
          width: "100%",
          margin: 0,
        }}
        onChangeText={changeWeightInfo}
      />
    </View>
  );
}
