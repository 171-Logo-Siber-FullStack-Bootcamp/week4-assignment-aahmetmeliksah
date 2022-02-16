import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login_screen from "./src/screens/login_screen";

export default function App() {
  return (
    <View style={style.container}>
      <Login_screen />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
