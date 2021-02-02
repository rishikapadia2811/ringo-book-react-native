import React from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';

const CustomImage = ({
  source,
  style,
  resizeMode = FastImage.resizeMode.contain,
  tintColor,
}) => (
  <FastImage
      tintColor={tintColor}
      resizeMode={resizeMode}
            source={source}
            style={{ ...styles.imageContainer, ...style }}
        />
)
const styles = StyleSheet.create({
  imageContainer: {
    height: 20,
    width: 20,
  },
})
export default CustomImage;
