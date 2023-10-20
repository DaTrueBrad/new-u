import { View, Text, SafeAreaView } from "react-native";
import React, {useState, useCallback} from "react";
import {
  Collapse,
  CollapseBody,
  CollapseHeader,
} from "accordion-collapse-react-native";
import Dropdown from "../components/Dropdown";
import { Input } from "@rneui/themed";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../s";
import { useFocusEffect } from "@react-navigation/native";

export default function WorkoutScreen({navigation}) {
  const [programs, setPrograms] = useState([])
  const [search, setSearch] = useState("")
  const userId = useSelector((state) => state.userId)
  const token = useSelector((state) => state.token)

  const getData = () => {
      axios
      .get(url + '/api/getPrograms/' + userId)
      .then((res) => {
        // console.log("GET WORKOUT",res)
        setPrograms(res.data)
      })
      .catch((err) => {
        console.error("ERROR",err)
      })
    }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    getData()
    })
    return unsubscribe
  }, [navigation])

  const programDisplay = programs
  .filter((p) => {
    if(search === "") return p
    return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })
  .map((p) => {
    return <Dropdown program={p} key={p.id} navigation={navigation}/>
  })
  return (
    <SafeAreaView className="min-h-screen min-w-screen flex flex-col bg-sky-900">
      <View className="px-4">
        <Text className="text-white text-5xl mt-12">Start a</Text>
        <Text className="text-white text-5xl mt-1">Workout</Text>
      </View>
      <Input
      placeholder="Search"
      onChangeText={(newVal) => setSearch(newVal)}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 5,
          paddingLeft: 5,
          boxSizing: "border-box",
          marginTop: 15
        }}
      />
      <View className="w-screen items-center">
        {programDisplay}
      </View>
    </SafeAreaView>
  );
}
