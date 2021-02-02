import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import MainContext from './src/context/MainContext';
import NavigationMainContainer from './src/navigation/NavigationMainContainer';
import MainApp from './src/MainApp';
import colors from './src/helpers/Colors';

console.disableYellowbox = true
const App = () => (
  <>
    <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor={colors.primary} />
    <SafeAreaView style={{ flex: 1 }}>
      <MainContext>
        <NavigationMainContainer>
          <MainApp/>
        </NavigationMainContainer>
      </MainContext>
    </SafeAreaView>
  </>
);

export default App;
