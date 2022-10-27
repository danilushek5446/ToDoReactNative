import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {useAppSelector} from 'src/store/hooks';
import {Navigation} from 'src/navigation/Navigation';

const Core = () => {
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    const init = async () => {
      // const authStatus = await messaging().requestPermission();
      // const enabled =
      //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      // if (enabled) {
      //   const channel = firebase.initializeApp()
      //   const fcmToken = await messaging().getToken();
      //   if (fcmToken) {
      //     console.log(fcmToken);
      //     console.log("Your Firebase Token is:", fcmToken);
      //     console.log('Authorization status:', authStatus);
      //   } else {
      //     console.log("Failed", "No token received");
      //   }
      //   // console.log('Authorization status:', authStatus);
      // }
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, [user]);

  useEffect(() => {
    // const subscribe = messaging().onMessage(async remoteMessage => {
    //   // Get the message body
    //   let messageBody = remoteMessage?.notification?.body;
    //   // Get the message title
    //   let messageTitle = remoteMessage?.notification?.title;
    //   // Show an alert to the user
    //   Alert.alert(messageTitle || '', messageBody);
    // });
    // return subscribe;
  }, []);

  return <Navigation />;
};

export default Core;
