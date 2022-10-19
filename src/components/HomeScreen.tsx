import React, { FC, useEffect, type PropsWithChildren } from 'react';
import {
  View,
} from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { NavigatorRootStackParamList } from '../../App';
import ToDoForm from './todoForm/TodoForm';
import { RouteProp } from '@react-navigation/native';
import { useAppDispatch } from '../store/hooks';
import { changeFilter } from '../store/todoSlice/todoSlice';

type PropType = {
//  navigation: BottomTabNavigationProp<NavigatorRootStackParamList, any, any>;
  route?: RouteProp<{ params: { name: string } }>
}

const HomeScreen: FC<PropType> = ({ route }) => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(changeFilter(route?.params.name || 'All'));

  }, [route])
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'peachpuff' }}>
      <ToDoForm />
    </View>
  );
}

export default HomeScreen;
