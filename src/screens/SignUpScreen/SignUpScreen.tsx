import React, {FC, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

import {signUpScreenStyles} from './SignUpScreenStyles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorRootStackParamList} from 'src/types/navigationTypes';
import useCurrentUser from 'src/hooks/useCurrentUser';
import {setToken, setStateToStorage} from 'src/utils/storageWorker';

const SignUpScreen: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useCurrentUser();

  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamList, any>
    >();

  const onPress = () => {
    if (!loginValue || !passwordValue) {
      return;
    }

    setStateToStorage('user', {login: loginValue, password: passwordValue});
    setToken('token', 'token');

    setUser(loginValue);
  };

  const onNavigateSignUp = () => {
    navigate.navigate('SignIn');
  };

  return (
    <View style={signUpScreenStyles.container}>
      <View style={signUpScreenStyles.navigateButton}>
        <Button onPress={onNavigateSignUp} title="Sign In" />
      </View>
      <View style={signUpScreenStyles.screenContainer}>
        <Text>Sign up</Text>
        <View style={signUpScreenStyles.inputPadding}>
          <Text>login</Text>
          <TextInput
            style={signUpScreenStyles.inputStyles}
            value={loginValue}
            onChangeText={setLoginValue}
          />
        </View>
        <View style={signUpScreenStyles.inputPadding}>
          <Text>password</Text>
          <TextInput
            style={signUpScreenStyles.inputStyles}
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry
          />
        </View>
        <View style={signUpScreenStyles.inputPadding}>
          <Button title="submit" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
