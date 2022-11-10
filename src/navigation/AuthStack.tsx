import type { FC } from 'react';
import React from 'react';

import SignInScreen from 'src/screens/SignInScreen/';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import SignUpScreen from 'src/screens/SignUpScreen/';
import Myi18n from 'src/utils/Myi18n';

const stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const AuthNavigation: FC = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="SignIn"
        options={{ title: Myi18n.t('Sign in') }}
        component={SignInScreen}
      />
      <stack.Screen
        name="SignUp"
        options={{ title: Myi18n.t('Sign up') }}
        component={SignUpScreen}
      />
    </stack.Navigator>
  );
};

export default AuthNavigation;
