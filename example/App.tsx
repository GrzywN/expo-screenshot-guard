import { useScreenshotGuard } from 'expo-screenshot-guard';
import { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [isProtected, setIsProtected] = useState(true);

  useScreenshotGuard(isProtected);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>expo-screenshot-guard</Text>
          <View style={styles.group}>
            <Text style={styles.groupHeader}>Screenshot Protection</Text>
            <Text>
              Protection is currently:{' '}
              <Text style={styles.bold}>
                {isProtected ? 'ENABLED' : 'DISABLED'}
              </Text>
            </Text>
            <Button
              title={isProtected ? 'Disable Protection' : 'Enable Protection'}
              onPress={() => setIsProtected((prev) => !prev)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold' as const,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    gap: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
};
