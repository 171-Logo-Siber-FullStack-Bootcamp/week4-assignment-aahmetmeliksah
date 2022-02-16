import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login_screen from "./src/screens/login_screen";
import Register_screen from "./src/screens/Register_screen";

export default function App() {
  return (
    <View style={style.container}>
      <Login_screen />
      <View style={style.oval_login}></View>
      <Register_screen />
      <View style={style.oval_register}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#e8cbf0",
    flex: 1,
    alignItems: "center",
    paddingTop: "3%",
  },
  oval_login: {
    marginTop: "-29.7%",
    height: "17%",
    width: "100%",
    backgroundColor: "white",
    borderWidth: 2,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    borderColor: "#873a9d",
    zIndex: -1,
  },
  oval_register: {
    marginTop: "-19.7%",
    height: "12%",
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1.6,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    borderColor: "#873a9d",
    zIndex: -2,
  },
});
