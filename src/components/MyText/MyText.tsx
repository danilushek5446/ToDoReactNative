import type { FC } from 'react';
import React from 'react';
import { Text } from 'react-native';
import MyI18n from 'src/utils/MyI18n';
import styles from './MyTextStyles';

type PropType = {
  textValue: string;
};

const MyText: FC<PropType> = ({ textValue }) => {
  return (
    <Text style={styles.text}>{MyI18n.t(textValue)}</Text>
  );
};

export default MyText;
