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

const SignInScreen: FC<PropType> = ({ setIslogin }) => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onPress = async () => {
    if (!loginValue || !passwordValue) {
      return;
    }

    const login = await AsyncStorage.getItem('login');
    const password = await AsyncStorage.getItem('password');

    if(login === loginValue && password === passwordValue) {
      setIslogin();
    }

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'peachpuff' }}>
      <Text>registration</Text>
      <View>
        <Text>login</Text>
        <TextInput
          style={{width: 200, height: 40, backgroundColor: 'white'}}
          value={loginValue}
          onChangeText={setLoginValue}
        />
      </View>
      <View>
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

export default SignInScreen;
