import React, {FC} from 'react';

import SignInScreen from 'src/screens/SignInScreen/SignInScreen';
import SignUpScreen from 'src/screens/SignUpScreen/SignUpScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorRootStackParamList} from 'src/types/navigationTypes';

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
