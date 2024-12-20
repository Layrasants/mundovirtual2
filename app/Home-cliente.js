import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      {/* Botão Agndamento*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/Agendamentos')} 
      >
        <Text style={styles.buttonText}>Agendar atendimento</Text>
      </TouchableOpacity>

      {/* Botão Localização*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/localizacao')} 
      >
        <Text style={styles.buttonText}>Ver localização</Text>
      </TouchableOpacity>

      {/* Botão Avaliações */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/Avaliacoes')} 
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
