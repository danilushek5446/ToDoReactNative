import type { FC } from 'react';
import React, { useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'src/screens/HomeScreen/';
import ProfileScreen from 'src/screens/ProfileScreen/';
import Home from 'src/assets/icons/Home_free_icon.svg';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import { useAppDispatch } from 'src/store/hooks';
import { setActiveTubNumber } from 'src/store/activeTubNumberSlice/activeTubNumberSlice';
import Myi18n from 'src/utils/Myi18n';
import MyTabBar from '../MyTabBar/MyTabBar';

type PropType = {
  initialRoute: keyof NavigatorRootStackParamListType;
  setInitialRoute: React.Dispatch<React.SetStateAction<keyof NavigatorRootStackParamListType>>;
};

const myTab = createBottomTabNavigator<NavigatorRootStackParamListType>();

const RootStack: FC<PropType> = ({ initialRoute, setInitialRoute }) => {
  const dispatch = useAppDispatch();

  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignIn'>
    >();

  useEffect(() => {
    if (initialRoute === 'Profile') {
      navigate.navigate('Profile');
      // number of profile screen
      dispatch(setActiveTubNumber(3));
      setInitialRoute('All');
    }
  }, [initialRoute]);
  return (
    <myTab.Navigator
      screenOptions={{ tabBarHideOnKeyboard: true }}
      sceneContainerStyle={{ flex: 1, backgroundColor: 'red' }}
      tabBar={(props) => (
        <MyTabBar
          navigation={props.navigation}
          state={props.state}
          descriptors={props.descriptors}
        />
      )}
    >
      <myTab.Screen
        name="All"
        options={{
          title: Myi18n.t('All'),
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => (
            <Home width={23} height={23} fill={color} />
          ),
        }}
        component={HomeScreen}
        initialParams={{ name: 'All' }}
      />
      <myTab.Screen
        name="Completed"
        options={{
          title: Myi18n.t('Done'),
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bookmark-check"
              color={color}
              size={23}
            />
          ),
        }}
        component={HomeScreen}
        initialParams={{ name: 'Completed' }}
      />
      <myTab.Screen
        name="Active"
        options={{
          title: Myi18n.t('Active'),
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bookmark-minus"
              color={color}
              size={23}
            />
          ),
        }}
        component={HomeScreen}
        initialParams={{ name: 'Active' }}
      />
      <myTab.Screen
        name="Profile"
        options={{
          title: Myi18n.t('Profile'),
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={23} />
          ),
        }}
        component={ProfileScreen}
      />
    </myTab.Navigator>
  );
};

export default RootStack;
