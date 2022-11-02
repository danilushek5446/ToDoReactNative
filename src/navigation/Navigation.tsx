import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';

// import AuthNavigation from './AuthStack';
import RootStack from './RootStack/';
// import useCurrentUser from 'src/hooks/useCurrentUser';
import AuthNavigation from './AuthStack';
import {useAppSelector} from 'src/store/hooks';

export const Navigation: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const username = useAppSelector(state => state.user.username);
  return (
    <NavigationContainer>
      {username ? <RootStack /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
