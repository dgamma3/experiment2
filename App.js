import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OverlayProvider from './OverlayProvider';
import Pill from './Pill';
import OverlayWithHole from "./OverlayWithHole";

export default function App() {
  return (
      <View  style={styles.container}>
          <OverlayWithHole holeSize={100}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    fontSize: 50
  }
});
