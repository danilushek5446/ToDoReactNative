import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import ToDoForm from '../components/TodoForm/TodoForm';

import {useAppDispatch} from '../store/hooks';
import {changeFilter} from '../store/todoSlice/todoSlice';
import {screenStyles} from './screenStyles';

type PropType = {
  route?: RouteProp<{params: {name: string}}>;
};

const HomeScreen: FC<PropType> = ({route}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeFilter(route?.params.name || 'All'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return (
    <View style={screenStyles.homeScreen}>
      <ToDoForm />
    </View>
  );
};

export default HomeScreen;
