import type { FC } from 'react';
import React from 'react';
import { View } from 'react-native';

import ToDoForm from 'src/components/TodoForm/';
import { homeScreenStyles } from './HomeScreenStyles';

const HomeScreen: FC = () => {
  return (
    <View style={homeScreenStyles.homeScreen}>
      <ToDoForm />
    </View>
  );
};

export default HomeScreen;
