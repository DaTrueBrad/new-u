import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@rneui/themed";
import { Dimensions } from "react-native";
import { Line } from "react-native-svg";
// import { LineChart } from "react-native-chart-kit";
import { AreaChart, XAxis, Grid } from "react-native-svg-charts";
import * as scale from "d3-scale";
import * as shape from "d3-shape";
import {setHours, format} from "date-fns";
// import setHours from "date-fns/setHours";
const screenWidth = Dimensions.get("window").width;

export default function Dashboard({ navigation }) {
  const firstName = useSelector((state) => state.firstName);
  // let chartConfig = {
  //   backgroundColor: "#085885",
  //   backgroundGradientFrom: "#085885",
  //   backgroundGradientTo: "#085885",
  //   decimalPlaces: 2, // optional, defaults to 2dp
  //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //   style: {
  //     borderRadius: 16,
  //   },
  //   propsForDots: {
  //     r: "6",
  //     strokeWidth: "2",
  //     stroke: "#37befa",
  //   },
  // };
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June"],
  //   datasets: [
  //     {
  //       data: [185, 192, 194, 198, 200, 203],
  //       color: (opacity = 1) => `rgba(55, 190, 250, ${opacity})`, // optional
  //       strokeWidth: 2, // optional
  //     },
  //   ],
  //   legend: ["Body Weight"], // optional
  // };
  console.log("NAME: ", firstName);
  const data = [
    {
      value: 50,
      date: setHours(new Date(2018, 0, 0), 6),
    },
    {
      value: 10,
      date: setHours(new Date(2018, 0, 0), 9),
    },
    {
      value: 150,
      date: setHours(new Date(2018, 0, 0), 15),
    },
    {
      value: 10,
      date: setHours(new Date(2018, 0, 0), 18),
    },
    {
      value: 100,
      date: setHours(new Date(2018, 0, 0), 21),
    },
    {
      value: 20,
      date: setHours(new Date(2018, 0, 0), 24),
    },
  ];

  const goSomewhere = () => {
    navigation.navigate("Start");
  };

  return (
    <SafeAreaView className="min-h-screen w-screen flex flex-col bg-sky-900">
      <View className="px-4">
        <Text className="text-white text-5xl mt-12">Welcome,</Text>
        <Text className="text-white text-5xl mt-1">{firstName}.</Text>
        <View style={{ height: 200, padding: 20 }}>
        <AreaChart
                    style={{ flex: 1 }}
                    data={ data }
                    yAccessor={ ({ item }) => item.value }
                    xAccessor={ ({ item }) => item.date }
                    xScale={ scale.scaleTime }
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
                    curve={ shape.curveLinear }
                >
                    <Grid/>
                </AreaChart>
                <XAxis
                    data={ data }
                    svg={{
                        fill: 'black',
                        fontSize: 8,
                        fontWeight: 'bold',
                        rotation: 20,
                        originY: 30,
                        y: 5,
                    }}
                    xAccessor={ ({ item }) => item.date }
                    scale={ scale.scaleTime }
                    numberOfTicks={ 6 }
                    style={{ marginHorizontal: -15, height: 20 }}
                    contentInset={{ left: 10, right: 25 }}
                    formatLabel={ (value) => format(value, 'HH:mm') }
                />
      </View>
      </View>
    </SafeAreaView>
  );
}
