import type { FC } from 'react';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import MyText from '../MyText';
import MyButtonStyles from './MyButtonStyles';

type PropType = {
  textValue: string;
  onPress(): void;
};

const MyButton: FC<PropType> = ({ textValue, onPress }) => {
  return (
    <View style={MyButtonStyles.buttonContainer}>
      <TouchableOpacity onPress={onPress}>
        <MyText textValue={textValue} />
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;
