import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      {/* Botão Atendimentos */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/Atendimento')} 
      >
        <Text style={styles.buttonText}>Atendimentos</Text>
      </TouchableOpacity>

      {/* Botão Pré-Atendimento */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/PreAtendimento')} 
      >
        <Text style={styles.buttonText}>Pré-Atendimento</Text>
      </TouchableOpacity>

      {/* Botão Avaliações */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/Avaliacoes')} // Certifique-se de que a rota está correta
      >
        <Text style={styles.buttonText}>Avaliações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    width: '90%',
    backgroundColor: '#007bff',
    padding: 15,
    margin: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
