import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';
import colors from '../../helpers/Colors';
import CustomImage from '../../components/CommonComponents/CustomImage';
import images from '../../helpers/ImagesPath';
import CustomText from '../../components/CommonComponents/CustomText';
import fonts from '../../helpers/Fonts';
import AppSettingsLanguages from '../../components/appSettings/AppSettingsLanguages';
import AppSettingsAccessibility from '../../components/appSettings/AppSettingsAccessibility';
import AppSettingsGeneralInfo from '../../components/appSettings/AppSettingsGeneralInfo';

const TAB_ITEMS = ['LANGUAGES', 'ACCESSIBILITY', 'GENERAL INFO'];
const AppSettingsScreen = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState(TAB_ITEMS[0]);
  return (
    <View style={styles.mainContainer}>
      {/*      Header */}
      <View style={styles.headerContainer}>

        {/*  Home Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.homeImageMainContainer}>
          <CustomImage
                source={images.homeIcon}
                style={{ height: 22, width: 22 }}
            />
        </TouchableOpacity>
        {/*  Header Title */}

        <CustomText style={styles.headerTitle}>
          SETTINGS
        </CustomText>

      </View>
      {/*  Switch Tabs */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        {TAB_ITEMS?.map((item) => (
          <TouchableOpacity onPress={() => setCurrentTab(item)} key={item} style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 3, borderColor: item === currentTab ? colors.primary : colors.transparent,
          }}>
            <CustomText
              style={{
                fontFamily: fonts.RBold,
                paddingVertical: 15,
                color: currentTab === item ? colors.gray : colors.lightGray,
              }}>{item}</CustomText>
          </TouchableOpacity>
        ))}

      </View>
      <ScrollView nestedScrollEnabled={false} style={{ flex: 1, padding: 15 }}>
        {currentTab === TAB_ITEMS[0] && <AppSettingsLanguages/>}
        {currentTab === TAB_ITEMS[1] && <AppSettingsAccessibility/>}
        {currentTab === TAB_ITEMS[2] && <AppSettingsGeneralInfo/>}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    height: 65,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImageMainContainer: {
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.whiteColor,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    left: 15,
  },
  headerTitle: {
    color: colors.whiteColor,
    fontSize: 24,
    fontFamily: fonts.RBold,
  },
})
export default AppSettingsScreen;
