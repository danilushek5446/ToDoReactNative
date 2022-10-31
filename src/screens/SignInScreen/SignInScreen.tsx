import React, {FC, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {Notifier} from 'react-native-notifier';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {signInScreenStyles} from './SignInScreenStyles';

import {NavigatorRootStackParamList} from 'src/types/navigationTypes';
import useCurrentUser from 'src/hooks/';
import {getUserFromStorage} from 'src/utils/storageWorker';

const SignInScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamList, any>
    >();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useCurrentUser();

  const onSubmit = async () => {
    if (!loginValue || !passwordValue) {
      return;
    }

    const userArray = await getUserFromStorage('user');

    console.log(userArray);

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
      item => item.login === loginValue,
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
      item => item.password === passwordValue,
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

    AsyncStorage.setItem('token', 'token');

    setUser(loginValue);
  };

  const onNavigateSignUp = () => {
    navigate.navigate('SignUp');
  };

  return (
    <View style={signInScreenStyles.container}>
      <View style={signInScreenStyles.navigateButton}>
        <Button onPress={onNavigateSignUp} title="Sign Up" />
      </View>
      <View style={signInScreenStyles.screenContainer}>
        <Text>Sign in</Text>
        <View style={signInScreenStyles.inputPadding}>
          <Text>login</Text>
          <TextInput
            style={signInScreenStyles.inputStyles}
            value={loginValue}
            onChangeText={setLoginValue}
          />
        </View>
        <View style={signInScreenStyles.inputPadding}>
          <Text>password</Text>
          <TextInput
            style={signInScreenStyles.inputStyles}
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry
          />
        </View>
        <View style={signInScreenStyles.inputPadding}>
          <Button title="submit" onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
