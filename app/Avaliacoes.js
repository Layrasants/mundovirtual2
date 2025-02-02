import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Avaliacoes = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Avaliações</Text>

            <View style={styles.review}>
                <Text style={styles.stars}>★★★★★</Text>
                <Text style={styles.reviewText}>
                    <Text style={styles.initial}>W</Text> <Text style={styles.bold}>Berg Augusto Silva</Text>
                </Text>
                <Text style={styles.comment}>Vocês estão de parabéns, foram além das minhas expectativas.</Text>
            </View>

            <View style={styles.review}>
                <Text style={styles.stars}>★★★★★</Text>
                <Text style={styles.reviewText}>
                    <Text style={styles.initial}>C</Text> <Text style={styles.bold}>Carla Maria da Silva Peixoto</Text>
                </Text>
                <Text style={styles.comment}>Melhor serviço que existe :)</Text>
            </View>

            <View style={styles.review}>
                <Text style={styles.stars}>★★★★★</Text>
                <Text style={styles.reviewText}>
                    <Text style={styles.initial}>A</Text> <Text style={styles.bold}>Ana Beatriz Magdalena</Text>
                </Text>
                <Text style={styles.comment}>Ótimo atendimento, funcionários prestativos e atenciosos, parabéns!</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => router.push('/Home')}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a2e',
        padding: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
    review: {
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        width: '100%',
        color: '#fff',
        textAlign: 'left',
    },
    stars: {
        color: '#ffdd00',
        fontSize: 22,
        marginBottom: 5,
    },
    reviewText: {
        color: '#fff',
        fontSize: 16,
    },
    initial: {
        backgroundColor: '#666',
        borderRadius: 50,
        color: '#fff',
        width: 25,
        height: 25,
        textAlign: 'center',
        lineHeight: 25,
        marginRight: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    comment: {
        marginTop: 5,
        color: '#fff',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#28a745',
        borderRadius: 10,
        padding: 15,
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Avaliacoes;
