import { SafeAreaView as SafeAreaViewComponent } from 'react-native-safe-area-context';
import { View } from './Themed';

export function SafeAreaView({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaViewComponent style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 85,
        }}
      >
        {children}
      </View>
    </SafeAreaViewComponent>
  );
}
