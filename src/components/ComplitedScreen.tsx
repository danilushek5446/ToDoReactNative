import React, { FC, type PropsWithChildren } from 'react';
import {
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorRootStackParamList } from '../../App';
import ToDoForm from './todoForm/TodoForm';
import ToDoComplited from './todoForm/ToDoComplited';

type PropType = {
  navigation: NativeStackNavigationProp<NavigatorRootStackParamList, any>;
}

const HomeScreen: FC<PropType> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'peachpuff' }}>
      <ToDoComplited />
    </View>
  );
}

export default HomeScreen;
