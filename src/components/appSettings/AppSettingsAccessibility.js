import React, { useContext } from 'react';
import {
  FlatList, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import { AppSettingsContext } from '../../context/GetContexts';
import { appFontSizes, appThemes } from '../../constants/DefaultVariables';
import CustomText from '../CommonComponents/CustomText';
import colors from '../../helpers/Colors';
import fonts from '../../helpers/Fonts';
import AsyncKeys from '../../constants/AsyncKeys';

const AppSettingsAccessibility = () => {
  const {
    state: AppSettingsState,
    setAppSettings,
  } = useContext(AppSettingsContext);

  const onSingleThemePress = (item) => {
    setAppSettings(AsyncKeys.APP_THEME, item);
  }

  const onSingleFontSizePress = (item) => {
    setAppSettings(AsyncKeys.APP_FONT_SIZE, item);
  }

  const renderThemes = ({ item }) => (
    <TouchableOpacity onPress={() => onSingleThemePress(item)} style={ styles.languageMainContainer }>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
          backgroundColor: item?.themeName === AppSettingsState?.[AsyncKeys.APP_THEME]?.themeName ? colors?.secondary : colors.lightWhiteColor,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 3,
          elevation: 3,
          height: 40,
          width: 40,
        }}/>
        <CustomText style={styles.languageText}>{_.startCase(item?.themeName)}</CustomText>
      </View>
    </TouchableOpacity>
  )

  const renderFontSizes = ({ item }) => (
    <TouchableOpacity onPress={() => onSingleFontSizePress(item)} style={ styles.languageMainContainer }>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
          backgroundColor: item?.fontSizeUnit === AppSettingsState?.[AsyncKeys.APP_FONT_SIZE]?.fontSizeUnit ? colors?.secondary : colors.lightWhiteColor,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 3,
          elevation: 3,
          height: 40,
          width: 40,
        }}/>
        <CustomText style={styles.languageText}>{_.startCase(item?.fontSizeUnit)}</CustomText>
      </View>
    </TouchableOpacity>
  )
  return (
    <>
      {/*    Themes */}
      <CustomText style={{ color: colors.gray, fontFamily: fonts.RBold, marginTop: 10 }}>THEMES</CustomText>
      <FlatList
          listKey={'theme'}
          keyExtractor={(item, index) => index?.toString()}
          data={appThemes}
          renderItem={renderThemes}
      />

      {/* Font Size */}
      <CustomText style={{ color: colors.gray, fontFamily: fonts.RBold, marginTop: 15 }}>FONT SIZE</CustomText>
      <FlatList
          listKey={'fontSize'}
        keyExtractor={(item, index) => index?.toString()}
        data={appFontSizes}
        renderItem={renderFontSizes}
    />
    </>
  )
}

const styles = StyleSheet.create({
  languageMainContainer: {
    width: '100%',
    shadowColor: colors.blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: colors.lightWhiteColor,
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
  },
  languageText: {
    marginLeft: 25,
    flex: 1,
    color: colors.gray,
    fontSize: 36,
    fontFamily: fonts.RBold,
    textAlign: 'center',
  },
})
export default AppSettingsAccessibility;
