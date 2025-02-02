import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PreAtendimentoScreen = () => {
  const atendimentos = [
    { id: 1, name: 'Maria Clara Oliveira', problem: 'Meu pc não tá dando vídeo' },
    { id: 2, name: 'Mateus Oliveira', problem: 'Entrou água no meu pc!!' },
    { id: 3, name: 'Augusta Santos', problem: 'Meu notebook quebrou a tela' },
  ];

  const openChat = (name, problem) => {
    Alert.alert(`Iniciando chat com ${name}`, `Problema: ${problem}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pré-atendimento</Text>
      {atendimentos.map((atendimento) => (
        <TouchableOpacity
          key={atendimento.id}
          style={styles.preAtendimento}
          onPress={() => openChat(atendimento.name, atendimento.problem)}
        >
          <Text style={styles.info}>{`${atendimento.id}º - ${atendimento.name}`}</Text>
          <Text style={styles.problem}>{atendimento.problem}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b20',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  preAtendimento: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  info: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  problem: {
    color: 'white',
  },
});

export default PreAtendimentoScreen;

