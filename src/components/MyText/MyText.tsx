import type { FC } from 'react';
import React from 'react';
import { Text } from 'react-native';
import MyTranslator from 'src/utils/MyTranslator';
import styles from './MyTextStyles';

type PropType = {
  textValue: string;
  isBold: boolean;
};

const MyText: FC<PropType> = ({ textValue, isBold }) => {
  return (
    <Text style={isBold ? styles.textBold : styles.textRegular}>
      {MyTranslator.t(textValue)}
    </Text>
  );
};

export default MyText;
