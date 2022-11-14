/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Notifier } from 'react-native-notifier';

import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import useCurrentUser from 'src/hooks/useCurrentUser';
import {
  getUserFromStorage,
  setItemToStrorage,
  setUserToStorage,
} from 'src/utils/storageWorker';
import MyText from 'src/components/MyText/MyText';
import MyButton from 'src/components/MyButton/MyButton';
import MyI18n from 'src/utils/MyI18n';
import images from 'src/constants/images';
import MyInput from 'src/components/MyInput/MyInput';
import { SignUpScreenStyles } from './SignUpScreenStyles';

const SignUpScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

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

    setItemToStrorage('token', loginValue);

    setUser(loginValue);
  };

  const onNavigateSignin = () => {
    navigate.navigate('SignIn');
  };

  return (
    <View style={SignUpScreenStyles.container}>
      <View style={SignUpScreenStyles.topButtonsContainer}>
        <View>
          <Image source={images.elipsis} />
        </View>
      </View>
      <View style={SignUpScreenStyles.screenContainer}>
        <MyText textValue="Welcome Onboard!" />
        <MyText textValue="sign up text" />
        <MyInput
          textValue={nameValue}
          setTextValue={setNameValue}
          placeholderText="Enter your full name"
          isSecureTextEntry={false}
          titleText="name"
        />
        <MyInput
          textValue={loginValue}
          setTextValue={setLoginValue}
          placeholderText="Enter your email"
          isSecureTextEntry={false}
          titleText="email"
        />
        <MyInput
          textValue={passwordValue}
          setTextValue={setPasswordValue}
          placeholderText="Enter your password"
          isSecureTextEntry
          titleText="password"
          image={images.hide}
        />
        <MyInput
          textValue={confirmPasswordValue}
          setTextValue={setConfirmPasswordValue}
          placeholderText="re-enter your password"
          isSecureTextEntry
          titleText="Confirm Password"
          image={images.hide}
        />
      </View>
      <View style={SignUpScreenStyles.inputPadding}>
        <MyButton onPress={onPress} textValue="Sign up" size="big" />
        <View style={SignUpScreenStyles.signUpContainer}>
          <MyText textValue="Allready have an account?" />
          <TouchableOpacity onPress={onNavigateSignin} style={SignUpScreenStyles.signUpButton}>
            <Text style={SignUpScreenStyles.forgotPassText}>
              {MyI18n.t('Sign in')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
