import React, { FC } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';

import { todoItemStyles } from './todoItemStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
      <View style={todoItemStyles.checkboxContainer}>
        <MaterialCommunityIcons
          style={todoItemStyles.checkbox}
          name={complete ? 'check-circle-outline' : 'checkbox-blank-circle-outline'}
          size={20}
          onPress={() => toggleCheck(id)}
        />
        <Text
          style={{ backgroundColor, textDecorationLine }}
          onLongPress={() => toggleEditable(id)}
          onPressOut={() => toggleCheck(id)}
        >
          {task}
        </Text>
      </View>
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