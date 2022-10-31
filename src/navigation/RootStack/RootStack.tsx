import React, {FC} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from 'src/screens/HomeScreen/';
import ProfileScreen from 'src/screens/ProfileScreen/';
import HomeLogo from 'src/assets/Home_free_icon.svg';
import {NavigatorRootStackParamList} from 'src/types/navigationTypes';
import {rootStackStyles} from './RootStackStyles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from '../MyTabBar/MyTabBar';

const Tab = createMaterialBottomTabNavigator<NavigatorRootStackParamList>();

const myTab = createBottomTabNavigator<NavigatorRootStackParamList>();

export const testNavigator: FC = () => {
  return (
    <myTab.Navigator
      tabBar={props => (
        <MyTabBar
          navigation={props.navigation}
          state={props.state}
          descriptors={props.descriptors}
        />
      )}>
      <myTab.Screen name="All" component={HomeScreen} />
    </myTab.Navigator>
  );
};

const RootStack: FC = () => {
  return (
    <Tab.Navigator
      style={rootStackStyles.navigatorStyle}
      activeColor="white"
      inactiveColor="#A8A8A8"
      barStyle={rootStackStyles.barStyle}>
      <Tab.Screen
        name="All"
        options={{
          title: 'All',
          tabBarIcon: ({color}) => (
            <HomeLogo width={23} height={23} fill={color} />
          ),
        }}
        component={HomeScreen}
        initialParams={{name: 'All'}}
      />
      <Tab.Screen
        name="Completed"
        options={{
          title: 'Done',
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
      <Tab.Screen
        name="Active"
        options={{
          title: 'Active',
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
      <Tab.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={23} />
          ),
        }}
        children={() => <ProfileScreen />}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
