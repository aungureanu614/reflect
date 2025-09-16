import { Candle } from '@/components/Candle';
import Header from '@/components/Header';
import { SafeAreaView } from '@/components/layout/SafeAreaView';
import { Text, View } from '@/components/layout/Themed';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header title="Welcome" subtitle="Begin with intention." />

        <View style={styles.candle}>
          <Candle size={450} />
        </View>

        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            {
              backgroundColor: '#007AFF',
              padding: 16,
              borderRadius: 8,
              alignItems: 'center',
            },
          ]}
          onPress={() => {
            router.navigate('/reflect');
          }}
        >
          <Text style={styles.reflectButtonText}>Reflect</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  candle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    textAlign: 'center',
  },
  reflectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
