import type { FC } from 'react';
import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Notifier } from 'react-native-notifier';

import useCurrentUser from 'src/hooks/useCurrentUser';
import { getUsersFromStorage, setItemToStrorage } from 'src/utils/storageWorker';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import MyText from 'src/components/MyText';
import MyButton from 'src/components/MyButton';
import images from 'src/constants/images';
import MyTranslator from 'src/utils/MyTranslator';
import MyInput from 'src/components/MyInput';
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

    const userArray = await getUsersFromStorage('user');

    if (!userArray) {
      Notifier.showNotification({
        title: MyTranslator.t('No users'),
        description: MyTranslator.t('Sign up please'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    const user = userArray.users.find(
      (item) => item.login === loginValue,
    );

    if (!user) {
      Notifier.showNotification({
        title: MyTranslator.t('Wrong Email'),
        description: MyTranslator.t('Check your Email'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    if (!(user.password === passwordValue)) {
      Notifier.showNotification({
        title: MyTranslator.t('Wrong password'),
        description: MyTranslator.t('Сheck your password'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    setItemToStrorage('token', user.id || '');

    setUser(user);
  };

  const toggleCheckBox = () => {
    setIsSavePass(!isSavePass);
  };

  const onNavigateSignUp = () => {
    navigate.navigate('SignUp');
  };

  const onNavigateForgotPass = () => {
    navigate.navigate('forgotPas');
  };

  return (
    <KeyboardAvoidingView style={signInScreenStyles.screen}>
      <View style={signInScreenStyles.elipsisContainer}>
        <Image source={images.elipsis} />
      </View>

      <View style={signInScreenStyles.container}>
        <View style={signInScreenStyles.logocontainer}>
          <Image source={images.logo} />
          <MyText textValue="Sign in" isBold />
        </View>

        <View style={signInScreenStyles.screenContainer}>
          <MyInput
            textValue={loginValue}
            setTextValue={setLoginValue}
            placeholderText="Enter your email"
            isSecureTextEntry={false}
            titleText="email"
            isBold
          />
          <View style={signInScreenStyles.inputPadding}>
            <View style={signInScreenStyles.titlePaddig}>
              <MyText textValue="password" isBold />
            </View>
            <View>
              <TextInput
                style={signInScreenStyles.inputStyles}
                value={passwordValue}
                onChangeText={setPasswordValue}
                secureTextEntry
                placeholder={MyTranslator.t('Enter your password')}
              />
              <Image style={signInScreenStyles.passwordIcon} source={images.hide} />
              <TouchableOpacity
                style={signInScreenStyles.forgotPassContainer}
                onPress={onNavigateForgotPass}
              >
                <Text style={signInScreenStyles.forgotPassText}>
                  {MyTranslator.t('Forgot Password?')}
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
            <MyText textValue="Remember me" isBold={false} />
          </View>
        </View>

        <View>
          <MyButton onPress={onSubmit} textValue="Sign in" size="big" />
          <View style={signInScreenStyles.signUpContainer}>
            <MyText textValue="Don’t have an account?" isBold={false} />
            <TouchableOpacity style={signInScreenStyles.signUpButton} onPress={onNavigateSignUp}>
              <Text style={signInScreenStyles.forgotPassText}>
                {MyTranslator.t('Sign up')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
