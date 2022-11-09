import type { FC } from 'react';
import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import Animated, {
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';

import images from 'src/constants/images';
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
    <Animated.View
      style={todoItemStyles.input}
      entering={FadeInUp}
      exiting={FadeOut}
    >
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
    </Animated.View>
  );
};

export default TodoItem;
