import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {profileScreenStyles} from './ProfileScreenStyles';
import useCurrentUser from 'src/hooks/';

const ProfileScreen: FC = () => {
  const [user, setUser] = useCurrentUser();

  const onPress = () => {
    AsyncStorage.removeItem('token');

    setUser(null);
  };

  return (
    <View style={profileScreenStyles.screenContainer}>
      <View style={profileScreenStyles.loginContainer}>
        <Text>login: </Text>
        <Text>{user.username}</Text>
      </View>
      <View style={profileScreenStyles.inputPadding}>
        <Button onPress={onPress} title="log out" />
      </View>
    </View>
  );
};

export default ProfileScreen;