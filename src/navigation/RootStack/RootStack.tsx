import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from 'src/screens/ProfileScreen';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import MyTranslator from 'src/utils/MyTranslator';
import HeaderNavigation from 'src/components/HeaderNavigation';
import MyTabView from '../MyTabView';

type PropType = {
  initialRoute: keyof NavigatorRootStackParamListType;
  setInitialRoute: React.Dispatch<React.SetStateAction<keyof NavigatorRootStackParamListType>>;
};

const myTab = createNativeStackNavigator<NavigatorRootStackParamListType>();

const RootStack: FC<PropType> = ({ initialRoute, setInitialRoute }) => {
  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignIn'>
    >();

  useEffect(() => {
    if (initialRoute === 'Profile') {
      navigate.navigate('Profile');

      setInitialRoute('All');
    }
  }, [initialRoute]);

  return (
    <myTab.Navigator>
      <myTab.Screen
        name="All"
        options={{
          title: MyTranslator.t('All'),
          headerShown: false,
        }}
        component={MyTabView}
        initialParams={{ name: 'All' }}
      />
      <myTab.Screen
        name="Profile"
        options={{
          title: MyTranslator.t('Profile'),
          header: (props) => <HeaderNavigation {...props} />,
        }}
        component={ProfileScreen}
      />
    </myTab.Navigator>
  );
};

export default RootStack;
