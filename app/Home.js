import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // hook de navegação

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Navegar para a tela Home
    router.push('/Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formSection}>
        <Text style={styles.title}>Entrar</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.passwordContainer}>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showPasswordText}>
              {showPassword ? 'Esconder' : 'Mostrar'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('Recuperação de senha')}>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.register}>
          Não possui uma conta?{' '}
          <Text style={styles.registerLink} onPress={() => Alert.alert('Registrar')}>
            Registrar-se
          </Text>
        </Text>

        <View style={styles.loginOptionsContainer}>
          <Text style={styles.loginWith}>Entrar com</Text>
          <View style={styles.loginOptions}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
              }}
            />
            <Image
              style={styles.icon}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
              }}
            />
            <Image
              style={styles.icon}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
              }}
            />
          </View>
        </View>
      </View>
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
  formSection: {
    width: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showPasswordText: {
    color: '#0066ff',
  },
  forgotPassword: {
    color: '#ff6666',
  },
  btn: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  register: {
    marginTop: 20,
    color: '#fff',
    textAlign: 'center',
  },
  registerLink: {
    color: '#0066ff',
    fontWeight: 'bold',
  },
  loginOptionsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginWith: {
    color: '#fff',
    marginBottom: 10,
  },
  loginOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  icon: {
    width: 40,
    height: 40,
  },
});
