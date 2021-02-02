import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from '../DrawerScreen';
import colors from '../../helpers/Colors';
import AfterLoginFlowNavigator from './AfterLoginFlowNavigator';
import { AppSettingsContext } from '../../context/GetContexts';

const Drawer = createDrawerNavigator();

const AfterLoginFlowDrawerNavigator = () => {
  const { state: AppSettingsState } = useContext(AppSettingsContext)
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerScreen props={props} /> }
                          drawerPosition={AppSettingsState.app_language.isRTL ? 'right' : 'left'}
                          drawerContentOptions={{
                            activeTintColor: 'red',
                          }}
                          openByDefault={false}
                          overlayColor={'rgba(0,0,0,0.5)'}
                          drawerStyle={{
                            width: '80%',
                            backgroundColor: colors.whiteColor,
                          }}>
      <Drawer.Screen name="afterLoginFlow" component={ AfterLoginFlowNavigator } />
    </Drawer.Navigator>
  )
}
export default AfterLoginFlowDrawerNavigator;
