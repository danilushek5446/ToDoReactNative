import type { FC } from 'react';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import MyButton from 'src/components/MyButton/MyButton';

import useCurrentUser from 'src/hooks/useCurrentUser';
import Myi18n from 'src/utils/Myi18n';
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
        <Text style={profileScreenStyles.text}>{`${Myi18n.t('login')}: `}</Text>
        <Text style={profileScreenStyles.text}>{user.username || ''}</Text>
      </View>
      <View style={profileScreenStyles.inputPadding}>
        <MyButton onPress={onPress} textValue="log out" />
      </View>
    </View>
  );
};

export default ProfileScreen;
