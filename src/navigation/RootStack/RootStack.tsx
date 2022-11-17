import type { FC } from 'react';
import React, { useEffect } from 'react';
import type { ParamListBase, Route } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackHeaderProps, NativeStackNavigationOptions, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from 'src/screens/ProfileScreen/';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import { useAppDispatch } from 'src/store/hooks';
import { setActiveTubNumber } from 'src/store/activeTubNumberSlice/activeTubNumberSlice';
import MyTranslator from 'src/utils/MyTranslator';
import { Text, View, TouchableOpacity } from 'react-native';
import MyTabView from '../MyTabView/MyTabView';

type PropType = {
  initialRoute: keyof NavigatorRootStackParamListType;
  setInitialRoute: React.Dispatch<React.SetStateAction<keyof NavigatorRootStackParamListType>>;
};

const myTab = createNativeStackNavigator<NavigatorRootStackParamListType>();

type HeaderPropType = {
  back?: {
    title: string;
  } | undefined;
  options: NativeStackNavigationOptions;
  route: Route<string>;
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const Header: FC<HeaderPropType> = (props: NativeStackHeaderProps) => {
  const onPress = () => {
    if (props.back?.title) {
      props.navigation.navigate(props.back?.title);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <Text>Profile</Text>
    </View>
  );
};

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
          // headerStyle: { backgroundColor: '#3FBFBF' },
          // headerTintColor: '#FFFFFF',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          header: (props) => <Header {...props} />,
        }}
        component={ProfileScreen}
      />
    </myTab.Navigator>
  );
};

export default RootStack;
