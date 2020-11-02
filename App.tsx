import 'react-native-gesture-handler'
import '@shared-state'
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { RootNavigator } from './src/navigation';
import { GoogleAuth } from '@thirdparty';

const App: React.FC = () => {
  React.useEffect(() => {
    GoogleAuth.configure()
  }, [])
  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent' />
      <RootNavigator />
      <FlashMessage position='top' />
    </>
  );
};

export default App;
