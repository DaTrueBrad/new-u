import { View, Text } from "react-native";
import React from "react";
import {
  Collapse,
  CollapseBody,
  CollapseHeader,
} from "accordion-collapse-react-native";
import { Button } from "@rneui/themed";

export default function Dropdown({program, navigation}) {
  const exerciseDisplay = program?.exercises.map((e) => {
    const sets = e.sets.length
    return <Text className="ml-2 text-white text-xl">{sets} {sets !== 1 ? "sets" : "set"} of {e.name}</Text>
  })

  const navigate = () => {
    navigation.navigate('Track', {id: program.id, workout: program})
  }
  return (
    // <View>
      <Collapse className="bg-sky-800 w-96 rounded-lg justify-center px-2 mt-2">
        <CollapseHeader>
          <View>
            <Text className="text-2xl text-sky-400">{program.title}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          {exerciseDisplay}
          <Button onPress={navigate}>Start</Button>
          <Text></Text>
        </CollapseBody>
      </Collapse>
    // </View>
  );
}
