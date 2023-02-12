import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function ArticleScreen() {
  return (
    <SafeAreaView className="min-h-screen min-w-screen flex flex-col bg-sky-900">
      <View className="px-4">
        <Text className="text-white text-5xl mt-12">Our</Text>
        <Text className="text-white text-5xl mt-1">Articles.</Text>
      </View>
    </SafeAreaView>
  )
}