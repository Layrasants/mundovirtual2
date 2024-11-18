import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Importando o hook useRouter

const Entrar = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter(); // Hook do Expo Router para navegação

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    // Lógica de autenticação pode ser adicionada aqui
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
    
    // Navegar para a tela /home após login bem-sucedido
    router.push('/home');
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
          <Text
            style={styles.registerLink}
            onPress={() => Alert.alert('Registrar')}
          >
            Registrar-se
          </Text>
        </Text>

        <View style={styles.loginOptionsContainer}>
          <Text style={styles.loginWith}>Entrar com</Text>
          <View style={styles.loginOptions}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
              }}
            />
            <Image
              style={styles.icon}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
              }}
            />
            <Image
              style={styles.icon}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  formSection: {
    width: 320,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  showPasswordText: {
    color: '#007bff',
  },
  forgotPassword: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  btn: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  register: {
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
  registerLink: {
    color: '#007bff',
  },
  loginOptionsContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  loginWith: {
    color: '#fff',
    marginBottom: 20,
  },
  loginOptions: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default Entrar;
