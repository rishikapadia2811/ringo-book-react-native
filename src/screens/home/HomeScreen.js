import React, { useContext } from 'react';
import {
  FlatList, StyleSheet, View, Alert, TouchableOpacity, ScrollView,
} from 'react-native';
import { AuthContext } from '../../context/GetContexts';
import { appHomeScreenSections } from '../../constants/DefaultVariables';
import CustomText from '../../components/CommonComponents/CustomText';
import colors from '../../helpers/Colors';
import fonts from '../../helpers/Fonts';
import CustomImage from '../../components/CommonComponents/CustomImage';
import images from '../../helpers/ImagesPath';
import { normalize, wp } from '../../helpers/ScreenHelper';

const HomeScreen = ({ navigation }) => {
  const { state: AuthState } = useContext(AuthContext);
  const { setAuthUser, setIsLoggedIn } = useContext(AuthContext);

  const SingleEntity = ({ item, onPress, subTitleStyle }) => (
    <TouchableOpacity onPress={onPress} style={ styles.languageMainContainer }>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{ flex: 0.5 }}>
          <CustomImage
            source={item?.icon} style={{ height: 80, width: 80 }}
        />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{
            flex: 1, flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'flex-end', justifyContent: 'flex-end',
          }}>
            <CustomText style={styles.prefixName}>
              {item.prefixName}
              <CustomText style={styles.suffixName}>
                {item.suffixName}
              </CustomText>
            </CustomText>

          </View>
          <CustomText style={{ ...styles.subTitle, ...subTitleStyle }}>{item.subTitle}</CustomText>
        </View>
      </View>
    </TouchableOpacity>
  )

  const onSingleSectionPress = (item) => {
    Alert.alert(item.suffixName)
  }

  const renderHomeScreenSections = ({ item }) => (
    <SingleEntity
        item={item}
        onPress={() => onSingleSectionPress(item)}
    />
  )
  const firstItem = {
    prefixName: AuthState.auth_user?.name, suffixName: '', subTitle: 'My Company', icon: images.myUserIcon,
  }

  const onLogoutPress = () => {
    setAuthUser(null);
    setIsLoggedIn(null)
  }
  return (
    <>
      <ScrollView style={{ flex: 1, padding: 15 }} nestedScrollEnabled={false}>
        <SingleEntity
          item={firstItem}
          subTitleStyle={{ color: colors.gray }}
          onPress={() => Alert.alert('My Profile')}/>
        <FlatList
        keyExtractor={(item, index) => index?.toString()}
        data={appHomeScreenSections}
        renderItem={renderHomeScreenSections}
      />
      </ScrollView>

      {/*  Bottom View */}
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ padding: 3 }}>
          <CustomImage source={images.languageSettings} style={{ height: 30, width: 30 }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogoutPress} style={{ padding: 3 }}>
          <CustomImage source={images.logoutIcon} style={{ height: 30, width: 25 }}/>
        </TouchableOpacity>
      </View>
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
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
  },
  prefixName: {
    color: colors.lightGray,
    fontSize: normalize(35),
    fontFamily: fonts.Impact,
  },
  suffixName: {
    color: colors.gray,
    fontSize: normalize(35),
    fontFamily: fonts.Impact,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 18,
    fontFamily: fonts.Impact,
    textAlign: 'right',
  },
  bottomView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(100),
    padding: 15,
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
})
export default HomeScreen;
