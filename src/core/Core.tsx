import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

import {Navigation} from 'src/navigation/Navigation';
import {Alert} from 'react-native';

const Core = () => {
  useEffect(() => {
    const subscribe = messaging().onMessage(async remoteMessage => {
      const messageBody = remoteMessage?.notification?.body;
      const messageTitle = remoteMessage?.notification?.title;

      Alert.alert(messageTitle || '', messageBody);
    });
    return subscribe;
  }, []);

  return <Navigation />;
};

export default Core;
