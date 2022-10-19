import React, { FC, useState } from 'react';
import {
  FlatList,
  ListRenderItem,
  NativeSyntheticEvent,
  SafeAreaView,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View
} from 'react-native';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectTodoByFilter } from '../../store/selectors';
import { addToDo, changeCompletion, editToDo, removeToDo, setEditable } from '../../store/todoSlice/todoSlice';

import { TodoItemType } from '../../types/todoTypes';

import TodoItem from '../todoItem/TodoItem';
import TodoItemEdit from '../todoItem/TodoItemEdit';

import { formStyles } from './TodoFormStyles';

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
      <View style={formStyles.titleInput}>
        <Text>todos</Text>
        <TextInput
          value={inputValue}
          style={formStyles.input}
          onChangeText={setIputValue}
          onSubmitEditing={addNewToD}
        />
      </View>
      <SafeAreaView style={formStyles.itemList}>
        <FlatList
          style={formStyles.flatList}
          data={allTodos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          extraData={allTodos}
        />
      </SafeAreaView>
    </View>
  );
}

export default ToDoForm;