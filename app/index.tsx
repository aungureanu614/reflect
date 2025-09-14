import { Candle } from '@/components/Candle';
import { SafeAreaView } from '@/components/layout/SafeAreaView';
import { Text, View } from '@/components/layout/Themed';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

export default function Index() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text
            style={
              colorScheme === 'dark'
                ? iOSUIKit.largeTitleEmphasizedWhite
                : iOSUIKit.largeTitleEmphasized
            }
          >
            Welcome!
          </Text>
          <Text
            style={colorScheme === 'dark' ? iOSUIKit.bodyWhite : iOSUIKit.body}
          >
            Begin with intention
          </Text>
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
