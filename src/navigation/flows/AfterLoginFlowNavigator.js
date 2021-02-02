import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home/HomeScreen';

const Stack = createStackNavigator();

const AfterLoginFlowNavigator = () => (
  <Stack.Navigator
        headerMode={'none'}
        screenOptions={{ cardStyle: { backgroundColor: '#FFFFFF' } }}
    >
    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
  </Stack.Navigator>
)
export default AfterLoginFlowNavigator;
