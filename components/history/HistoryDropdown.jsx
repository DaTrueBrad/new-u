import { View, Text } from "react-native";
import React from "react";
import {
  Collapse,
  CollapseBody,
  CollapseHeader,
} from "accordion-collapse-react-native";
import { Button } from "@rneui/themed";

export default function HistoryDropdown({program, navigation}) {
  console.log("PROGRAM",program.exercise_histories)
  const exerciseDisplay = program.exercise_histories.map((e) => {
    let setsMap = e.set_histories
    .sort((a,b) => a.order - b.order)
    .map((s) => <Text className="ml-2 text-white text-xl">{s.reps} reps of {s.weight}lbs</Text>)
    return <View>
      <Text className="ml-2 text-sky-200 text-3xl">
{e.name}
</Text>
{setsMap}
    </View>
  })

  const navigate = () => {
    navigation.navigate('Track', {id: program.id, workout: program})
  }
  return (
    // <View>
      <Collapse className="bg-sky-800 w-96 rounded-lg justify-center px-2 mt-2">
        <CollapseHeader>
          <View className="flex">
            <Text className="text-2xl text-sky-400">{program.title}</Text>
            <Text className="text-l text-sky-400">{new Date(program.createdAt).toDateString()}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          {exerciseDisplay}
          {/* <Button onPress={navigate}>Start</Button> */}
          <Text></Text>
        </CollapseBody>
      </Collapse>
    // </View>
  );
}
