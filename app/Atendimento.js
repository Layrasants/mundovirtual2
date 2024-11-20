import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Atendimento = ({ id, name, dateTime, isDone, onToggle }) => {
  return (
    <View style={[styles.atendimento, isDone ? styles.done : styles.pending]}>
      <View style={styles.info}>
        <Text style={[styles.attendanceText, styles.bold]}>
          {id}º - {name}
        </Text>
        <Text style={styles.attendanceDate}>Atendimento: {dateTime}</Text>
      </View>
      <TouchableOpacity
        style={[styles.checkbox, isDone && styles.checked]}
        onPress={() => onToggle(id)}
      >
        {isDone && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  const [atendimentos, setAtendimentos] = useState([
    { id: 1, name: 'Maria Clara Oliveira', dateTime: '09/10/2023 às 09:30', isDone: false },
    { id: 2, name: 'Mateus Oliveira', dateTime: '11/10/2023 às 10:30', isDone: false },
    { id: 3, name: 'Augusta Santos', dateTime: '12/10/2023 às 10:00', isDone: false },
  ]);

  const toggleAtendimento = (id) => {
    setAtendimentos(atendimentos.map(atendimento =>
      atendimento.id === id ? { ...atendimento, isDone: !atendimento.isDone } : atendimento
    ));
  };

  const clearCompleted = () => {
    setAtendimentos(atendimentos.filter(atendimento => !atendimento.isDone));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Atendimentos</Text>
      {atendimentos.map(atendimento => (
        <Atendimento
          key={atendimento.id}
          id={atendimento.id}
          name={atendimento.name}
          dateTime={atendimento.dateTime}
          isDone={atendimento.isDone}
          onToggle={toggleAtendimento}
        />
      ))}
      {atendimentos.some(atendimento => atendimento.isDone) && (
        <TouchableOpacity style={styles.clearButton} onPress={clearCompleted}>
          <Text style={styles.clearButtonText}>Limpar Concluídos</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b20',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  atendimento: {
    width: '100%',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flexGrow: 1,
  },
  attendanceText: {
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  attendanceDate: {
    color: 'white',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  checked: {
    backgroundColor: 'white',
  },
  checkmark: {
    color: '#4CAF50',
  },
  done: {
    backgroundColor: '#4CAF50',
  },
  pending: {
    backgroundColor: '#606060',
  },
  clearButton: {
    marginTop: 20,
    backgroundColor: '#FF5252',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
