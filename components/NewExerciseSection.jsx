import { View, Text, Button as TextButton } from "react-native";
import { Input } from "@rneui/themed";
import React from "react";
import uuid from "react-native-uuid";
import NewSet from "./NewSet";

export default function NewExerciseSection({ dispatch, index, currentInfo }) {

  const changeName = (newName) => {
    dispatch({type: "CHANGEEXERCISENAME", exerciseLocation: index, payload: newName})
  }

  const displaySets = currentInfo.sets.map((s, i) => {
    // let id = uuid.v4();
    return (
      <NewSet
        info={s}
        // key={id}
        index={i}
        dispatch={dispatch}
        exerciseIndex={index}
      />
    );
  });

  return (
    <View className="flex-col">
      <Input
        placeholder="Exercise"
        inputContainerStyle={{
          // backgroundColor: "#fff",
          borderRadius: 5,
          paddingLeft: 5,
          boxSizing: "border-box",
          width: "100%",
          color: "#38BDF9"
        }}
        inputStyle={{
          color: "#38BDF9",
          fontWeight: "600",
          fontSize: 26
        }}
        value={currentInfo.exercise}
        onChangeText={changeName}
      />
      {displaySets}
      <TextButton
        title="add set"
        onPress={() => dispatch({ type: "ADDSET", location: index })}
      />
    </View>
  );
}
