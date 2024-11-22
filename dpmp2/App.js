import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>1 + 1 = ....</Text>
      <View style={styles.boxContainer}>
        {/* Kotak 1 dengan gradasi bayangan (Pink) */}
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.boxText}>2</Text>
        </View>
        {/* Kotak 2 dengan gradasi bayangan (Ungu) */}
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.boxText}>Jendela</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: '#0077b6',
    fontWeight: 'bold',
    marginBottom: 30,
    textShadowColor: '#c8d6e5',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 5, height: 10 },
  },
  box1: {
    backgroundColor: '#ff69b4', // Pink cerah
    shadowColor: 'rgba(255, 182, 193, 1)', // Gradasi pink cerah
  },
  box2: {
    backgroundColor: '#9370db', // Ungu sedang
    shadowColor: 'rgba(216, 191, 216, 1)', // Gradasi ungu lembut
  },
  boxText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
