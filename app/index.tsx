import { Candle } from '@/components/Candle';
import { SafeAreaView } from '@/components/layout/SafeAreaView';
import { Text, View } from '@/components/layout/Themed';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={iOSUIKit.largeTitleEmphasized}>Welcome!</Text>
          <Text style={iOSUIKit.body}>Begin with intention</Text>
        </View>

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
      </View>
    </SafeAreaView>
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
