import type { FC } from 'react';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from 'src/screens/SignInScreen/';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import SignUpScreen from 'src/screens/SignUpScreen';
import MyTranslator from 'src/utils/MyTranslator';
import ForgotPassScreen from 'src/screens/ForgotPassScreen';

const stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const AuthNavigation: FC = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen
        name="SignIn"
        options={{ title: MyTranslator.t('Sign in') }}
        component={SignInScreen}
      />
      <stack.Screen
        name="SignUp"
        options={{ title: MyTranslator.t('Sign up') }}
        component={SignUpScreen}
      />
      <stack.Screen
        name="forgotPas"
        options={{ title: MyTranslator.t('Forgot Password?') }}
        component={ForgotPassScreen}
      />
    </stack.Navigator>
  );
};

export default AuthNavigation;
