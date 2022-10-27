import React, {FC, useState} from 'react';
import {TextInput, View} from 'react-native';
import {todoItemStyles} from './todoItemStyles';

type PropType = {
  task: string;
  id: number;
  toggleEditable(id: number): void;
  changeTodo(id: number, taskText: string): void;
};

const TodoItemEdit: FC<PropType> = ({id, task, toggleEditable, changeTodo}) => {
  const [inputValue, setIputValue] = useState(task);

  return (
    <View>
      <TextInput
        autoFocus
        value={inputValue}
        style={todoItemStyles.input}
        onChangeText={setIputValue}
        onSubmitEditing={() => changeTodo(id, inputValue)}
        onBlur={() => toggleEditable(id)}
      />
    </View>
  );
};

export default TodoItemEdit;
