import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

const Entrar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in
      const user = userCredential.user;
      console.log(user);
      router.replace('/Bemvindo-cliente');
    } catch (error) {
      Alert.alert('Erro', error.message)
    }
  }

  // const handleLogin = () => {
  //   if (!username || !password) {
  //     Alert.alert('Erro', 'Por favor, preencha todos os campos.');
  //     return;
  //   }
  //   Alert.alert('Sucesso', 'Login realizado com sucesso!');
  //   router.push('/Bemvindo-cliente');
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formSection}>
        <Text style={styles.title}>Entrar</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor="#ccc"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showPasswordText}>
              {showPassword ? 'Esconder' : 'Mostrar'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => Alert.alert('Recuperação de senha')}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.register}>
        Não possui uma conta?{' '}
  <Text
    style={styles.registerLink}
    onPress={() => router.push('/Bemvindo-cliente')} 
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
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
    paddingVertical: 10,
  },
  showPasswordText: {
    color: '#ccc',
    marginLeft: 10,
  },
  forgotPassword: {
    color: '#007bff',
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'right',
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
