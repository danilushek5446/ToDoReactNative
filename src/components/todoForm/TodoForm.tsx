import { RouteProp } from '@react-navigation/native';
import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  ListRenderItem,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectAllTodos, selectTodoByFilter } from '../../store/selectors';
import { addToDo, changeCompletion, changeFilter, editToDo, removeToDo, setEditable } from '../../store/todoSlice/todoSlice';

import { TodoItemType } from '../../types/todoTypes';
import TodoItem from '../todoItem/TodoItem';
import TodoItemEdit from '../todoItem/TodoItemEdit';

const ToDoForm: FC = () => {
  const [inputValue, setIputValue] = useState('');
  const allTodos: TodoItemType[] = useAppSelector(selectTodoByFilter);

  const dispatch = useAppDispatch();

  const addNewToD = ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
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
    dispatch(editToDo({id, value: taskText}))
  };

  const renderItem: ListRenderItem<TodoItemType> = (item) => (
    !item.item.edit ?
      <TodoItem
        task={item.item.task}
        complete={item.item.complete}
        id={item.item.id}
        toggleCheck={toggleCheck}
        removeTask={removeTask}
        toggleEditable={toggleEditable}
      />
      :
      <TodoItemEdit
        task={item.item.task}
        id={item.item.id}
        toggleEditable={toggleEditable}
        changeTodo={changeTodo}
      />
  );

  return (
    <View>
      <View style={styles.titleInput}>
        <Text>todos</Text>
        <TextInput
          value={inputValue}
          style={styles.input}
          onChangeText={setIputValue}
          onSubmitEditing={addNewToD}
        />
      </View>
      <SafeAreaView style={styles.itemList}>
        <FlatList
          style={styles.flatList}
          data={allTodos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          extraData={allTodos}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f0ffff",
  },

  itemList: {
    backgroundColor: 'beige',
    borderWidth: 1,
  },

  flatList: {
    flexGrow: 0
  },

  titleInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    width: 50,
    height: 50,
  },
});

export default ToDoForm;