import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const overlayBackgroundColor = 'rgba(0, 0, 0, 0.5)'

const OverlayWithHole = ({ width, height, xValue, yValue }) => {
  const pillHeight = height
  const pillWidth = width

  const borderTopWidthValue = yValue
  const borderLeftWidthValue = xValue

  const overlayStyles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      flex: 1,
      alignItems: 'center',
      position: 'absolute'
    },
    innerHole: {
      zIndex: 10,
      left: 0,
      top: 0,
      position: 'absolute',
      width: windowWidth,
      height: windowHeight,

      borderTopWidth: borderTopWidthValue,
      borderBottomWidth: windowHeight - pillHeight - borderTopWidthValue,
      borderLeftWidth: borderLeftWidthValue,
      borderRightWidth: windowWidth - borderLeftWidthValue,

      borderColor: overlayBackgroundColor,
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
  });

  return (
    <View style={overlayStyles.container}>
      <View style={overlayStyles.innerHole} />
      {/* Anything here is underneath */}
      <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
      <Text style={{ fontSize: 50 }}>Hi</Text>
    </View>
  );
};

export default OverlayWithHole;