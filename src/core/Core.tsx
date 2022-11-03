import React from 'react';
import messaging from '@react-native-firebase/messaging';

import { Navigation } from 'src/navigation/Navigation';

const Core = () => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    // eslint-disable-next-line no-console
    console.log('Message handled in the background!', remoteMessage);
  });
  return <Navigation />;
};

export default Core;
