import React, { useState, useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager } from 'react-native';
import { getAsyncStorage, setAsyncStorage } from './helpers/AsyncStorageHelper';
import AsyncKeys from './constants/AsyncKeys';
import { AppSettingsContext, AuthContext } from './context/GetContexts';
import {
  appFontSizes, appLanguages, appThemes,
} from './constants/DefaultVariables';
import SplashFlowNavigator from './navigation/flows/SplashFlowNavigator';
import LoginFlowNavigator from './navigation/flows/LoginFlowNavigator';
import AfterLoginFlowDrawerNavigator from './navigation/flows/AfterLoginFlowDrawerNavigator';

const Stack = createStackNavigator();

const MainApp = () => {
  const [flow, setFlow] = useState(0);
  const { state: AppSettingsState } = useContext(AppSettingsContext);
  const { state: AuthState, setAuthUser, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    appInitialization();
  }, [])

  const appInitialization = async () => {
    const appSettings = await getAsyncStorage(AsyncKeys.APP_SETTINGS);
    if (!appSettings) {
      await I18nManager.forceRTL(false);
      await setAsyncStorage(AsyncKeys.APP_SETTINGS, {
        [AsyncKeys.APP_LANGUAGE]: appLanguages[0],
        [AsyncKeys.APP_THEME]: appThemes[0],
        [AsyncKeys.APP_FONT_SIZE]: appFontSizes[0],
      })
    } else {
      if (appSettings[AsyncKeys.APP_LANGUAGE]?.isRTL) await I18nManager.forceRTL(true);
      else await I18nManager.forceRTL(false);

      await setAsyncStorage(AsyncKeys.APP_SETTINGS, {
        [AsyncKeys.APP_LANGUAGE]: appSettings?.[AsyncKeys.APP_LANGUAGE],
        [AsyncKeys.APP_THEME]: appSettings?.[AsyncKeys.APP_THEME],
        [AsyncKeys.APP_FONT_SIZE]: appSettings?.[AsyncKeys.APP_FONT_SIZE],
      })
    }

    setTimeout(async () => {
      const isLoggedIn = await getAsyncStorage(AsyncKeys.AUTH_IS_LOGGEDIN);
      const authUser = await getAsyncStorage(AsyncKeys.AUTH_USER);
      if (isLoggedIn) {
        setFlow(2);
        setAuthUser(authUser);
        setIsLoggedIn(true);
      } else {
        setFlow(1);
      }
    }, 2000);
  }

  useEffect(() => {
    if (flow !== 0) {
      if (AuthState.is_loggedIn) setFlow(2);
      else setFlow(1);
    }
  }, [AuthState.is_loggedIn])

  const changeRTLDirection = async () => {
    if (AppSettingsState.app_language) {
      if (AppSettingsState.app_language.isRTL) await I18nManager.forceRTL(true)
      else await I18nManager.forceRTL(false)
    }
  }

  useEffect(() => {
    changeRTLDirection();
  }, [AppSettingsState.app_language]);

  return (
    <Stack.Navigator headerMode="none">
      {flow === 0 && (<Stack.Screen name="splashFlow" component={SplashFlowNavigator} />)}
      {flow === 1 && (<Stack.Screen name="loginFlow" component={LoginFlowNavigator} />)}
      {flow === 2 && (<Stack.Screen name="afterLoginFlow" component={AfterLoginFlowDrawerNavigator} />)}
    </Stack.Navigator>
  );
}

export default MainApp;
