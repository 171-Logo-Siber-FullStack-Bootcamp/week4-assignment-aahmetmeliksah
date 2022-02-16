import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

export default function Login_screen() {
  const [username, setUsername] = useState("    Login with username");
  const [userPassword, setUserPassword] = useState();

  return (
    <View>
      <TextInput
        onChangeText={setUsername}
        value={username}
        style={style.TextInput}
      ></TextInput>

      <TextInput
        onChangeText={setUserPassword}
        value={userPassword}
        style={style.TextInput}
      ></TextInput>

      <View style={style.btnContainer}>
        <TouchableOpacity>
          <Text>BUTTON 1</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>BUTTON 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  TextInput: {
    borderWidth: 1.5,
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 15,
    marginTop: 5,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
