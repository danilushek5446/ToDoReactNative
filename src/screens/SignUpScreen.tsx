import React, {FC, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {screenStyles} from './screenStyles';
import {addUser} from 'src/store/userSlice/userSlice';
import {useAppDispatch} from 'src/store/hooks';

const SignUpScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const dispatch = useAppDispatch();

  const onPress = () => {
    if (!loginValue || !passwordValue) {
      return;
    }

    AsyncStorage.setItem('login', loginValue);
    AsyncStorage.setItem('password', passwordValue);
    AsyncStorage.setItem('token', 'token');

    dispatch(addUser(loginValue));
  };

  return (
    <View style={screenStyles.screenContainer}>
      <Text>registration</Text>
      <View style={screenStyles.inputPadding}>
        <Text>login</Text>
        <TextInput
          style={screenStyles.inputStyles}
          value={loginValue}
          onChangeText={setLoginValue}
        />
      </View>
      <View style={screenStyles.inputPadding}>
        <Text>password</Text>
        <TextInput
          style={screenStyles.inputStyles}
          value={passwordValue}
          onChangeText={setPasswordValue}
          secureTextEntry
        />
      </View>
      <View style={screenStyles.inputPadding}>
        <Button title="submit" onPress={onPress} />
      </View>
    </View>
  );
};

export default SignUpScreen;
