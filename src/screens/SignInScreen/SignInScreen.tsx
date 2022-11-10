import type { FC } from 'react';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Notifier } from 'react-native-notifier';

import useCurrentUser from 'src/hooks/useCurrentUser';
import { getUserFromStorage, setToken } from 'src/utils/storageWorker';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import MyText from 'src/components/MyText/MyText';
import MyButton from 'src/components/MyButton/MyButton';
import { signInScreenStyles } from './SignInScreenStyles';

const SignInScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignIn'>
    >();
  const { setUser } = useCurrentUser();

  const onSubmit = async () => {
    if (!loginValue || !passwordValue) {
      return;
    }

    const userArray = await getUserFromStorage('user');

    if (!userArray) {
      Notifier.showNotification({
        title: 'No users',
        description: 'sign up please',
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    const isLoginRight = userArray.users.some(
      (item) => item.login === loginValue,
    );

    if (!isLoginRight) {
      Notifier.showNotification({
        title: 'Wrong login',
        description: 'check your login please',
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    const isPasswordRight = userArray.users.some(
      (item) => item.password === passwordValue,
    );

    if (!isPasswordRight) {
      Notifier.showNotification({
        title: 'Wrong password',
        description: 'check your password please',
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    setToken(loginValue);

    setUser(loginValue);
  };

  const onNavigateSignUp = () => {
    navigate.navigate('SignUp');
  };

  return (
    <View style={signInScreenStyles.container}>
      <View style={signInScreenStyles.navigateButton}>
        <MyButton onPress={onNavigateSignUp} textValue="Sign up" />
      </View>
      <View style={signInScreenStyles.screenContainer}>
        <MyText textValue="Sign in" />
        <View style={signInScreenStyles.inputPadding}>
          <MyText textValue="login" />
          <TextInput
            style={signInScreenStyles.inputStyles}
            value={loginValue}
            onChangeText={setLoginValue}
          />
        </View>
        <View style={signInScreenStyles.inputPadding}>
          <MyText textValue="password" />
          <TextInput
            style={signInScreenStyles.inputStyles}
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry
          />
        </View>
        <View style={signInScreenStyles.inputPadding}>
          <MyButton onPress={onSubmit} textValue="Submit" />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
