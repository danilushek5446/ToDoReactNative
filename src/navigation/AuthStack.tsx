import React, {FC} from 'react';

import SignInScreen from 'src/screens/SignInScreen/';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorRootStackParamList} from 'src/types/navigationTypes';
import SignUpScreen from 'src/screens/SignUpScreen/';

const stack = createNativeStackNavigator<NavigatorRootStackParamList>();

const AuthNavigation: FC = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="SignIn" component={SignInScreen} />
      <stack.Screen name="SignUp" component={SignUpScreen} />
    </stack.Navigator>
  );
};

export default AuthNavigation;
