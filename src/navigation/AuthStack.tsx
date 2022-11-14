import type { FC } from 'react';
import React from 'react';

import SignInScreen from 'src/screens/SignInScreen/';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import SignUpScreen from 'src/screens/SignUpScreen/';
import MyI18n from 'src/utils/MyI18n';
import ForgotPassScreen from 'src/screens/ForgotPassScreen/ForgotPassScreen';

const stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const AuthNavigation: FC = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen
        name="SignIn"
        options={{ title: MyI18n.t('Sign in') }}
        component={SignInScreen}
      />
      <stack.Screen
        name="SignUp"
        options={{ title: MyI18n.t('Sign up') }}
        component={SignUpScreen}
      />
      <stack.Screen
        name="forgotPas"
        options={{ title: MyI18n.t('Forgot Password?') }}
        component={ForgotPassScreen}
      />
    </stack.Navigator>
  );
};

export default AuthNavigation;
