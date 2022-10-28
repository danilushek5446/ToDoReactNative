import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
// import {Alert, AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import {Navigation} from 'src/navigation/Navigation';
import {Alert} from 'react-native';
import useCurrentUser from 'src/hooks/useCurrentUser';

const Core = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useCurrentUser();

  useEffect(() => {
    const init = async () => {
      // const tokens = await messaging().getToken();
      // // console.log(tokens);
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, [user]);

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
