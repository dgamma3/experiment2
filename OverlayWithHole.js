import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OverlayWithHole = ({ holeSize }) => {
  const overlayStyles = StyleSheet.create({
    overlay: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    hole: {
      position: 'absolute',
      top: (height - holeSize) / 2,
      left: (width - holeSize) / 2,
      width: holeSize,
      height: holeSize,
      borderRadius: holeSize / 2,
      borderWidth: 2,
      borderColor: 'white',
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
  });

  return (
    <View style={overlayStyles.overlay}>
      <View style={overlayStyles.hole} />
      
    </View>
  );
};

export default OverlayWithHole;