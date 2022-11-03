import AsyncStorage from '@react-native-async-storage/async-storage';

import type { UserArrayStorageType, UserStorageType } from 'src/types/userTypes';

export const getUserFromStorage = async (key: string) => {
  const itemFromStorage = await AsyncStorage.getItem(key);

  if (!itemFromStorage) {
    return null;
  }

  const userArray: UserArrayStorageType = JSON.parse(itemFromStorage);

  return userArray;
};

export const setUserToStorage = async (key: string, user: UserStorageType) => {
  const itemFromStorage = await getUserFromStorage(key);

  if (!itemFromStorage) {
    const userArray: UserArrayStorageType = { users: [] };

    userArray.users.push(user);

    AsyncStorage.setItem(key, JSON.stringify(userArray));

    return;
  }

  itemFromStorage.users.push(user);

  AsyncStorage.setItem(key, JSON.stringify(itemFromStorage));
};

export const setToken = async (username: string) => {
  AsyncStorage.setItem('token', username);
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');

  return token;
};

export const removeItemFromStorage = async (key: string) => {
  AsyncStorage.removeItem(key);
};
