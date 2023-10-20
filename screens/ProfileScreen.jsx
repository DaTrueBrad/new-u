import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { url } from "../s";
import axios from "axios";
import Dropdown from "../components/Dropdown";
import HistoryDropdown from "../components/history/HistoryDropdown";

export default function ProfileScreen({navigation}) {
  let [history, setHistory] = useState([]);
  let firstName = useSelector((state) => state.firstName);
  let userId = useSelector((state) => state.userId);
  console.log("____________",history)

  const getData = () => {
    axios
      .get(url + `/api/getHistory/` + userId)
      .then((res) => {
        console.log(res.data);
        setHistory(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    getData()
    })
    return unsubscribe
  }, [navigation])


  let display = history.map((program) => {
    console.log(program);
    return <HistoryDropdown program={program} key={program.id} />;
    // return <Dropdown program={program} />
  });

  return (
    <SafeAreaView className="min-h-screen min-w-screen flex flex-col bg-sky-900">
      <View className="px-4">
        <Text className="text-white text-5xl mt-12">Hello</Text>
        <Text className="text-white text-5xl mt-1">{firstName}.</Text>
      </View>
      <View className="w-screen items-center">{display}</View>
    </SafeAreaView>
  );
}
