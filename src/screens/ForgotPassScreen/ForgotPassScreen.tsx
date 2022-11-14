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
import { ForgotPassScreenStyles } from './ForgotPassScreenStyles';

const ForgotPassScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const { setUser } = useCurrentUser();

  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignUp'>
    >();

  // const onPress = async () => {
  //   if (!loginValue || !passwordValue) {
  //     return;
  //   }

  //   const usersArray = await getUserFromStorage('user');

  //   if (usersArray?.users.some((item) => item.login === loginValue)) {
  //     Notifier.showNotification({
  //       title: 'User with this login is allready exists',
  //       description: 'Change your login please',
  //       duration: 0,
  //       showAnimationDuration: 800,
  //       hideOnPress: true,
  //     });

  //     return;
  //   }

  //   setUserToStorage('user', { login: loginValue, password: passwordValue });

  //   setItemToStrorage('token', loginValue);

  //   setUser(loginValue);
  // };

  // const onNavigateSignin = () => {
  //   navigate.navigate('SignIn');
  // };

  return (
    <View style={ForgotPassScreenStyles.container}>
      <View style={ForgotPassScreenStyles.topButtonsContainer}>
        <View>
          <Image source={images.elipsis} />
        </View>
      </View>
      <View style={ForgotPassScreenStyles.titleContainer}>
        <MyText textValue="Forgot Password?" />
        <Text style={ForgotPassScreenStyles.forgotPasswordText}>
         {MyI18n.t('Forgot Password text')}
        </Text>
      </View>
      <View style={ForgotPassScreenStyles.screenContainer}>
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
          placeholderText="Enter new password"
          isSecureTextEntry
          titleText="Create new password"
          image={images.hide}
        />
        <MyInput
          textValue={confirmPasswordValue}
          setTextValue={setConfirmPasswordValue}
          placeholderText="re-enter new password"
          isSecureTextEntry
          titleText="Confirm new Password"
          image={images.hide}
        />
        <View style={ForgotPassScreenStyles.inputPadding}>
          <MyButton onPress={() => { }} textValue="Sign in" size="big" />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassScreen;
