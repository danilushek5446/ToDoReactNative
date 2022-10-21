import React, { FC, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type PropType = {
  setIslogin: () => void;
}

const SignUpScreen: FC<PropType> = ({ setIslogin }) => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onPress = async () => {
    if (!loginValue || !passwordValue) {
      return;
    }

    await AsyncStorage.setItem('login', loginValue);
    await AsyncStorage.setItem('password', passwordValue);

    setIslogin();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'peachpuff' }}>
      <Text>registration</Text>
      <View style={{paddingTop: 20}}>
        <Text>login</Text>
        <TextInput
          style={{width: 200, height: 40, backgroundColor: 'white'}}
          value={loginValue}
          onChangeText={setLoginValue}
        />
      </View>
      <View style={{paddingTop: 20}}>
        <Text>password</Text>
        <TextInput
          style={{width: 200, height: 40, backgroundColor: 'white'}}
          value={passwordValue}
          onChangeText={setPasswordValue}
        />
      </View>
      <Button
        title='submit'
        onPress={onPress}
      />
    </View>
  );
}

export default SignUpScreen;
