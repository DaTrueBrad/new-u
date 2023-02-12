import { View, Text } from 'react-native'
import { Input } from '@rneui/themed'
import React, {useState} from 'react'

export default function NewSet({dispatch, exerciseIndex, info, index}) {


  const changeRepInfo = (newText) => {
    dispatch({type: "CHANGEREPINFO", exerciseLocation: exerciseIndex, setLocation: index, payload: newText})
  }
  const changeWeightInfo = (newText) => {
    dispatch({type: "CHANGEWEIGHTINFO", exerciseLocation: exerciseIndex, setLocation: index, payload: newText})
  }
  
  return (
    <View className="flex-row justify-center w-96 h-12">
          <Input
            placeholder="Reps"
            keyboardType="numeric"
            containerStyle={{
              margin: 0,
              width:"50%"
            }}
            value={info.reps}
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
            placeholder="Weight"
            keyboardType="numeric"
            containerStyle={{
              margin: 0,
              width:"50%"
            }}
            value={info.weight}
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
  )
}