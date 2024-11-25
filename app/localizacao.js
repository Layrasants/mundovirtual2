import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Picker, Alert } from "react-native";

export default function App() {
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("clima-bom-ii");

  const usarLocalizacao = () => {
    Alert.alert("Atenção", "Localização atual não disponível no momento!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localização</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>CEP</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira um CEP"
          placeholderTextColor="#aaa"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Button title="Usar sua localização" onPress={usarLocalizacao} color="#007bff" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Bairro</Text>
        <Picker
          selectedValue={bairro}
          onValueChange={(itemValue) => setBairro(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Clima Bom II" value="clima-bom-ii" />
          <Picker.Item label="Santos Dumont" value="santos-dumont" />
          <Picker.Item label="Tabuleiro do Martins" value="tabuleiro-do-martins" />
        </Picker>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}><Text style={styles.bold}>Informações sobre a Assistência:</Text></Text>
        <Text style={styles.infoText}>CEP: 57017-020</Text>
        <Text style={styles.infoText}>
          Endereço: Rua dezesseis de Setembro, 74{'\n'}
          Levada, Maceió - AL
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
    width: "100%",
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
  info: {
    marginTop: 20,
    alignItems: "flex-start",
    width: "100%",
  },
  infoText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
});
