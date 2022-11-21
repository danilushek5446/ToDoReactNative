import type { FC } from 'react';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import type { MediaType, PhotoQuality } from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';

import useCurrentUser from 'src/hooks/useCurrentUser';
import MyTranslator from 'src/utils/MyTranslator';
import { changeUserAvatarInStorage, removeItemFromStorage } from 'src/utils/storageWorker';
import images from 'src/constants/images';
import { profileScreenStyles } from './ProfileScreenStyles';

const ProfileScreen: FC = () => {
  const { user, setUserPhoto, deleteUser } = useCurrentUser();

  const chooseFile = (type: MediaType) => {
    const options = {
      includeBase64: true,
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1 as PhotoQuality,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        // Alert.alert('User cancelled camera picker');
        return;
      } if (response.errorCode === 'camera_unavailable') {
        // Alert.alert('Camera not available on device');
        return;
      } if (response.errorCode === 'permission') {
        // Alert.alert('Permission not satisfied');
        return;
      } if (response.errorCode === 'others') {
        // Alert.alert(response.errorMessage || '');
        return;
      }
      if (response.assets) {
        changeUserAvatarInStorage('user', user.login || '', response.assets[0].base64 || '');

        setUserPhoto(response.assets[0].base64 || '');
      }
    });
  };

  const onLogOut = () => {
    removeItemFromStorage('token');

    deleteUser();
  };

  return (
    <View style={profileScreenStyles.screenContainer}>
      <View style={profileScreenStyles.contentContainer}>

        <Image
          source={user.photo ? { uri: `data:image/jpg;base64,${user.photo}` } : images.newUser}
          style={profileScreenStyles.avatar}
        />

        <View style={profileScreenStyles.loginContainer}>
          <Text style={profileScreenStyles.text}>{user.name || ''}</Text>
        </View>

        <View style={profileScreenStyles.changePhotoContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={profileScreenStyles.photoChangeButton}
            onPress={() => chooseFile('photo')}
          >
            <Text style={profileScreenStyles.photoChangeText}>{MyTranslator.t('CHANGE PHOTO')}</Text>
          </TouchableOpacity>
        </View>

        <View style={profileScreenStyles.changePhotoContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={profileScreenStyles.signOutButton}
            onPress={onLogOut}
          >
            <Text style={profileScreenStyles.signOutText}>{MyTranslator.t('SIGN OUT')}</Text>
          </TouchableOpacity>
        </View>

        <View style={profileScreenStyles.elipsisContainer}>
          <Image source={images.whiteElipsis} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
