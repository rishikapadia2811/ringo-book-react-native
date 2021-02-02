import React, { useContext } from 'react';
import {
  FlatList, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import { AppSettingsContext } from '../../context/GetContexts';
import { appLanguages } from '../../constants/DefaultVariables';
import CustomText from '../CommonComponents/CustomText';
import colors from '../../helpers/Colors';
import fonts from '../../helpers/Fonts';
import CustomImage from '../CommonComponents/CustomImage';
import AsyncKeys from '../../constants/AsyncKeys';

const AppSettingsLanguages = () => {
  const { state: AppSettingsState, setAppSettings } = useContext(AppSettingsContext);
  const onSingleLanguagePress = (item) => {
    setAppSettings(AsyncKeys.APP_LANGUAGE, item);
  }
  const renderLanguages = ({ item }) => (
    <TouchableOpacity onPress={() => onSingleLanguagePress(item)} style={ styles.languageMainContainer }>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
          backgroundColor: item?.language === AppSettingsState?.[AsyncKeys.APP_LANGUAGE]?.language ? colors?.secondary : colors.lightWhiteColor,
          borderRadius: 50,
          justifyContent: 'center',
          padding: 15,
          alignItems: 'center',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 3,
          elevation: 3,
        }}>
          <CustomImage
              source={item?.languageImage} style={{ height: 40, width: 40 }}
              tintColor={item?.language === AppSettingsState?.[AsyncKeys.APP_LANGUAGE]?.language ? colors?.lightWhiteColor : colors.gray}
          />
        </View>
        <CustomText style={styles.languageText}>{_.startCase(item?.language)}</CustomText>
      </View>
    </TouchableOpacity>
  )
  return (
    <>
      <FlatList
        keyExtractor={(item, index) => index?.toString()}
        data={appLanguages}
        renderItem={renderLanguages}
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
export default AppSettingsLanguages;
