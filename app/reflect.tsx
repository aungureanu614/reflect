import { SafeAreaView } from '@/components/layout/SafeAreaView';
import { Text, View } from '@/components/layout/Themed';
import { StyleSheet, useColorScheme } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

export default function Reflect() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text
          style={
            colorScheme === 'dark'
              ? iOSUIKit.largeTitleEmphasizedWhite
              : iOSUIKit.largeTitleEmphasized
          }
        >
          Reflect
        </Text>
        <Text
          style={colorScheme === 'dark' ? iOSUIKit.bodyWhite : iOSUIKit.body}
        >
          What made you pause today?
        </Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
