import type { FC } from 'react';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MyI18n from 'src/utils/MyI18n';

import MyButtonStyles from './MyButtonStyles';

type PropType = {
  textValue: string;
  onPress(): void;
  size: string;
};

const MyButton: FC<PropType> = ({ textValue, onPress, size }) => {
  return (
    <View style={MyButtonStyles.buttonContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={size === 'big' ? MyButtonStyles.bigText : MyButtonStyles.smallText}>{MyI18n.t(textValue)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;
