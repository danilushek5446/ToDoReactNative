import type { FC } from 'react';
import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';

import Animated, {
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';

import images from 'src/constants/images';
import MyTranslator from 'src/utils/MyTranslator';
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hideMenu = () => setIsDropdownOpen(false);

  const OnEditPress = () => {
    setIsDropdownOpen(false);
    toggleEditable(id);
  };

  const showMenu = () => setIsDropdownOpen(true);
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOut}
    >
      <View style={todoItemStyles.input}>
        <View style={todoItemStyles.checkboxContainer}>
          <TouchableOpacity onPress={() => toggleCheck(id)}>
            <View
              style={
                complete
                  ? todoItemStyles.checkedCheckbox
                  : todoItemStyles.activeCheckbox
              }
            >
              {complete && <Image source={images.checkMark} />}
            </View>
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
        <Menu
          visible={isDropdownOpen}
          style={todoItemStyles.dropDownContainer}
          anchor={
            (
              <TouchableHighlight onPress={showMenu}>
                <Image source={images.vertDots} />
              </TouchableHighlight>
            )
          }
          onRequestClose={hideMenu}
        >
          <MenuItem style={todoItemStyles.menuItem} onPress={OnEditPress}>
            <Text style={todoItemStyles.menuItemText}>{MyTranslator.t('Edit')}</Text>
          </MenuItem>
          <MenuItem style={todoItemStyles.menuItem} onPress={() => removeTask(id)}>
            <Text style={todoItemStyles.menuItemText}>{MyTranslator.t('Delete')}</Text>
          </MenuItem>
        </Menu>

      </View>

    </Animated.View>
  );
};

export default TodoItem;

// eslint-disable-next-line no-inline-styles/no-inline-styles
// <View style={todoItemStyles.dropDownContainer}>
//   <MyText textValue="Edit" isBold={false} />
//   <MyText textValue="Delete" isBold={false} />
// </View>
