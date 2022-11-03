import type { FC } from 'react';
import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import images from 'src/utils/images';
import { todoItemStyles } from './todoItemStyles';

type PropType = {
  task: string;
  id: number;
  complete: boolean;
  toggleCheck(id: number): void;
  removeTask(id: number): void;
  toggleEditable(id: number): void;
};

const TodoItem: FC<PropType> = ({
  complete,
  id,
  task,
  toggleEditable,
  toggleCheck,
  removeTask,
}) => {
  return (
    <View style={todoItemStyles.input}>
      <View style={todoItemStyles.checkboxContainer}>
        <TouchableOpacity onPress={() => toggleCheck(id)}>
          <View
            style={
              complete
                ? todoItemStyles.checkedCheckbox
                : todoItemStyles.activeCheckbox
            }
          />
        </TouchableOpacity>
        <Text
          style={
            complete ? todoItemStyles.textCheked : todoItemStyles.textActive
          }
          onLongPress={() => toggleEditable(id)}
          onPressOut={() => toggleCheck(id)}
>
          {task}
        </Text>
      </View>
      <TouchableHighlight onPress={() => removeTask(id)}>
        <View onPointerUp={() => removeTask(id)} style={todoItemStyles.button}>
          <Image
            style={todoItemStyles.button}
            source={images.trash}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default TodoItem;