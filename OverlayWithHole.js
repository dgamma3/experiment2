import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OverlayWithHole = ({ holeSize }) => {
  const overlayStyles = StyleSheet.create({
    overlay: {
      zIndex: 100,
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      //opacity: 0.8
    },
    hole: {
      position: 'absolute',
      width: holeSize,
      height: holeSize,
      borderRadius: holeSize / 2,
      backgroundColor: 'transparent',
      opacity: 0.5,
      borderWidth: 2,
      borderColor: 'white',
    },
  });

  return (
    <View style={overlayStyles.overlay}>
      <View style={overlayStyles.hole} />
      
    </View>
  );
};

export default OverlayWithHole;