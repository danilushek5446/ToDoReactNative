/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
import { SignUpScreenStyles } from './SignUpScreenStyles';

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
        <Image source={images.logo} />
        <MyText textValue="Sign in" />
        <View style={SignUpScreenStyles.inputPadding}>
          <View style={SignUpScreenStyles.titlePaddig}>
            <MyText textValue="email" />
          </View>
          <TextInput
            style={SignUpScreenStyles.inputStyles}
            value={loginValue}
            onChangeText={setLoginValue}
            placeholder={MyI18n.t('Enter your email')}
          />
        </View>
        <View style={SignUpScreenStyles.inputPadding}>
          <View style={SignUpScreenStyles.titlePaddig}>
            <MyText textValue="password" />
          </View>
          <View>
            <TextInput
              style={SignUpScreenStyles.inputStyles}
              value={passwordValue}
              onChangeText={setPasswordValue}
              secureTextEntry
              placeholder={MyI18n.t('Enter your password')}
            />
            <Image style={SignUpScreenStyles.passwordIcon} source={images.hide} />
            <TouchableOpacity style={SignUpScreenStyles.forgotPassContainer}>
              <Text style={SignUpScreenStyles.forgotPassText}>
                {MyI18n.t('Forgot Password?')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={SignUpScreenStyles.inputPadding}>
          <MyButton onPress={() => {}} textValue="Sign in" size="big" />
          <View style={SignUpScreenStyles.signUpContainer}>
            <MyText textValue="Don’t have an account?" />
            <TouchableOpacity style={SignUpScreenStyles.signUpButton}>
              <Text style={SignUpScreenStyles.forgotPassText}>
                {MyI18n.t('Sign up')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
