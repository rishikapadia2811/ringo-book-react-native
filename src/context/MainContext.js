import React from 'react';
import { AppSettingsProvider, AuthProvider } from './GetContexts';

const MainContext = ({ children }) => (
  <AppSettingsProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </AppSettingsProvider>
)
export default MainContext;
