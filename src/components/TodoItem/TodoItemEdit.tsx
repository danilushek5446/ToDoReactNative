import type { FC } from 'react';
import React, { useState } from 'react';
import { TextInput } from 'react-native';

import Animated, {
  ZoomInLeft,
} from 'react-native-reanimated';

import { todoItemStyles } from './todoItemStyles';

type PropType = {
  task: string;
  id: number;
  toggleEditable(id: number): void;
  changeTodo(id: number, taskText: string): void;
};

const TodoItemEdit: FC<PropType> = ({ id, task, toggleEditable, changeTodo }) => {
  const [inputValue, setIputValue] = useState(task);

  return (
    <Animated.View entering={ZoomInLeft}>
      <TextInput
        autoFocus
        value={inputValue}
        style={todoItemStyles.input}
        onChangeText={setIputValue}
        onSubmitEditing={() => changeTodo(id, inputValue)}
        onBlur={() => toggleEditable(id)}
      />
    </Animated.View>
  );
};

export default TodoItemEdit;
