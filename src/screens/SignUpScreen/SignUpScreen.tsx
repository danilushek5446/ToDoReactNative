import type { FC } from 'react';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Notifier } from 'react-native-notifier';

import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import useCurrentUser from 'src/hooks/useCurrentUser';
import {
  getUserFromStorage,
  setToken,
  setUserToStorage,
} from 'src/utils/storageWorker';
import MyText from 'src/components/MyText/MyText';
import MyButton from 'src/components/MyButton/MyButton';
import { signUpScreenStyles } from './SignUpScreenStyles';

const SignUpScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const { setUser } = useCurrentUser();

  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignUp'>
    >();

  const onPress = async () => {
    if (!loginValue || !passwordValue) {
      return;
    }

    const usersArray = await getUserFromStorage('user');

    if (usersArray?.users.some((item) => item.login === loginValue)) {
      Notifier.showNotification({
        title: 'User with this login is allready exists',
        description: 'Change your login please',
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    setUserToStorage('user', { login: loginValue, password: passwordValue });

    setToken(loginValue);

    setUser(loginValue);
  };

  const onNavigateSignin = () => {
    navigate.navigate('SignIn');
  };

  return (
    <View style={signUpScreenStyles.container}>
      <View style={signUpScreenStyles.navigateButton}>
        <MyButton onPress={onNavigateSignin} textValue="Sign in" />
      </View>
      <View style={signUpScreenStyles.screenContainer}>
        <MyText textValue="Sign up" />
        <View style={signUpScreenStyles.inputPadding}>
          <MyText textValue="login" />
          <TextInput
            style={signUpScreenStyles.inputStyles}
            value={loginValue}
            onChangeText={setLoginValue}
          />
        </View>
        <View style={signUpScreenStyles.inputPadding}>
          <MyText textValue="password" />
          <TextInput
            style={signUpScreenStyles.inputStyles}
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry
          />
        </View>
        <View style={signUpScreenStyles.inputPadding}>
          <MyButton onPress={onPress} textValue="Submit" />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
