import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RNBootSplash from "react-native-bootsplash";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import store from './src/store/store';
import { NavigatorRootStackParamList, MyTabNavigator } from './src/components/tabNavigator/MyTabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialBottomTabNavigator<NavigatorRootStackParamList>();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const changeIsLogin = () => {
    setIsSignedIn(!isSignedIn);
  }

  useEffect(() => {
    const init = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsSignedIn(true);
      }
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <MyTabNavigator isSignedIn={isSignedIn} changeIsLogin={changeIsLogin}/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
