import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './navigationRef';

const NavigationMainContainer = ({ children }) => (
  <NavigationContainer ref={navigationRef}>
    {children}
  </NavigationContainer>
)

export default NavigationMainContainer;
