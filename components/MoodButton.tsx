import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

interface MoodButtonProps {
  emoji: string;
  emotion: string;
}

export default function MoodButton({ emoji, emotion }: MoodButtonProps) {
  const colorScheme = useColorScheme();

  const moodButtonStyles = (pressed: boolean) => {
    return {
      opacity: pressed ? 0.5 : 1,
      backgroundColor:
        colorScheme === 'dark'
          ? 'rgba(255, 255, 255, 0.2)'
          : 'rgba(0, 0, 0, 0.05)',
    };
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.moodButton, moodButtonStyles(pressed)]}
    >
      <Text style={styles.moodEmoji}>{emoji}</Text>
      <Text
        style={
          colorScheme === 'dark' ? iOSUIKit.caption2White : iOSUIKit.caption2
        }
      >
        {emotion}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  moodButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 32,
    paddingHorizontal: 16,
  },
  moodButton: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    minWidth: 80,
  },
  moodEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
});
