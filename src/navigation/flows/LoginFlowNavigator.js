import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import AppSettingsScreen from '../../screens/appSettings/AppSettingsScreen';

const Stack = createStackNavigator();

const LoginFlowNavigator = () => (
  <Stack.Navigator
            headerMode={'none'}
            screenOptions={{ cardStyle: { backgroundColor: '#FFFFFF' } }}
        >
    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    <Stack.Screen name="AppSettingsScreen" component={AppSettingsScreen}/>
  </Stack.Navigator>
)
export default LoginFlowNavigator;
