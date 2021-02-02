import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/splash/SplashScreen';

const Stack = createStackNavigator();

const SplashFlowNavigator = () => (
  <Stack.Navigator
            headerMode={'none'}
            screenOptions={{ cardStyle: { backgroundColor: '#FFFFFF' } }}
        >
    <Stack.Screen name="SplashScreen" component={SplashScreen}/>
  </Stack.Navigator>
)

export default SplashFlowNavigator;
