import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const firstName = useSelector((state) => state.firstName)
  console.log("NAME: ", firstName)

  return (
    <SafeAreaView className="min-h-screen w-screen flex flex-col bg-sky-900">
      <View className="px-4">
        <Text className="text-white text-5xl mt-12">Welcome,</Text>
        <Text className="text-white text-5xl mt-1">{firstName}.</Text>
      </View>
    </SafeAreaView>
  );
}
