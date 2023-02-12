import { View, SafeAreaView, Image } from "react-native";
import React, { useRef, useState, useContext } from "react";
import { Text } from "react-native-elements";
import { Button, Input } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { useDispatch } from "react-redux";


export default function HomeScreen() {
  const [registering, setRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("")
  const [confirmPass, setConfirmPass] = useState()
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()


  const handlePress = () => {
    const body = {
      username,password,firstName,email
    }
    if(registering) {
      if(password !== confirmPass) {
        return alert("Passwords must match")
      }
      // TODO axios call to register endpoint
      axios
        .post('http://localhost:8080/api/register', body)
        .then((res) => {
          dispatch({type: "LOGIN", payload: res.data})
          return console.log("RES: ", res.data)
        })
        .catch((err) => {
          console.error("ERROR: ", err)
        })
    }
    //TODO axiso call to login endpoint
    axios
        .post('http://localhost:8080/api/login', body)
        .then((res) => {
          dispatch({type: "LOGIN", payload: res.data})
          return console.log("RES: ", res.data)
        })
        .catch((err) => {
          console.error("ERROR: ", err)
        })
  };

  return (
    <SafeAreaView className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-sky-900">
      <Image source={require("../images/wideLogo.png")} className="w-72 h-28" />
      {!registering ? (
        <View className="w-11/12 p-16 shadow-2xl flex flex-col items-center">
          <Input
            placeholder="Username"
            // ref={nameRef}
            onChangeText={(value) => setUsername(value)}
            // inputStyle={{color: "white"}}
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 5,
              paddingLeft: 5,
              boxSizing: "border-box",
            }}
          />
          <Input
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            // ref={passRef}
            // inputStyle={{color: "white"}}
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 5,
              paddingLeft: 5,
              boxSizing: "border-box",
            }}
          />
          <Button
            onPress={handlePress}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#38BDF9", "#2c9ed1"],
              // start: { x: '0', y: '0.5' },
              // end: { x: '1', y: '0.5' },
            }}
          >
            Sign In
          </Button>
          <Text className="text-white">
        Don't have an account? <Text className="text-sky-400" onPress={() => setRegistering(true)}>Tap Here</Text></Text>
        </View>
      ) : (
        <View className="w-screen p-16 shadow-2xl flex flex-col items-center">
          <Input
            placeholder="Username"
            // ref={nameRef}
            onChangeText={(value) => setUsername(value)}
            // inputStyle={{color: "white"}}
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 5,
              paddingLeft: 5,
              boxSizing: "border-box",
            }}
          />
          <Input
            placeholder="First Name"
            // ref={nameRef}
            onChangeText={(value) => setFirstname(value)}
            // inputStyle={{color: "white"}}
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 5,
              paddingLeft: 5,
              boxSizing: "border-box",
            }}
          />
          <Input
            placeholder="Email"
            // ref={nameRef}
            onChangeText={(value) => setEmail(value)}
            // inputStyle={{color: "white"}}
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 5,
              paddingLeft: 5,
              boxSizing: "border-box",
            }}
          />
          <Input
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            // ref={passRef}
            // inputStyle={{color: "white"}}
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 5,
              paddingLeft: 5,
              boxSizing: "border-box",
            }}
          />
          <Input
            placeholder="Confirm Password"
            onChangeText={(value) => setConfirmPass(value)}
            // ref={passRef}
            // inputStyle={{color: "white"}}
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 5,
              paddingLeft: 5,
              boxSizing: "border-box",
            }}
          />
          <Button
            onPress={handlePress}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#38BDF9", "#2c9ed1"],
              // start: { x: '0', y: '0.5' },
              // end: { x: '1', y: '0.5' },
            }}
          >
            Sign In
          </Button>
      <Text className="text-white">
        Already have an Account? <Text className="text-sky-400" onPress={() => setRegistering(false)}>Tap Here</Text>
      </Text>
        </View>
      )}

    </SafeAreaView>
  );
}
