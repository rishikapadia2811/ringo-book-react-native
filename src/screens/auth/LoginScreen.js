import React, { useState, useContext } from 'react';
import {
  View, StyleSheet, TouchableOpacity,
} from 'react-native';
import CustomImage from '../../components/CommonComponents/CustomImage';
import images from '../../helpers/ImagesPath';
import { hp, wp } from '../../helpers/ScreenHelper';
import CustomText from '../../components/CommonComponents/CustomText';
import fonts from '../../helpers/Fonts';
import colors from '../../helpers/Colors';
import CustomLabelTextInput from '../../components/CommonComponents/CustomLabelTextInput';
import CustomButton from '../../components/CommonComponents/CustomButton';
import { AuthContext } from '../../context/GetContexts';
import strings from '../../localization/Localization';

const LoginScreen = ({ navigation }) => {
  const [authData, setAuthData] = useState();
  const { setAuthUser, setIsLoggedIn } = useContext(AuthContext);

  const onSettingPress = () => {
    navigation.navigate('AppSettingsScreen');
  }

  const onLoginPress = () => {
    setIsLoggedIn(true);
    setAuthUser({ name: 'Virat Kohli', profilePic: images.profilePic, city: 'Merkaz Hanechasim' });
  }
  return (
    <View style={styles.mainContainer}>
      <CustomImage
            resizeMode={'contain'}
            source={images.hand}
            style={styles.imageContainer}/>

      {/*    Top Title Section */}
      <View style={styles.topTitleImageContainer}>
        <CustomImage
              resizeMode={'cover'}
              source={images.fingerPrint}
              style={styles.fingerPrintImageContainer}
          />
        <CustomText style={styles.titleText} >
          {strings.ringo}{'\n'}
          REAL-ESTATE{'\n'}
          @{'\n'}
          YOUR HAND
        </CustomText>
      </View>

      {/*  User Input Section */}
      <View style={styles.userInputSectionContainer}>
        <View>
          <CustomLabelTextInput
              labelText={'User Name'}
              value={authData?.userName}
              onChangeText={(text) => setAuthData({ ...authData, userName: text })}
              placeHolderText={'user@name.ltd'}
          />
          <CustomLabelTextInput
              leftImage={images.passwordLock}
              secureTextEntry={true}
              labelText={'Password'}
              value={authData?.passwword}
              onChangeText={(text) => setAuthData({ ...authData, password: text })}
              placeHolderText={'********'}
              rightImage={images.eyeClose}
           />
          <View style={{ marginTop: 10 }}>
            <CustomButton buttonText={'LOGIN'} onPress={onLoginPress} />
          </View>
        </View>
      </View>

      {/*  Bottom View */}
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={onSettingPress} style={{ padding: 5 }}>
          <CustomImage source={images.languageSettings} style={{ height: 25, width: 25 }}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  imageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: hp(80),
    width: hp(80),
    bottom: -20,
  },
  fingerPrintImageContainer: {
    height: 200,
    width: 200,
    top: -20,
  },
  topTitleImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    position: 'absolute',
    color: colors.primary,
    fontSize: 18,
    fontFamily: fonts.RBlack,
  },
  userInputSectionContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '100%',
    padding: 15,
    borderRadius: 15,
  },
  bottomView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: wp(100),
    padding: 15,
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
})
export default LoginScreen;
