import React, { SetStateAction, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RNBootSplash from "react-native-bootsplash";
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './src/screens/HomeScreen';

import store from './src/store/store';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';


export type NavigatorRootStackParamList = {
  All: { name: string };
  Completed: { name: string };
  Active: { name: string };
  SignIn: undefined;
  SignUp: undefined;
}

const Tab = createBottomTabNavigator<NavigatorRootStackParamList>();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const changeIsLogin = () => {
    setIsSignedIn(!isSignedIn);
  }

  useEffect(() => {
    const init = async () => {
      const value = await AsyncStorage.getItem('login');
      if (value) {
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
        <Tab.Navigator>
          {isSignedIn ? (
            <>
              <Tab.Screen
                name="All"
                options={{ title: 'all' }}
                children={() => <HomeScreen />}
                initialParams={{ name: 'All' }}
              />
              <Tab.Screen
                name="Completed"
                options={{ title: 'Completed' }}
                component={HomeScreen}
                initialParams={{ name: 'Completed' }}
              />
              <Tab.Screen
                name="Active"
                options={{ title: 'Active' }}
                component={HomeScreen}
                initialParams={{ name: 'Active' }}
              />
            </>
          ) : (
            <>
              <Tab.Screen
                name="SignIn"
                children={() => <SignInScreen setIslogin={changeIsLogin}/>}
              />
               <Tab.Screen
                name="SignUp"
                children={() => <SignUpScreen setIslogin={changeIsLogin}/>}
              />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
