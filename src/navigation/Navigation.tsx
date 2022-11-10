import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getToken } from 'src/utils/storageWorker';
import type { NavigatorMainStackType, NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import useCurrentUser from 'src/hooks/useCurrentUser';
import Modal from 'src/components/ModalWindow/ModalWindow';
import type { DataType, ModalType } from 'src/types/modalTypes';
import AuthNavigation from './AuthStack';
import RootStack from './RootStack';

const Stack = createNativeStackNavigator<NavigatorMainStackType>();

export const Navigation: FC = () => {
  const [isLoggin, setIsLoggin] = useState(false);
  const { user } = useCurrentUser();
  const [initialRoute, setInitialRoute] = useState<keyof NavigatorRootStackParamListType>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalType>({});

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
        setIsModalOpen(true);
        return;
      }

      setIsModalOpen(true);
    });
    return subscribe;
  }, []);

  useEffect(() => {
    messaging().getInitialNotification()
      .then((remoteMessage) => {
        const data: DataType | undefined = remoteMessage?.data;

        if (data?.type === 'Profile') {
          setInitialRoute('Profile');
        }
      });

    const subscribe = messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      const data: DataType | undefined = remoteMessage?.data;

      if (data?.type === 'Profile') {
        setInitialRoute('Profile');
      }
    });
    return subscribe;
  }, []);

  const Root = () => {
    return <RootStack initialRoute={initialRoute} setInitialRoute={setInitialRoute} />;
  };

  return (
    <NavigationContainer>
      {isModalOpen &&
        (<Modal
          setIsOpen={setIsModalOpen}
          setInitialRoute={setInitialRoute}
          modalInfo={modalInfo}
        />)}
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#DCDCDC' } }}>
        {isLoggin ? (
          <Stack.Screen name="Root" component={Root} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
