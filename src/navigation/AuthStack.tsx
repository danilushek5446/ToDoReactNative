import type { FC } from 'react';
import React from 'react';

import SignInScreen from 'src/screens/SignInScreen/';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import SignUpScreen from 'src/screens/SignUpScreen/';

const stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const AuthNavigation: FC = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="SignIn" component={SignInScreen} />
      <stack.Screen name="SignUp" component={SignUpScreen} />
    </stack.Navigator>
  );
};

export default AuthNavigation;
