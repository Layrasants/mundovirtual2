import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Picker } from "@react-native-picker/picker";

const { height } = Dimensions.get('window');

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/design.png')}
        style={[styles.backgroundImage, { height: height * 0.4 }]}
      />
      <Text style={styles.topText}>MUNDO VIRTUAL</Text>
      <Text style={styles.assistanceText}>Assistência técnica</Text>
      <View style={styles.content}>
        <Text style={styles.subTitle}>Seja bem-vindo ao</Text>
        <Text style={styles.title}>MUNDO VIRTUAL</Text>
        <Text style={styles.text}>
          SOMOS UMA ASSISTÊNCIA TÉCNICA ESPECIALIZADA EM DESKTOPS E NOTEBOOKS.
        </Text>
        <Text style={styles.text}>
          ASSISTÊNCIA TÉCNICA DE NOTEBOOKS E DESKTOPS EM MACEIÓ - AL.
        </Text>
        <Text style={styles.text}>
          É UM ENORME PRAZER TÊ-LO CONOSCO!
        </Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push('/Home-cliente')}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  topText: {
    position: 'absolute',
    top: 30,
    left: '50%',
    transform: [{ translateX: -100 }],
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 1,
  },
  assistanceText: {
    position: 'absolute',
    top: 70,
    right: 20,
    fontSize: 22,
    color: '#fff',
    zIndex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
    zIndex: 1,
    marginTop: height * 0.2,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    marginTop: 25,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#28a745',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});
