import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserStorageType} from 'src/types/userTypes';

export const getStateFromStorage = async (key: string) => {
  const itemFromStorage = await AsyncStorage.getItem(key);

  return itemFromStorage != null ? JSON.parse(itemFromStorage) : null;
};

export const setStateToStorage = async (key: string, user: UserStorageType) => {
  const itemFromStorage = await getStateFromStorage(key);

  const stringValue = itemFromStorage ? itemFromStorage.push(user) : user;
  console.log(stringValue);

  console.log(' ', itemFromStorage + stringValue);
  AsyncStorage.setItem(key, JSON.stringify(stringValue));
};

export const setToken = async (key: string, value: string) => {
  AsyncStorage.setItem(key, value);
};
