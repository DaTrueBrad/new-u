import { View, Text } from "react-native";
import React from "react";

export default function Input(props) {
  return (
    <Input
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      inputContainerStyle={{
        backgroundColor: "#fff",
        borderRadius: 5,
        paddingLeft: 5,
        boxSizing: "border-box",
      }}
    />
  );
}
