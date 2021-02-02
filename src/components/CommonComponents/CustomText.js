import React, { useContext } from 'react';
import { Text } from 'react-native';
import fonts from '../../helpers/Fonts';
import { AppSettingsContext } from '../../context/GetContexts';
import { getStyleAccordingToDirectionForText } from '../../helpers/StylesHelper';
import AsyncKeys from '../../constants/AsyncKeys';

const CustomText = ({
  style, children,
}) => {
  const { state: AppSettingsState } = useContext(AppSettingsContext);
  return (
    <Text

            style={{
              fontSize: 12,
              fontFamily: fonts.RRegular,
              ...getStyleAccordingToDirectionForText(AppSettingsState?.[AsyncKeys.APP_LANGUAGE]?.isRTL),
              ...style,
            }}
        >
      {children}
    </Text>
  )
}

export default CustomText;
