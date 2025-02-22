import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type MeuBotaoProps = {
  titulo: string;
  onPress: () => void;
};

const MeuBotao: React.FC<MeuBotaoProps> = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MeuBotao;
