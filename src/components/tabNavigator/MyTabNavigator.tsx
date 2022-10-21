import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { FC, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';

export type NavigatorRootStackParamList = {
  All: { name: string };
  Completed: { name: string };
  Active: { name: string };
  SignIn: undefined;
  SignUp: undefined;
  Profile: undefined;
}

type PropType = {
  isSignedIn: boolean;
  changeIsLogin:() => void;
}

const Tab = createMaterialBottomTabNavigator<NavigatorRootStackParamList>();

export const MyTabNavigator: FC<PropType> = ({isSignedIn, changeIsLogin}) => {

  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#E9967A' }}
    >
          {isSignedIn ? (
            <>
              <Tab.Screen
                name="All"
                options={{ title: 'All', tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bookmark" color={color} size={26} />
                ), }}
                component={HomeScreen}
                initialParams={{ name: 'All' }}
              />
              <Tab.Screen
                name="Completed"
                options={{ title: 'Completed', tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bookmark-check" color={color} size={26} />
                ), }}
                component={HomeScreen}
                initialParams={{ name: 'Completed' }}
              />
              <Tab.Screen
                name="Active"
                options={{ title: 'Active', tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bookmark-minus" color={color} size={26} />
                ), }}
                component={HomeScreen}
                initialParams={{ name: 'Active' }}
              />
              <Tab.Screen
                name="Profile"
                options={{ title: 'Profile', tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
                ), }}
                children={() => <ProfileScreen setIslogin={changeIsLogin}/>}
              />
            </>
          ) : (
            <>
              <Tab.Screen
                name="SignIn"
                options={{ tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="login" color={color} size={26} />
                ), }}
                children={() => <SignInScreen setIslogin={changeIsLogin}/>}
              />
               <Tab.Screen
                name="SignUp"
                options={{ tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="lead-pencil" color={color} size={26} />
                ), }}
                children={() => <SignUpScreen setIslogin={changeIsLogin}/>}
              />
            </>
          )}
        </Tab.Navigator>
  );
};
