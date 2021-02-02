import React, { useContext, useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, FlatList,
} from 'react-native';
import CustomText from '../components/CommonComponents/CustomText';
import colors from '../helpers/Colors';
import { AuthContext } from '../context/AuthContext';
import CustomIcon, { IconTypes } from '../components/CommonComponents/CustomIcon';
import { appDrawerMenu } from '../constants/DefaultVariables';
import CustomImage from '../components/CommonComponents/CustomImage';

const DrawerScreen = () => {
  const { state: AuthState } = useContext(AuthContext);
  const [currentMenu, setCurrentMenu] = useState(0);
  const renderDrawerMenu = ({ item, index }) => (
    <TouchableOpacity
        onPress={() => setCurrentMenu(index)} style={{
          ...styles.singleDrawerItem,
          backgroundColor: currentMenu === index ? 'rgba(55,71,97, 0.14)' : colors.whiteColor,
        }}>
      <>
        <CustomImage
          style={{
            flex: 0.15,
            marginRight: 10,
          }}
          source={item.icon}
          tintColor={currentMenu === index ? colors.navyBlue : colors.gray}
      />
        <CustomText
          style={{
            flex: 1,
            fontSize: 14,
            color: currentMenu === index ? colors.navyBlue : colors.gray,
          }}>
          {item.name}
        </CustomText>
      </>
    </TouchableOpacity>
  )
  return (
    <View style={styles.mainContainer}>
      {/*  Upper Profile */}
      <View style={styles.upperProfileContainer}>

        {/*    Profile Pic */}
        <View style={styles.profilePicContainer}>
          <CustomImage
                resizeMode={'cover'}
                style={styles.profilePic}
                source={AuthState?.auth_user?.profilePic}
           />
        </View>

        {/* Name */}
        <View style={{ alignItems: 'flex-end' }}>
          <CustomText style={styles.nameText}>
            {AuthState?.auth_user?.name}
          </CustomText>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={styles.switchIcon}>
              <CustomIcon
                  style={{
                    paddingVertical: 2,
                    paddingHorizontal: 5,
                  }}
                  IconType={IconTypes.MaterialCommunityIcons}
                  name={'swap-horizontal'}
                  size={15}/>
            </TouchableOpacity>

            <CustomText style={styles.cityText}>
              {AuthState?.auth_user?.city}
            </CustomText>
          </View>
        </View>
      </View>

      {/* Section List */}
      <View style={{ flex: 1, marginTop: 15 }}>
        <FlatList
            keyExtractor={(item, index) => index?.toString()}
            data={appDrawerMenu}
            renderItem={renderDrawerMenu}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flex: 1,
  },
  upperProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePicContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: colors.whiteColor,
    borderColor: colors.gray,
    borderWidth: 3,
    shadowColor: colors.blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  profilePic: {
    height: 60,
    width: 60,
  },
  nameText: {
    fontSize: 16,
  },
  cityText: {
    fontSize: 13,
    color: colors.gray,
  },
  switchIcon: {
    marginRight: 5,
    backgroundColor: colors.whiteColor,
    shadowColor: colors.blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 50,
  },
  singleDrawerItem: {
    borderRadius: 15,
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default DrawerScreen;
