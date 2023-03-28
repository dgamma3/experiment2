import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OverlayWithHole from './OverlayWithHole';

const OverlayProvider = ({ children }) => {
  return (
      <View style={styles.container}>
        <OverlayWithHole width={350} height={50} xValue={40} yValue={80}/>
      {/* Anything here is ontop */}
        {children}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    fontSize: 50
  },
});

export default OverlayProvider;
