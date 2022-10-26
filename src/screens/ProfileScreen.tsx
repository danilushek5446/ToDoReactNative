import React, { FC, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { screenStyles } from './screenStyles'

type PropType = {
  setIslogin: () => void;
}

const ProfileScreen: FC<PropType> = ({ setIslogin }) => {
  const [login, setLogin] = useState('');

  const onPress = () => {
    AsyncStorage.removeItem('token');
    setIslogin();
  }

  useEffect(() => {
    (async () => {
      setLogin(await AsyncStorage.getItem('login') || '')
    })()
  }, [])

  return (
    <View style={screenStyles.screenContainer}>
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <Text>login: </Text>
        <Text>{login}</Text>
      </View>
      <View style={screenStyles.inputPadding}>
        <Button onPress={onPress} title='log out' />
      </View>
    </View>
  );
}

export default ProfileScreen;
