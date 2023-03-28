import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const overlayBackgroundColor = 'rgba(0, 0, 0, 1)'

const OverlayWithHole = ({ holeSize }) => {
  console.log(width, height)
  const overlayStyles = StyleSheet.create({
    container: {
      position: 'relative',
      height: '100%',
      width: '100%',
    },
    overlayTopBottom: {
      flex: 1,
      height: '50%',
      width: '100%',
      backgroundColor: overlayBackgroundColor,
    },
    overlayMiddleContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    overlayMiddleLeft: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: overlayBackgroundColor,
    },
    overlayMiddleRight: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: overlayBackgroundColor,
    },
    hole: {
      width: holeSize,
      height: holeSize,
      borderRadius: holeSize,
      borderWidth: 2,
      borderColor: 'white',
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
    innerHole: {
      zIndex: 10,
      left: (width / 2) - (holeSize),
      top: (height / 2) - (holeSize),
      position: 'absolute',
      width: holeSize * 2,
      height: holeSize * 2,
      borderRadius: holeSize,
      borderWidth: 100,
      borderColor: 'black',
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
  });

  return (
      <View style={overlayStyles.container}>
        <View style={overlayStyles.overlayTopBottom} />
        <View style={overlayStyles.overlayMiddleContainer}>
          <View style={overlayStyles.overlayMiddleLeft}/>

          <View style={overlayStyles.hole} />
          <View style={overlayStyles.overlayMiddleRight}/>
        </View>
        <View style={overlayStyles.overlayTopBottom} />
      </View>
  );
};

export default OverlayWithHole;
