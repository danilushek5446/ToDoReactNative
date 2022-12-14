import type { FC } from 'react';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import LanguagePicker from 'src/components/LanguagePicker';
import MyButton from 'src/components/MyButton/MyButton';
import useCurrentUser from 'src/hooks/useCurrentUser';
import { useAppSelector } from 'src/store/hooks';
import MyI18n from 'src/utils/MyI18n';
import { getToken, removeItemFromStorage } from 'src/utils/storageWorker';
import { profileScreenStyles } from './ProfileScreenStyles';

const ProfileScreen: FC = () => {
  const currentLanguage = useAppSelector((state) => state.currentLanguage.language);

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

  useEffect(() => {
    MyI18n.locale = currentLanguage;
  }, [currentLanguage]);

  return (
    <View style={profileScreenStyles.screenContainer}>
      <View style={profileScreenStyles.languagePicker}>
        <LanguagePicker />
      </View>
      <View style={profileScreenStyles.contentContainer}>
        <View style={profileScreenStyles.loginContainer}>
          <Text style={profileScreenStyles.text}>{`${MyI18n.t('login')}: `}</Text>
          <Text style={profileScreenStyles.text}>{user.username || ''}</Text>
        </View>
        <View style={profileScreenStyles.inputPadding}>
          <MyButton onPress={onPress} textValue="log out" />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
