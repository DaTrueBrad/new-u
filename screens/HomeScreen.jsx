import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState, useContext } from "react";
import { Text } from "react-native-elements";
import { Button, Input } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { useDispatch } from "react-redux";
import { url } from "../s";
//TODO THER EIS A BUG WITH THE INPUT FIELDS. MAKE IT MORE STRUCTURED TO NOT AUTOMATICALLY FILL-IN THE VOID WITH REANDOM INFO. SPACE OUT THE CONDITIONAL RETURNS
export default function HomeScreen() {
  const passRef = useRef();
  const nameRef = useRef();
  const firstRef = useRef();
  const emailRef = useRef();
  const confirmRef = useRef();
  const [registering, setRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [confirmPass, setConfirmPass] = useState();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handlePress = () => {
    const body = {
      username,
      password,
      firstName,
      email,
    };
    if (registering) {
      if (password !== confirmPass) {
        return alert("Passwords must match");
      }
      axios
        .post(url + "/api/register", body)
        .then((res) => {
          dispatch({ type: "LOGIN", payload: res.data });
          return console.log("RES: ", res.data);
        })
        .catch((err) => {
          console.error("ERROR: ", err);
        });
    } else {
      axios
        .post(url + "/api/login", body)
        .then((res) => {
          dispatch({ type: "LOGIN", payload: res.data });
          // return console.log("RES: ", res.data);
        })
        .catch((err) => {
          console.error("ERROR: ", err);
        });
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-sky-900"
      >
        <Image
          source={require("../images/wideLogo.png")}
          className="w-72 h-28"
        />
        {!registering ? (
          <View className="w-11/12 p-16 shadow-2xl flex flex-col items-center">
            <Input
              placeholder="Username"
              ref={nameRef}
              returnKeyType="next"
              onChangeText={(value) => setUsername(value)}
              onSubmitEditing={() => passRef.current.focus()}
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
              ref={passRef}
              // inputStyle={{color: "white"}}
              onSubmitEditing={handlePress}
              returnKeyType="done"
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
              Don't have an account?{" "}
              <Text
                className="text-sky-400"
                onPress={() => setRegistering(true)}
              >
                Tap Here
              </Text>
            </Text>
          </View>
        ) : (
          <View className="w-screen p-16 shadow-2xl flex flex-col items-center">
            <Input
              placeholder="Username"
              ref={nameRef}
              onChangeText={(value) => setUsername(value)}
              // inputStyle={{color: "white"}}
              returnKeyType="next"
              onSubmitEditing={() => firstRef.current.focus()}
              inputContainerStyle={{
                backgroundColor: "#fff",
                borderRadius: 5,
                paddingLeft: 5,
                boxSizing: "border-box",
              }}
            />
            <Input
              placeholder="First Name"
              ref={firstRef}
              onChangeText={(value) => setFirstname(value)}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              inputContainerStyle={{
                backgroundColor: "#fff",
                borderRadius: 5,
                paddingLeft: 5,
                boxSizing: "border-box",
              }}
            />
            <Input
              placeholder="Email"
              ref={emailRef}
              onChangeText={(value) => setEmail(value)}
              returnKeyType="next"
              onSubmitEditing={() => passRef.current.focus()}
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
              ref={passRef}
              returnKeyType="next"
              onSubmitEditing={() => confirmRef.current.focus()}
              inputContainerStyle={{
                backgroundColor: "#fff",
                borderRadius: 5,
                paddingLeft: 5,
                boxSizing: "border-box",
              }}
            />
            <Input
              placeholder="Confirm Password"
              ref={confirmRef}
              onChangeText={(value) => setConfirmPass(value)}
              returnKeyType="done"
              onSubmitEditing={handlePress}
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
              Already have an Account?{" "}
              <Text
                className="text-sky-400"
                onPress={() => setRegistering(false)}
              >
                Tap Here
              </Text>
            </Text>
          </View>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
