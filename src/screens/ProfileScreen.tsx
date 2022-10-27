import React, {FC, useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {screenStyles} from './screenStyles';
import {useAppDispatch} from 'src/store/hooks';
import {removeUser} from 'src/store/userSlice/userSlice';

const ProfileScreen: FC = () => {
  const [login, setLogin] = useState('');

  const dispatch = useAppDispatch();
  const onPress = () => {
    AsyncStorage.removeItem('token');
    dispatch(removeUser);
  };

  useEffect(() => {
    (async () => {
      setLogin((await AsyncStorage.getItem('login')) || '');
    })();
  }, []);

  return (
    <View style={screenStyles.screenContainer}>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Text>login: </Text>
        <Text>{login}</Text>
      </View>
      <View style={screenStyles.inputPadding}>
        <Button onPress={onPress} title="log out" />
      </View>
    </View>
  );
};

export default ProfileScreen;
