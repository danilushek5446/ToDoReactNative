import type { FC } from 'react';
import React, { useState } from 'react';
import type {
  ListRenderItem,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData } from 'react-native';
import {
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';

import Animated, {
  FadeIn,
  FadeOut,
  ZoomInUp,
} from 'react-native-reanimated';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectTodoByFilter } from '../../store/selectors';
import {
  addToDo,
  changeCompletion,
  editToDo,
  removeToDo,
  setEditable,
} from '../../store/todoSlice';

import type { TodoItemType } from '../../types/todoTypes';
import MyText from '../MyText/MyText';

import TodoItem from '../TodoItem/TodoItem';
import TodoItemEdit from '../TodoItem/TodoItemEdit';

import { formStyles } from './TodoFormStyles';

const ToDoForm: FC = () => {
  const [inputValue, setIputValue] = useState('');
  const allTodos: TodoItemType[] = useAppSelector(selectTodoByFilter);

  const dispatch = useAppDispatch();

  const addNewToD = ({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    if (!nativeEvent.text) {
      return;
    }

    dispatch(addToDo(inputValue));

    setIputValue('');
  };

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
    <Animated.View entering={ZoomInUp}>
      <View style={formStyles.titleInput}>
        <MyText textValue="todos" />
        <TextInput
          value={inputValue}
          style={formStyles.input}
          onChangeText={setIputValue}
          onSubmitEditing={addNewToD}
        />
      </View>
      <SafeAreaView style={formStyles.itemList}>
        <Animated.FlatList
          entering={FadeIn}
          exiting={FadeOut}
          style={formStyles.flatList}
          data={allTodos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          extraData={allTodos}
        />
      </SafeAreaView>
    </Animated.View>
  );
};

export default ToDoForm;
