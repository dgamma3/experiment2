import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const overlayBackgroundColor = 'rgba(0, 0, 0, 0.5)'

const pillHeight = 50
const pillWidth = 350

const OverlayWithHole = ({ holeSize }) => {
  console.log(width, height)
  const overlayStyles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      flex: 1,
      alignItems: 'center'
    },
    innerHole: {
      zIndex: 10,
      left: 0,
      top: 0,
      position: 'absolute',
      width: width,
      height: height,
      borderRadius: 100,

      borderTopWidth: 80,
      borderBottomWidth: height - pillHeight - 80,
      borderLeftWidth: (width - pillWidth) / 2,
      borderRightWidth: (width - pillWidth) / 2,

      borderColor: overlayBackgroundColor,
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
    pill: {
      marginTop: 80,
      width: pillWidth,
      height: pillHeight,
      backgroundColor: 'white',
      borderRadius: 50
    }
  });

  return (
    <View style={overlayStyles.container}>
      <View style={overlayStyles.pill}/>
      <View style={overlayStyles.innerHole} />
    </View>
  );
};

export default OverlayWithHole;