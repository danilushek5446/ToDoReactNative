import type { FC } from 'react';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Notifier } from 'react-native-notifier';
import { KeyboardAwareScrollView } from '@pietile-native-kit/keyboard-aware-scrollview';

import useCurrentUser from 'src/hooks/useCurrentUser';
import {
  changeUserPasswordInStorage,
  getUsersFromStorage,
  setItemToStrorage,
} from 'src/utils/storageWorker';
import MyText from 'src/components/MyText';
import MyButton from 'src/components/MyButton/MyButton';
import MyTranslator from 'src/utils/MyTranslator';
import images from 'src/constants/images';
import MyInput from 'src/components/MyInput/MyInput';
import { ForgotPassScreenStyles } from './ForgotPassScreenStyles';

const ForgotPassScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const { setUser } = useCurrentUser();

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

    const usersArray = await getUsersFromStorage('user');

    if (!usersArray) {
      Notifier.showNotification({
        title: MyTranslator.t('No users'),
        description: MyTranslator.t('Sign up please'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    const user = usersArray.users.find(
      (item) => item.login === loginValue,
    );

    if (!user) {
      Notifier.showNotification({
        title: MyTranslator.t('User with this email is not exists'),
        description: MyTranslator.t('Check your email'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    changeUserPasswordInStorage('user', loginValue, passwordValue);

    setItemToStrorage('token', user.id || '');

    setUser(user);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={ForgotPassScreenStyles.screen}>
      <View style={ForgotPassScreenStyles.elipsisContainer}>
        <Image source={images.elipsis} />
      </View>

      <View style={ForgotPassScreenStyles.container}>
        <View style={ForgotPassScreenStyles.logocontainer}>
          <MyText textValue="Forgot Password?" isBold />
          <Text style={ForgotPassScreenStyles.forgotPasswordText}>
            {MyTranslator.t('Forgot Password text')}
          </Text>
        </View>
        <View style={ForgotPassScreenStyles.screenContainer}>
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
            placeholderText="Enter new password"
            isSecureTextEntry
            titleText="Create new password"
            image={images.hide}
            isBold
          />
          <MyInput
            textValue={confirmPasswordValue}
            setTextValue={setConfirmPasswordValue}
            placeholderText="re-enter new password"
            isSecureTextEntry
            titleText="Confirm new Password"
            image={images.hide}
            isBold
          />
        </View>

        <View style={ForgotPassScreenStyles.inputPadding}>
            <MyButton onPress={onPress} textValue="Sign in" size="big" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPassScreen;
