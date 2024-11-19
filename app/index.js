import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter(); // hook para navegação

    return (
        <View style={styles.container}>
            <Image source={require('../assets/design.png')} style={styles.backgroundImage} />
            <View style={styles.overlay}>
                <Text style={styles.title}>MUNDO VIRTUAL</Text>
                <Text style={styles.subtitle}>Assistência Técnica</Text>
                <View style={styles.buttons}>
                    {/* Botão Técnico */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            router.push('/Registrar'); // Caminho relativo para a rota Registrar
                        }}>
                        <Text style={styles.buttonText}>Técnico</Text>
                    </TouchableOpacity>

                    <Text style={styles.orText}>Ou</Text>

                    {/* Botão Cliente */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            router.push('/Registrar-cliente'); // Caminho relativo para a rota Registrar
                        }}>
                        <Text style={styles.buttonText}>Cliente</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        opacity: 0.5,
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 40,
    },
    buttons: {
        marginTop: 150,
        alignItems: 'center',
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#28a745',
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
    orText: {
        marginVertical: 15,
        color: '#fff',
        fontSize: 16,
    },
});


//aaaa