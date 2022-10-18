import React, { FC, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type PropType = {
  task: string;
  id: number;
  toggleEditable(id: number): void;
  changeTodo(id: number, taskText: string): void;
}

const TodoItemEdit: FC<PropType> = ({ id, task, toggleEditable, changeTodo }) => {
  const [inputValue, setIputValue] = useState(task);

  return (
    <View>
      <TextInput
        autoFocus
        value={inputValue}
        style={styles.input}
        onChangeText={setIputValue}
        onSubmitEditing={() => changeTodo(id, inputValue)}
        onBlur={() => toggleEditable(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f0ffff",
  },
});

export default TodoItemEdit;