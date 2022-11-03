/* eslint-disable react/no-children-prop */
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert } from 'react-native';

import { getToken } from 'src/utils/storageWorker';
import type { NavigatorMainStackType, NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import useCurrentUser from 'src/hooks/useCurrentUser';
import AuthNavigation from './AuthStack';
import RootStack from './RootStack';

type DataType = {
  type?: string;
};

const Stack = createNativeStackNavigator<NavigatorMainStackType>();

export const Navigation: FC = () => {
  const [isLoggin, setIsLoggin] = useState(false);
  const { user } = useCurrentUser();
  const [initialRoute, setInitialRoute] = useState<keyof NavigatorRootStackParamListType>('All');

  useEffect(() => {
    const init = async () => {
      setIsLoggin(false);
      const token = await getToken();
      if (token) {
        setIsLoggin(true);
      }

      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        const data: DataType | undefined = remoteMessage?.data;
        // eslint-disable-next-line no-console
        console.log(data);
        if (data?.type === 'Profile') {
          setInitialRoute('Profile');
          // eslint-disable-next-line no-console
        }
      });
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, [user]);

  useEffect(() => {
    messaging().getInitialNotification().then((remoteMessage) => {
      const data: DataType | undefined = remoteMessage?.data;
      if (data?.type === 'Profile') {
        setInitialRoute('Profile');
        // eslint-disable-next-line no-console
      }
    });

    const subscribe = messaging().onMessage(async (remoteMessage) => {
      const messageBody = remoteMessage?.notification?.body;
      const messageTitle = remoteMessage?.notification?.title;
      const data: DataType | undefined = remoteMessage?.data;
      // eslint-disable-next-line no-console
      console.log(data);
      if (data?.type === 'Profile') {
        setInitialRoute('Profile');
        // eslint-disable-next-line no-console
      }

      Alert.alert(messageTitle || '', messageBody);
    });
    return subscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    messaging().getInitialNotification().then((remoteMessage) => {
      const data: DataType | undefined = remoteMessage?.data;
      if (data?.type === 'Profile') {
        setInitialRoute('Profile');
        // eslint-disable-next-line no-console
      }
    });
    const subscribe = messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      const data: DataType | undefined = remoteMessage?.data;
      // eslint-disable-next-line no-console
      console.log(data);
      if (data?.type === 'Profile') {
        setInitialRoute('Profile');
        // eslint-disable-next-line no-console
      }
    });
    return subscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggin ? (
          <Stack.Screen name="Root" children={() => <RootStack initialRoute={initialRoute} />} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
