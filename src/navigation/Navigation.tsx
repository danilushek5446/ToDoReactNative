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
import Modal from 'src/components/ModalWindow/ModalWindow';
import AuthNavigation from './AuthStack';
import RootStack from './RootStack';

type DataType = {
  type?: string;
};

type ModalType = {
  messageBody?: string;
  messageTitle?: string;
  data?: DataType;
};

const Stack = createNativeStackNavigator<NavigatorMainStackType>();

export const Navigation: FC = () => {
  const [isLoggin, setIsLoggin] = useState(false);
  const { user } = useCurrentUser();
  const [initialRoute, setInitialRoute] = useState<keyof NavigatorRootStackParamListType>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalType>({});

  const setInitialRouteState = () => {
    setInitialRoute('Profile');
  };

  useEffect(() => {
    const init = async () => {
      const token = await getToken();

      // const fcmToken = await messaging().getToken();
      // console.log(fcmToken);

      if (token) {
        setIsLoggin(true);

        return;
      }

      setIsLoggin(false);
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

      setModalInfo({ messageBody, messageTitle, data });

      if (data?.type === 'Profile') {
        // eslint-disable-next-line max-len
        // Alert.alert(messageTitle || '', messageBody, [{ text: 'accept', onPress: setInitialRouteState }, { text: 'decline', style: 'cancel' }]);

        setIsModalOpen(true);
        return;
      }

      // Alert.alert(messageTitle || '', messageBody);
      setIsModalOpen(true);
    });
    return subscribe;
  }, []);

  useEffect(() => {
    messaging().getInitialNotification()
      .then((remoteMessage) => {
        const data: DataType | undefined = remoteMessage?.data;
        console.log(213);

        // if (data?.type === 'Profile') {
        //   setInitialRoute('Profile');
        // }
      });

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
      {isModalOpen &&
      (<Modal
        setIsOpen={setIsModalOpen}
        setInitialRoute={setInitialRoute}
        modalInfo={modalInfo}
      />)}
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
