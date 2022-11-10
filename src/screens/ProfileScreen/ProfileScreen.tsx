import type { FC, SetStateAction } from 'react';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

import useCurrentUser from 'src/hooks/useCurrentUser';
import { getToken, removeItemFromStorage } from 'src/utils/storageWorker';
import { profileScreenStyles } from './ProfileScreenStyles';

const ProfileScreen: FC = () => {
  const { user, setUser } = useCurrentUser();

  const onPress = () => {
    removeItemFromStorage('token');

    setUser(null);
  };

  useEffect(() => {
    (async () => {
      const username = await getToken();

      setUser(username);
    })();
  }, []);

  return (
    <View style={profileScreenStyles.screenContainer}>
      <View style={profileScreenStyles.loginContainer}>
        <Text style={profileScreenStyles.text}>login: </Text>
        <Text style={profileScreenStyles.text}>{user.username}</Text>
      </View>
      <View style={profileScreenStyles.inputPadding}>
        <Button onPress={onPress} title="log out" />
      </View>
    </View>
  );
};

export default ProfileScreen;
