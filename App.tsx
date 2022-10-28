import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Core from './src/core/Core';
import {NotifierWrapper} from 'react-native-notifier';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  return (
    <NotifierWrapper>
      <Provider store={store}>
        <Core />
      </Provider>
    </NotifierWrapper>
  );
};

export default App;
