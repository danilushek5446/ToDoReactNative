import type { FC } from 'react';
import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Notifier } from 'react-native-notifier';

import useCurrentUser from 'src/hooks/useCurrentUser';
import { getUserFromStorage, setItemToStrorage } from 'src/utils/storageWorker';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import MyText from 'src/components/MyText/MyText';
import MyButton from 'src/components/MyButton/MyButton';
import images from 'src/constants/images';
import MyI18n from 'src/utils/MyI18n';
import { signInScreenStyles } from './SignInScreenStyles';

const SignInScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isSavePass, setIsSavePass] = useState(false);

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

    setItemToStrorage('token', loginValue);

    setUser(loginValue);
  };

  const toggleCheckBox = () => {
    setIsSavePass(!isSavePass);
  };

  const onNavigateSignUp = () => {
    navigate.navigate('SignUp');
  };

  return (
    <View style={signInScreenStyles.container}>
      <View style={signInScreenStyles.topButtonsContainer}>
        <View>
          <Image source={images.elipsis} />
        </View>
      </View>
      <View style={signInScreenStyles.screenContainer}>
        <Image source={images.logo} />
        <MyText textValue="Sign in" />
        <View style={signInScreenStyles.inputPadding}>
          <View style={signInScreenStyles.titlePaddig}>
            <MyText textValue="email" />
          </View>
          <TextInput
            style={signInScreenStyles.inputStyles}
            value={loginValue}
            onChangeText={setLoginValue}
            placeholder={MyI18n.t('Enter your email')}
          />
        </View>
        <View style={signInScreenStyles.inputPadding}>
          <View style={signInScreenStyles.titlePaddig}>
            <MyText textValue="password" />
          </View>
          <View>
            <TextInput
              style={signInScreenStyles.inputStyles}
              value={passwordValue}
              onChangeText={setPasswordValue}
              secureTextEntry
              placeholder={MyI18n.t('Enter your password')}
            />
            <Image style={signInScreenStyles.passwordIcon} source={images.hide} />
            <TouchableOpacity style={signInScreenStyles.forgotPassContainer}>
              <Text style={signInScreenStyles.forgotPassText}>
                {MyI18n.t('Forgot Password?')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={signInScreenStyles.rememberMeContainer}>
          <TouchableOpacity onPressOut={toggleCheckBox}>
            <View
              style={
                isSavePass
                  ? signInScreenStyles.checkedCheckbox
                  : signInScreenStyles.activeCheckbox
              }
            />
          </TouchableOpacity>
          <MyText textValue="Remember me" />
        </View>
        <View style={signInScreenStyles.inputPadding}>
          <MyButton onPress={onSubmit} textValue="Sign in" size="big" />
          <View style={signInScreenStyles.signUpContainer}>
            <MyText textValue="Don’t have an account?" />
            <TouchableOpacity style={signInScreenStyles.signUpButton} onPress={onNavigateSignUp}>
              <Text style={signInScreenStyles.forgotPassText}>
                {MyI18n.t('Sign up')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
