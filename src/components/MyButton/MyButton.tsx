import type { FC } from 'react';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MyTranslator from 'src/utils/MyTranslator';

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
        <Text style={size === 'big' ? MyButtonStyles.bigText : MyButtonStyles.smallText}>
          {MyTranslator.t(textValue)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;
