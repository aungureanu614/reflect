import { SafeAreaView } from '@/components/layout/SafeAreaView';
import { Text } from '@/components/layout/Themed';
import { iOSUIKit } from 'react-native-typography';

export default function Reflect() {
  return (
    <SafeAreaView>
      <Text style={iOSUIKit.largeTitleEmphasized}>Reflect</Text>
      <Text style={iOSUIKit.body}>What made you pause today?</Text>
    </SafeAreaView>
  );
}
