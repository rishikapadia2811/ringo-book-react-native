import React from 'react';
import { ActivityIndicator, View } from 'react-native'
import colors from '../../helpers/Colors';
import { hp, isIOS, wp } from '../../helpers/ScreenHelper';

const SplashScreen = () => (
  <View style={{
    width: wp(100), height: hp(100), justifyContent: 'center', alignItems: 'center',
  }}>
    <ActivityIndicator color={colors.primary} size={isIOS ? 'large' : 25} />
  </View>

)

export default SplashScreen;
