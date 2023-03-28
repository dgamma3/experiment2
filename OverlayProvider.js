import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OverlayWithHole from './OverlayWithHole';

const OverlayProvider = ({ children }) => {
  return (
      <View style={styles.container}>
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
