import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React, { useState } from 'react';
import type {
  ListRenderItem,
} from 'react-native';
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  ZoomInUp,
} from 'react-native-reanimated';

import TodoItem from 'src/components/TodoItem/TodoItem';
import TodoItemEdit from 'src/components/TodoItem/TodoItemEdit';
import images from 'src/constants/images';
import useCurrentUser from 'src/hooks/useCurrentUser';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectTodoByFilter } from 'src/store/selectors';
import {
  changeCompletion,
  editToDo,
  removeToDo,
  setEditable,
} from 'src/store/todoSlice';
import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';

import type { TodoItemType } from 'src/types/todoTypes';
import MyTranslator from 'src/utils/MyTranslator';
import AddTodoModal from '../AddTodoModal/AddTodoModal';

import { formStyles } from './TodoFormStyles';

const ToDoForm: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filteredTodos: TodoItemType[] = useAppSelector(selectTodoByFilter);

  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, never>
    >();

  const { user } = useCurrentUser();

  const dispatch = useAppDispatch();

  const removeTask = (id: number) => {
    dispatch(removeToDo(id));
  };

  const toggleCheck = (id: number) => {
    dispatch(changeCompletion(id));
  };

  const toggleEditable = (id: number) => {
    dispatch(setEditable(id));
  };

  const changeTodo = (id: number, taskText: string) => {
    dispatch(editToDo({ id, value: taskText }));
  };

  const onNavigateProfile = () => {
    navigate.navigate('Profile');
  };

  const renderItem: ListRenderItem<TodoItemType> = (item) => (!item.item.edit ? (
    <TodoItem
      task={item.item.task}
      complete={item.item.complete}
      id={item.item.id}
      toggleCheck={toggleCheck}
      removeTask={removeTask}
      toggleEditable={toggleEditable}
    />
  ) : (
    <TodoItemEdit
      task={item.item.task}
      id={item.item.id}
      toggleEditable={toggleEditable}
      changeTodo={changeTodo}
    />
  ));

  return (
    <Animated.View style={formStyles.screen} entering={ZoomInUp}>
      <View style={formStyles.elipsisContainer}>
        <Image source={images.whiteElipsis} />
      </View>
      {isModalOpen && <AddTodoModal setIsOpen={setIsModalOpen} />}

      <View style={formStyles.header}>
        <View style={formStyles.textContainer}>
          <Text style={formStyles.textStyles}>
            {`${MyTranslator.t('Hi there, ')} ${user.username}`}
          </Text>
          <Text style={formStyles.textStyles}>
            {MyTranslator.t('Add a Profile Picture')}
          </Text>
        </View>

        <TouchableOpacity style={formStyles.userAvaterContainer} onPress={onNavigateProfile}>
          <Image style={formStyles.userAvater} source={images.newUser} />
        </TouchableOpacity>
      </View>

      <View style={formStyles.contentContaiber}>

        <SafeAreaView style={formStyles.itemList}>
          <Animated.FlatList
            entering={FadeIn}
            exiting={FadeOut}
            style={formStyles.flatList}
            data={filteredTodos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            extraData={filteredTodos}
            contentContainerStyle={{ display: 'flex' }}
          />
        </SafeAreaView>
      </View>

      <TouchableOpacity style={formStyles.addTodoButton} onPress={() => setIsModalOpen(true)}>
        <Image source={images.addButton} />
      </TouchableOpacity>

    </Animated.View>
  );
};

export default ToDoForm;
