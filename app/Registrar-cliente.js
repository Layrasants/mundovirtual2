import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; 

export default function Registrar() {
  const router = useRouter(); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = () => {
    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Verificar se o usuário aceitou os Termos e Condições
    if (!termsAccepted) {
      Alert.alert('Erro', 'Você deve aceitar os Termos e Condições.');
      return;
    }

    // Mostrar um alerta de registro completo
    Alert.alert('Registro completo!', `Nome: ${name}, Email: ${email}`);

    // Redirecionar para a tela de Login
    router.push('/Entrar'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registrar-se</Text>
      <Text style={styles.subtitle}>Criar uma nova conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
        <Text style={styles.terms}>{termsAccepted ? '☑' : '☐'} Aceito os Termos e Condições</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/Entrar')}>
        <Text style={styles.loginLink}>Já tem uma conta? Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#ccc',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      padding: 10,
      margin: 10,
      backgroundColor: '#333',
      borderRadius: 5,
      color: '#ccc', // Cor do texto inserido
    },
    button: {
      backgroundColor: '#28a745',
      padding: 15,
      borderRadius: 10,
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    loginLink: {
      color: '#0066ff',
      marginTop: 20,
    },
    terms: {
      color: '#fff',
      marginTop: 10,
    },
  });
  
