import React, { FC } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';

import { todoItemStyles } from './todoItemStyles';


type PropType = {
  task: string;
  id: number;
  complete: boolean;
  toggleCheck(id: number): void;
  removeTask(id: number): void;
  toggleEditable(id: number): void;
}

const TodoItem: FC<PropType> = ({ complete, id, task, toggleEditable, toggleCheck, removeTask }) => {
  const textDecorationLine = complete ? 'line-through' : 'none';
  const backgroundColor = complete ? 'palegreen' : '#f0ffff';

  return (
    <View style={todoItemStyles.input}>
      <Text
        style={{ backgroundColor, textDecorationLine }}
        onLongPress={() => toggleEditable(id)}
        onPressOut={() => toggleCheck(id)}
      >
        {task}
      </Text>
      <TouchableHighlight onPress={() => removeTask(id)}>
        <View
          onPointerUp={() => removeTask(id)}
          style={todoItemStyles.button}
        >
          <Image
            style={todoItemStyles.button}
            source={require('../../assets/3481306.png')}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default TodoItem;