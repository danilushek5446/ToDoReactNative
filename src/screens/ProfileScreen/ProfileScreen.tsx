import type { FC } from 'react';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import LanguagePicker from 'src/components/LanguagePicker';
import MyButton from 'src/components/MyButton/MyButton';
import useCurrentUser from 'src/hooks/useCurrentUser';
import { useAppSelector } from 'src/store/hooks';
import MyTranslator from 'src/utils/MyTranslator';
import { getItemFromStrorage, removeItemFromStorage } from 'src/utils/storageWorker';
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
      const username = await getItemFromStrorage('token');

      setUser(username);
    })();
  }, []);

  useEffect(() => {
    MyTranslator.locale = currentLanguage;
  }, [currentLanguage]);

  return (
    <View style={profileScreenStyles.screenContainer}>
      <View style={profileScreenStyles.languagePicker}>
        <LanguagePicker />
      </View>
      <View style={profileScreenStyles.contentContainer}>
        <View style={profileScreenStyles.loginContainer}>
          <Text style={profileScreenStyles.text}>{`${MyTranslator.t('login')}: `}</Text>
          <Text style={profileScreenStyles.text}>{user.username || ''}</Text>
        </View>
        <View style={profileScreenStyles.inputPadding}>
          <MyButton onPress={onPress} textValue="log out" size="small" />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
