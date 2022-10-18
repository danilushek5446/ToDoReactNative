import React, { FC, type PropsWithChildren } from 'react';
import {
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorRootStackParamList } from '../../App';
import ToDoForm from './todoForm/TodoForm';

type PropType = {
  navigation: NativeStackNavigationProp<NavigatorRootStackParamList, any>;
}

const HomeScreen: FC<PropType> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'peachpuff' }}>
      <ToDoForm />
    </View>
  );
}

export default HomeScreen;
