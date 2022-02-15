import { StyleSheet, Text, View } from "react-native";

const people = ["Ahmet", " ", "Mehmet", " ", "Ali", " ", "Veli"];

export default function App() {
  return (
    <View style={style.container}>
      <Text>{people}</Text>
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
