import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from 'src/screens/ProfileScreen/';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import { useAppDispatch } from 'src/store/hooks';
import { setActiveTubNumber } from 'src/store/activeTubNumberSlice/activeTubNumberSlice';
import MyTranslator from 'src/utils/MyTranslator';
import MyTabView from '../MyTabView/MyTabView';

type PropType = {
  initialRoute: keyof NavigatorRootStackParamListType;
  setInitialRoute: React.Dispatch<React.SetStateAction<keyof NavigatorRootStackParamListType>>;
};

const myTab = createNativeStackNavigator<NavigatorRootStackParamListType>();

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
      screenOptions={{ headerShown: false }}
    >
      <myTab.Screen
        name="All"
        options={{
          title: MyTranslator.t('All'),
        }}
        component={MyTabView}
        initialParams={{ name: 'All' }}
      />
      <myTab.Screen
        name="Profile"
        options={{
          title: MyTranslator.t('Profile'),
        }}
        component={ProfileScreen}
      />
    </myTab.Navigator>
  );
};

export default RootStack;
