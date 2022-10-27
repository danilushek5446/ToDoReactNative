import React, {FC} from 'react';

import {useAppSelector} from 'src/store/hooks';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthStack';
import RootStack from './RootStack';

export const Navigation: FC = () => {
  const username = useAppSelector(state => state.user.username);
  return (
    <NavigationContainer>
      {username ? <RootStack /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
