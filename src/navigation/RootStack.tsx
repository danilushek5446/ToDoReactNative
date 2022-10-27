import React, {FC} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from 'src/screens/HomeScreen';
import ProfileScreen from 'src/screens/ProfileScreen';
import HomeLogo from 'src/assets/Home_free_icon.svg';
import {NavigatorRootStackParamList} from 'src/types/navigationTypes';

const Tab = createMaterialBottomTabNavigator<NavigatorRootStackParamList>();

const RootStack: FC = () => {
  return (
    <Tab.Navigator
      style={{backgroundColor: '#DCDCDC'}}
      activeColor="white"
      inactiveColor="#A8A8A8"
      barStyle={{
        backgroundColor: '#505050',
        borderRadius: 40,
        overflow: 'hidden',
        width: 200,
        alignSelf: 'center',
        margin: 10,
      }}>
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
          title: 'Completed',
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
