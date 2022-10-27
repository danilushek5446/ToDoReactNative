import React, {FC, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Notifier} from 'react-native-notifier';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {screenStyles} from './screenStyles';
import {useAppDispatch} from 'src/store/hooks';
import {addUser} from 'src/store/userSlice/userSlice';
import {useNavigation} from '@react-navigation/native';

import {NavigatorRootStackParamList} from 'src/types/navigationTypes';

const SignInScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState('');

  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamList, any>
    >();
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    if (!loginValue || !passwordValue) {
      return;
    }

    const login = await AsyncStorage.getItem('login');
    const password = await AsyncStorage.getItem('password');

    if (login !== loginValue) {
      setError('Wrong login');
      Notifier.showNotification({
        title: 'Wrong login',
        description: 'check your login please',
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });
      return;
    }

    if (password !== passwordValue) {
      setError('Wrong password');
      Notifier.showNotification({
        title: 'Wrong login',
        description: 'check your login please',
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });
      return;
    }

    AsyncStorage.setItem('token', 'token');

    dispatch(addUser(login));
  };

  const onNavigateSignUp = () => {
    navigate.navigate('SignUp');
  };

  return (
    <View style={screenStyles.screenContainer}>
      <View>
        <Button onPress={onNavigateSignUp} title="Sign Up" />
      </View>
      <Text>Sign in</Text>
      <View style={screenStyles.inputPadding}>
        <Text>login</Text>
        <TextInput
          style={screenStyles.inputStyles}
          value={loginValue}
          onChangeText={setLoginValue}
        />
        <Text>{error.includes('login') && error}</Text>
      </View>
      <View style={screenStyles.inputPadding}>
        <Text>password</Text>
        <TextInput
          style={screenStyles.inputStyles}
          value={passwordValue}
          onChangeText={setPasswordValue}
          secureTextEntry
        />
        <Text>{error.includes('password') && error}</Text>
      </View>
      <View style={screenStyles.inputPadding}>
        <Button title="submit" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default SignInScreen;
