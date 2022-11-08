import type { FC } from 'react';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import type { RouteProp } from '@react-navigation/native';

import ToDoForm from 'src/components/TodoForm/';

import { useAppDispatch } from 'src/store/hooks';
import { changeFilter } from 'src/store/todoSlice/';
import { homeScreenStyles } from './HomeScreenStyles';

type PropType = {
  route?: RouteProp<{params: {name: string}}>;
};

const HomeScreen: FC<PropType> = ({ route }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeFilter(route?.params.name || 'All'));
  }, [route]);

  return (
    <View style={homeScreenStyles.homeScreen}>
      <ToDoForm />
    </View>
  );
};

export default HomeScreen;
