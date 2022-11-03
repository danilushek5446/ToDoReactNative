import type { FC } from 'react';
import React from 'react';
import { Button, Text, View } from 'react-native';

import useCurrentUser from 'src/hooks/useCurrentUser';
import { removeItemFromStorage } from 'src/utils/storageWorker';
import { profileScreenStyles } from './ProfileScreenStyles';

const ProfileScreen: FC = () => {
  const { user, setUser } = useCurrentUser();

  const onPress = () => {
    removeItemFromStorage('token');

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
