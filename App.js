import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import OverlayProvider from './OverlayPrivder';
import OverlayWithHole from './OverlayWithHole';
import Pill from './Pill';

export default function App() {
  return (
      <View style={styles.container}>
        <OverlayWithHole width={350} height={50} xValue={40} yValue={80}/>
        <Pill />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
