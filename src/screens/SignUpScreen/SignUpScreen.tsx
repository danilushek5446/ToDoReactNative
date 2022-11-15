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
import MyTranslator from 'src/utils/MyTranslator';
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
    if (!loginValue) {
      Notifier.showNotification({
        title: MyTranslator.t('Email field is empty'),
        description: MyTranslator.t('Enter your email'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    if (!passwordValue) {
      Notifier.showNotification({
        title: MyTranslator.t('Password field is empty'),
        description: MyTranslator.t('Enter your password'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    if (!confirmPasswordValue) {
      Notifier.showNotification({
        title: MyTranslator.t('Confirm password field is empty'),
        description: MyTranslator.t('re-enter your password'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      Notifier.showNotification({
        title: MyTranslator.t('Passwords must be matched'),
        description: MyTranslator.t('Check your passwords'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    const usersArray = await getUserFromStorage('user');

    if (usersArray?.users.some((item) => item.login === loginValue)) {
      Notifier.showNotification({
        title: MyTranslator.t('User with this email is allready exists'),
        description: MyTranslator.t('Change your email'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    setUserToStorage('user', { login: loginValue, password: passwordValue, name: nameValue });

    setItemToStrorage('token', loginValue);

    setUser(loginValue);
  };

  const onNavigateSignin = () => {
    navigate.navigate('SignIn');
  };

  return (
    <View style={SignUpScreenStyles.screen}>
      <View style={SignUpScreenStyles.elipsisContainer}>
        <Image source={images.elipsis} />
      </View>

      <View style={SignUpScreenStyles.container}>
        <View style={SignUpScreenStyles.container}>
          <View style={SignUpScreenStyles.logocontainer}>
            <MyText textValue="Welcome Onboard!" isBold />
            <MyText textValue="sign up text" isBold={false} />
          </View>

          <View style={SignUpScreenStyles.screenContainer}>
            <MyInput
              textValue={nameValue}
              setTextValue={setNameValue}
              placeholderText="Enter your full name"
              isSecureTextEntry={false}
              titleText="name"
              isBold
            />
            <MyInput
              textValue={loginValue}
              setTextValue={setLoginValue}
              placeholderText="Enter your email"
              isSecureTextEntry={false}
              titleText="email"
              isBold
            />
            <MyInput
              textValue={passwordValue}
              setTextValue={setPasswordValue}
              placeholderText="Enter your password"
              isSecureTextEntry
              titleText="password"
              image={images.hide}
              isBold
            />
            <MyInput
              textValue={confirmPasswordValue}
              setTextValue={setConfirmPasswordValue}
              placeholderText="re-enter your password"
              isSecureTextEntry
              titleText="Confirm Password"
              image={images.hide}
              isBold
            />
          </View>

          <View style={SignUpScreenStyles.inputPadding}>
            <MyButton onPress={onPress} textValue="Sign up" size="big" />
            <View style={SignUpScreenStyles.signUpContainer}>
              <MyText textValue="Allready have an account?" isBold={false} />
              <TouchableOpacity onPress={onNavigateSignin} style={SignUpScreenStyles.signUpButton}>
                <Text style={SignUpScreenStyles.forgotPassText}>
                  {MyTranslator.t('Sign in')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
