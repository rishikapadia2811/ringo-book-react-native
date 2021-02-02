import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const IconTypes = {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
}
const CustomIcon = ({
  name = 'eye', IconType = AntDesign, color = 'black', size = 40, style = null,
}) => <IconType color={color} size={size} name={name} style={style} />;

export default CustomIcon;
