import React, {FC, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// import {Notifier} from 'react-native-notifier';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {signInScreenStyles} from './SignInScreenStyles';
import {useNavigation} from '@react-navigation/native';

import {NavigatorRootStackParamList} from 'src/types/navigationTypes';
import useCurrentUser from 'src/hooks/useCurrentUser';
import {getStateFromStorage} from 'src/utils/storageWorker';

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

    const users = await getStateFromStorage('user');
    console.log(users);
    // const passwordArray = (await getStateFromStorage('password'))?.split(',');

    // if (loginArray?.includes(loginValue)) {
    //   Notifier.showNotification({
    //     title: 'Wrong login',
    //     description: 'check your login please',
    //     duration: 0,
    //     showAnimationDuration: 800,
    //     hideOnPress: true,
    //   });

    //   return;
    // }

    // if (password !== passwordValue) {
    //   Notifier.showNotification({
    //     title: 'Wrong password',
    //     description: 'check your password please',
    //     duration: 0,
    //     showAnimationDuration: 800,
    //     hideOnPress: true,
    //   });

    //   return;
    // }

    AsyncStorage.setItem('token', 'token');

    // setUser(login);
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
