import type { ParamListBase, Route } from '@react-navigation/native';
import type { NativeStackNavigationOptions, NativeStackNavigationProp, NativeStackHeaderProps } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './HeaderNavigationStyles';

type HeaderPropType = {
  back?: {
    title: string;
  } | undefined;
  options: NativeStackNavigationOptions;
  route: Route<string>;
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const HeaderNavigation: FC<HeaderPropType> = (props: NativeStackHeaderProps) => {
  const onPress = () => {
    if (props.back?.title) {
      props.navigation.navigate(props.back?.title);
    }
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textStyles}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={[styles.textStyles, styles.titlePadding]}>{props.route.name}</Text>
    </View>
  );
};

export default HeaderNavigation;
