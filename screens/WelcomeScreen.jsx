import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Input } from 'react-native-elements'

export default function WelcomeScreen() {
  
  return (
    <SafeAreaView className="bg-slate-500">
      <Text>WelcomeScreen</Text>
      <Input label="thing" containerStyle={{backgroundColor: "#232323", borderRadius: "20px", width: 200}}/>
    </SafeAreaView>
  )
}