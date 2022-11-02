import React, {FC, useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RootStack from './RootStack/';
import AuthNavigation from './AuthStack';
import {getToken} from 'src/utils/storageWorker';
import {NavigatorMainStackType} from 'src/types/navigationTypes';
import useCurrentUser from 'src/hooks/useCurrentUser';

const Stack = createNativeStackNavigator<NavigatorMainStackType>();

export const Navigation: FC = () => {
  const [isLoggin, setIsLoggin] = useState(false);
  const {user} = useCurrentUser();

  useEffect(() => {
    const init = async () => {
      setIsLoggin(false);
      if (await getToken()) {
        setIsLoggin(true);
      }
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, [user]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggin ? (
          <Stack.Screen name="Root" component={RootStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
