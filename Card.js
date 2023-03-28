import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.img}>
        <Image source={{ uri: 'https://picsum.photos/640/246' }} style={styles.imgStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 0.25 * 16, // 16 is the default font size
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  img: {
    height: 10 * 16, // 16 is the default font size
    width: 20 * 16,
    overflow: 'hidden',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    grayscale: 1,
  },
});

export default Card;