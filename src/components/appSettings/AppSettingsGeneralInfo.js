import React, { useContext } from 'react';
import {
  FlatList, StyleSheet, View,
} from 'react-native';
import _ from 'lodash';
import { AppSettingsContext } from '../../context/GetContexts';
import CustomText from '../CommonComponents/CustomText';
import colors from '../../helpers/Colors';
import fonts from '../../helpers/Fonts';

const AppSettingsGeneralInfo = () => {
  const { state: AppSettingsState } = useContext(AppSettingsContext);

  const renderGeneralInfo = ({ item }) => (
    <View style={ styles.languageMainContainer }>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        <CustomText style={styles.leftText}>{_.startCase(item)}</CustomText>
        <CustomText style={styles.rightText}>{_.startCase(AppSettingsState.app_info[item])}</CustomText>
      </View>
    </View>
  )
  return (
    <FlatList
        keyExtractor={(item, index) => index?.toString()}
        data={Object.keys(AppSettingsState.app_info)}
        renderItem={renderGeneralInfo}
    />
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
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 15,
  },
  leftText: {
    color: colors.gray,
    fontSize: 12,
    fontFamily: fonts.RBold,
    textAlign: 'center',
  },
  rightText: {
    color: colors.gray,
    fontSize: 12,
    fontFamily: fonts.RBold,
    textAlign: 'center',
  },
})
export default AppSettingsGeneralInfo;
