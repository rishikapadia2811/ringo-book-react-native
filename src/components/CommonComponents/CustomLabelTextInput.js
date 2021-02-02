import React, { useContext } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity,
} from 'react-native';
import fonts from '../../helpers/Fonts';
import CustomText from './CustomText';
import colors from '../../helpers/Colors';
import CustomImage from './CustomImage';
import images from '../../helpers/ImagesPath';
import { getStyleAccordingToDirectionForTextInput } from '../../helpers/StylesHelper';
import { AppSettingsContext } from '../../context/GetContexts';
import AsyncKeys from '../../constants/AsyncKeys';

const CustomLabelTextInput = ({
  labelText = 'Label Text',
  labelStyle,
  placeHolderText = 'Text Here',
  placeHolderTextColor = colors.gray,
  textInputStyle,
  secureTextEntry = false,
  value,
  onChangeText,
  children,
  leftImage = images.profilePicPlaceHolder,
  rightImage,
  onRightButtonPress,
}) => {
  const { state: AppSettingsState } = useContext(AppSettingsContext);
  return (
    <View style={styles.mainContainer}>
      <CustomText
            style={{
              ...styles.labelStyle,
              ...labelStyle,
            }}>
        {labelText}
      </CustomText>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        {/*  Left Icon */}
        {leftImage && (
          <CustomImage
                  style={{
                    flex: 0.12, height: 20, width: 20,
                  }}
                  source={leftImage}
              />
        )}

        {/*  Middle TextBox */}
        <TextInput
              secureTextEntry={secureTextEntry}
              placeholder={placeHolderText}
              placeholderTextColor={placeHolderTextColor}
              style={{
                fontSize: 16,
                marginHorizontal: 10,
                ...getStyleAccordingToDirectionForTextInput(AppSettingsState?.[AsyncKeys.APP_LANGUAGE]?.isRTL),
                fontFamily: fonts.RRegular,
                ...styles.textInputStyle,
                ...textInputStyle,
              }}
              onChangeText={onChangeText}
              value={value}
          >
          {children}
        </TextInput>

        {/*  Right Icon */}
        {rightImage && (
          <TouchableOpacity style={{ flex: 0.12 }} onPress={onRightButtonPress}>
            <CustomImage
                    style={{ height: 20, width: 20 }}
                    source={rightImage}
                />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  textInputStyle: {
    flex: 1,
  },
  labelStyle: {
    fontFamily: fonts.RMedium,
    fontSize: 12,
    color: colors.lightBlack,
    marginBottom: 10,
  },
})
export default CustomLabelTextInput;
