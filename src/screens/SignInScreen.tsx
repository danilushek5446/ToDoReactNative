import React, { FC, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { screenStyles } from './screenStyles';

type PropType = {
  setIslogin: () => void;
}

const SignInScreen: FC<PropType> = ({ setIslogin }) => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState('');

  const onPress = async () => {
    if (!loginValue || !passwordValue) {
      return;
    }

    const login = await AsyncStorage.getItem('login');
    const password = await AsyncStorage.getItem('password');

    console.log(login, password)

    if (login !== loginValue) {
      setError('Wrong login');
      return;
    }

    if (password !== passwordValue) {
      setError('Wrong password');
      return;
    }

    AsyncStorage.setItem('token', 'token');

    setIslogin();
  }

  return (
    <View style={screenStyles.screenContainer}>
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
        <Button
          title='submit'
          onPress={onPress}
        />
      </View>
    </View>
  );
}

export default SignInScreen;
