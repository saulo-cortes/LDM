import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import MeuBotao from "./components/MeuBotao";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, React Native com Expo!</Text>
      <MeuBotao titulo="Pressione-me" onPress={() => Alert.alert("Botão pressionado!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
