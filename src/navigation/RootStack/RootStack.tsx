import React, {FC} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from 'src/screens/HomeScreen/';
import ProfileScreen from 'src/screens/ProfileScreen/';
import HomeLogo from 'src/assets/Home_free_icon.svg';
import {NavigatorRootStackParamList} from 'src/types/navigationTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from '../MyTabBar/MyTabBar';

const myTab = createBottomTabNavigator<NavigatorRootStackParamList>();

const RootStack: FC = () => {
  return (
    <myTab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true}}
      tabBar={props => (
        <MyTabBar
          navigation={props.navigation}
          state={props.state}
          descriptors={props.descriptors}
        />
      )}>
      <myTab.Screen
        name="All"
        options={{
          title: 'All',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({color}) => (
            <HomeLogo width={23} height={23} fill={color} />
          ),
        }}
        component={HomeScreen}
        initialParams={{name: 'All'}}
      />
      <myTab.Screen
        name="Completed"
        options={{
          title: 'Done',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bookmark-check"
              color={color}
              size={23}
            />
          ),
        }}
        component={HomeScreen}
        initialParams={{name: 'Completed'}}
      />
      <myTab.Screen
        name="Active"
        options={{
          title: 'Active',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bookmark-minus"
              color={color}
              size={23}
            />
          ),
        }}
        component={HomeScreen}
        initialParams={{name: 'Active'}}
      />
      <myTab.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={23} />
          ),
        }}
        children={() => <ProfileScreen />}
      />
    </myTab.Navigator>
  );
};

export default RootStack;
