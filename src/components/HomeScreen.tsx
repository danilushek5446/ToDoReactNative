import React, { FC, useEffect, type PropsWithChildren } from 'react';
import {
  View,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';

import ToDoForm from './todoForm/TodoForm';

import { useAppDispatch } from '../store/hooks';
import { changeFilter } from '../store/todoSlice/todoSlice';

type PropType = {
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
