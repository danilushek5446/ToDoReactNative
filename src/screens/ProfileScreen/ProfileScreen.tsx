import React, {FC, useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {profileScreenStyles} from './ProfileScreenStyles';
import useCurrentUser from 'src/hooks/useCurrentUser';

const ProfileScreen: FC = () => {
  const [login, setLogin] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useCurrentUser();

  const onPress = () => {
    AsyncStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    (async () => {
      setLogin((await AsyncStorage.getItem('login')) || '');
    })();
  }, []);

  return (
    <View style={profileScreenStyles.screenContainer}>
      <View style={profileScreenStyles.loginContainer}>
        <Text>login: </Text>
        <Text>{login}</Text>
      </View>
      <View style={profileScreenStyles.inputPadding}>
        <Button onPress={onPress} title="log out" />
      </View>
    </View>
  );
};

export default ProfileScreen;
