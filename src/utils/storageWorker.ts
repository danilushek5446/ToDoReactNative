import AsyncStorage from '@react-native-async-storage/async-storage';

import type { UserArrayStorageType, UserType } from 'src/types/userTypes';

export const getUsersFromStorage = async (key: string) => {
  const itemFromStorage = await AsyncStorage.getItem(key);

  if (!itemFromStorage) {
    return null;
  }

  const userArray: UserArrayStorageType = JSON.parse(itemFromStorage);

  return userArray;
};

export const setUserToStorage = async (key: string, user: UserType) => {
  const itemFromStorage = await getUsersFromStorage(key);

  if (!itemFromStorage) {
    const userArray: UserArrayStorageType = { users: [] };

    userArray.users.push(user);

    AsyncStorage.setItem(key, JSON.stringify(userArray));

    return;
  }

  itemFromStorage.users.push(user);

  AsyncStorage.setItem(key, JSON.stringify(itemFromStorage));
};

export const setItemToStrorage = async (key: string, value: string) => {
  AsyncStorage.setItem(key, value);
};

export const getItemFromStrorage = async (key: string) => {
  const itemFromStorage = await AsyncStorage.getItem(key);

  return itemFromStorage;
};

export const removeItemFromStorage = async (key: string) => {
  AsyncStorage.removeItem(key);
};

export const changeUserPasswordInStorage = async (key: string, login: string, password: string) => {
  const userArray = await getUsersFromStorage(key);

  if (userArray) {
    const index = userArray?.users.findIndex((item) => item.login === login);

    userArray.users[index].password = password;

    AsyncStorage.setItem(key, JSON.stringify(userArray));
  }
};

export const changeUserAvatarInStorage = async (key: string, login: string, photo: string) => {
  const userArray = await getUsersFromStorage(key);

  if (userArray) {
    const index = userArray?.users.findIndex((item) => item.login === login);

    userArray.users[index].photo = photo;

    AsyncStorage.setItem(key, JSON.stringify(userArray));
  }
};

export const getUserById = async (id: string) => {
  const userArray = await getUsersFromStorage('user');

  if (userArray) {
    const index = userArray.users.findIndex((item) => item.id === id);

    return userArray.users[index];
  }
};
