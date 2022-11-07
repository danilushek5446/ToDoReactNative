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

  const setInitialRouteState = () => {
    setInitialRoute('Profile');
  };

  useEffect(() => {
    const init = async () => {
      const token = await getToken();

      if (token) {
        setIsLoggin(true);

        return;
      }

      setIsLoggin(false);
      // const fcmToken = await messaging().getToken();
      // // eslint-disable-next-line no-console
      // console.log(fcmToken);
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, [user]);

  useEffect(() => {
    const subscribe = messaging().onMessage(async (remoteMessage) => {
      const messageBody = remoteMessage?.notification?.body;
      const messageTitle = remoteMessage?.notification?.title;
      const data: DataType | undefined = remoteMessage?.data;

      if (data?.type === 'Profile') {
        Alert.alert(messageTitle || '', messageBody, [{ text: 'accept', onPress: setInitialRouteState }, { text: 'decline', style: 'cancel' }]);
        return;
      }

      Alert.alert(messageTitle || '', messageBody);
    });
    return subscribe;
  }, []);

  useEffect(() => {
    const subscribe = messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      const data: DataType | undefined = remoteMessage?.data;

      if (data?.type === 'Profile') {
        setInitialRoute('Profile');
      }
    });
    return subscribe;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggin ? (
          <Stack.Screen name="Root" children={() => <RootStack initialRoute={initialRoute} setInitialRoute={setInitialRoute} />} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
