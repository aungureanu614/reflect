import Header from '@/components/Header';
import { SafeAreaView } from '@/components/layout/SafeAreaView';
import { View } from '@/components/layout/Themed';
import MoodButton from '@/components/MoodButton';
import { useState } from 'react';
import { StyleSheet, TextInput, useColorScheme } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

export default function Reflect() {
  const colorScheme = useColorScheme();
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inner}>
          <Header title="Reflect" subtitle="What made you pause today?" />

          {/**
           * TODO:
           * Use @react-native-community/datetimepicker to allow going backwards in time
           * to see previous entries.
           * Store all data in @react-native-async-storage/async-storage for local usage.
           */}

          <View style={styles.inputs}>
            <TextInput
              style={[
                colorScheme === 'dark' ? iOSUIKit.bodyWhite : iOSUIKit.body,
                styles.textInput,
              ]}
              multiline
              numberOfLines={6}
              onChangeText={newText => setText(newText)}
              value={text}
              textAlignVertical="top"
              placeholder="Describe your day in a few sentences..."
              placeholderTextColor="#999"
            />

            <View style={styles.moodButtons}>
              <MoodButton emoji="😊" emotion="Happy" />
              <MoodButton emoji="😐" emotion="Neutral" />
              <MoodButton emoji="😢" emotion="Upset" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  inputs: {
    flex: 1,
    justifyContent: 'center',
  },
  moodButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 32,
    paddingHorizontal: 16,
  },
  textInput: {
    height: 180,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    textAlignVertical: 'top',
  },
});
