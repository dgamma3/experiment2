import React from 'react';
import { StyleSheet, View, Dimensions, TextInput } from 'react-native';

const Pill = () => {
  const pillHeight = 50
  const pillWidth = 350

  const pillStyles = StyleSheet.create({
    pill: {
      marginTop: 80,
      width: pillWidth,
      height: pillHeight,
      backgroundColor: 'white',
      borderRadius: 50
    }
  });

  return (
    <View style={pillStyles.pill}>
      <TextInput />
    </View>
  );
};

export default Pill;