import type { FC } from 'react';
import React from 'react';
import { Text, View } from 'react-native';
import Myi18n from 'src/utils/Myi18n';
import styles from './MyTextStyles';

type PropType = {
  textValue: string;
};

const MyText: FC<PropType> = ({ textValue }) => {
  return (
    <Text style={styles.text}>{Myi18n.t(textValue)}</Text>
  );
};

export default MyText;
