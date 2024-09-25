import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/welcome';
import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      {/* <Navigation/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
