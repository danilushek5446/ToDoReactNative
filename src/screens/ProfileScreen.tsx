import React, { FC, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type PropType = {
  setIslogin: () => void;
}

const ProfileScreen: FC<PropType> = ({ setIslogin }) => {
  const [login, setLogin] = useState('');

  const onPress = () => {
    AsyncStorage.removeItem('login');
    AsyncStorage.removeItem('password');
    setIslogin();
  }

  useEffect(() => {
    (async () => {
      setLogin(await AsyncStorage.getItem('login') || '')
    })()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'peachpuff', flexDirection: 'column' }}>
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <Text>login: </Text>
        <Text>{login}</Text>
      </View>
      <View style={{ paddingTop: 20, }}>
        <Button onPress={onPress} title='log out' />
      </View>
    </View>
  );
}

export default ProfileScreen;
