/* eslint-disable no-nested-ternary */
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import type {
  ListRenderItem,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {
  Text,
  Image,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  ZoomInUp,
} from 'react-native-reanimated';

import MyText from 'src/components/MyText';
import TodoItem from 'src/components/TodoItem/TodoItem';
import TodoItemEdit from 'src/components/TodoItem/TodoItemEdit';
import images from 'src/constants/images';
import useCurrentUser from 'src/hooks/useCurrentUser';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectTodoByFilter } from 'src/store/selectors';
import {
  addToDo,
  changeCompletion,
  editToDo,
  removeToDo,
  setEditable,
} from 'src/store/todoSlice';

import type { TodoItemType } from 'src/types/todoTypes';
import MyTranslator from 'src/utils/MyTranslator';

import { formStyles } from './TodoFormStyles';

const ToDoForm: FC = () => {
  const [inputValue, setIputValue] = useState('');
  const filteredTodos: TodoItemType[] = useAppSelector(selectTodoByFilter);
  const allTodos: TodoItemType[] = useAppSelector((state) => state.todo.todoList);
  const filter = useAppSelector((state) => state.todo.filter);

  const { user } = useCurrentUser();

  const dispatch = useAppDispatch();

  const title = useMemo(() => {
    if (!allTodos.length) {
      return 'Set up your task lists for tomorrow';
    }

    if (filter === 'Completed') {
      return 'Tasks Completed!';
    }

    if (filter === 'Active') {
      return 'Active tasks';
    }

    return 'Tasks List for tomorrow';
  }, [allTodos.length, filter]);

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
    <Animated.View style={formStyles.screen} entering={ZoomInUp}>
      <View style={formStyles.elipsisContainer}>
        <Image source={images.whiteElipsis} />
      </View>

      <View style={formStyles.header}>
          <View style={formStyles.textContainer}>
            <Text style={formStyles.textStyles}>
              {`${MyTranslator.t('Hi there, ')} ${user.username}`}
            </Text>
            <Text style={formStyles.textStyles}>
              {MyTranslator.t('Add a Profile Picture')}
            </Text>
          </View>
        <View style={formStyles.userAvaterContainer}>

          <Image style={formStyles.userAvater} source={images.newUser} />
        </View>
      </View>

      <View style={formStyles.contentContaiber}>
        <View style={formStyles.titleInput}>
          <MyText textValue="todos" isBold={false} />
          <TextInput
            value={inputValue}
            style={formStyles.input}
            onChangeText={setIputValue}
            onSubmitEditing={addNewToD}
          />
        </View>

        <View style={formStyles.taskTitlesContainer}>
          <MyText textValue={title} isBold={false} />
        </View>

        <SafeAreaView style={formStyles.itemList}>
          <Animated.FlatList
            entering={FadeIn}
            exiting={FadeOut}
            style={formStyles.flatList}
            data={filteredTodos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            extraData={filteredTodos}
          />
        </SafeAreaView>
      </View>

    </Animated.View>
  );
};

export default ToDoForm;
