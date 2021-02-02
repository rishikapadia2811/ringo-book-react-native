import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import colors from '../../helpers/Colors';
import fonts from '../../helpers/Fonts';

const CustomButton = ({
  children,
  buttonText,
  buttonTextStyle,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
    {children || <CustomText style={{ ...styles.buttonTextStyle, ...buttonTextStyle }}>{buttonText}</CustomText>}
  </TouchableOpacity>
)
const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 5,
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 24,
    color: colors.whiteColor,
    fontFamily: fonts.RBold,
  },
})
export default CustomButton;
