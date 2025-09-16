import { useColorScheme } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { Text, View } from './layout/Themed';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const colorScheme = useColorScheme();

  return (
    <View>
      <Text
        style={
          colorScheme === 'dark'
            ? iOSUIKit.largeTitleEmphasizedWhite
            : iOSUIKit.largeTitleEmphasized
        }
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          style={
            colorScheme === 'dark'
              ? iOSUIKit.bodyEmphasizedWhite
              : iOSUIKit.bodyEmphasized
          }
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
}
