import React, { FC, useEffect, useState } from 'react';
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

import { TodoItemType } from '../../types/todoTypes';
import TodoItem from '../todoItem/TodoItem';
import TodoItemEdit from '../todoItem/TodoItemEdit';

const ToDoForm: FC = () => {
  const [inputValue, setIputValue] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [allTodos, setAllTodos] = useState<TodoItemType[]>([]);

  const addNewToD = ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    if (!nativeEvent.text) {
      return;
    }

    setAllTodos((state) => {
      state.push({
        id: Date.now(),
        task: inputValue,
        complete: false,
        edit: false,
      })
      return (state)
    })

    setIputValue('');
  };

  const removeTask = (id: number) => {
    setAllTodos((state) => {
      const index = state.findIndex((item) => item.id === id);
      state.splice(index || 0, 1);
      return (state)
    })

    setSelectedId(id.toString());

    console.log(allTodos);
  };

  const toggleCheck = (id: number) => {
    setAllTodos((state) => {
      const index = state.findIndex((item) => item.id === id);
      state[index].complete = !state[index].complete;
      return (state)
    })

    setSelectedId(id.toString());
  };

  const toggleEditable = (id: number) => {
    setAllTodos((state) => {
      const index = state.findIndex((item) => item.id === id);
      state[index].edit = !state[index].edit;
      return (state)
    })

    console.log(allTodos);

    setSelectedId(id.toString());
  };

  const changeTodo = (id: number, taskText: string) => {
    setAllTodos((state) => {
      const index = state.findIndex((item) => item.id === id);
      state[index].task = taskText;
      return (state)
    })

    setSelectedId('');
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
        onPress={() => setSelectedId(item.item.id.toString())}
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