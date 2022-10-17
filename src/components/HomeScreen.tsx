import React, { FC, type PropsWithChildren } from 'react';
import {
    Button,
    Text,
    View,
  } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TNavigatorRootStackParamList } from '../../App';

  type PropType = {
    navigation: NativeStackNavigationProp<TNavigatorRootStackParamList, any>;
  }

const HomeScreen: FC<PropType> = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Profile', { name: 'Jane' })
            } />
        <Text>Home Screen</Text>
      </View>
    );
  }

  export default HomeScreen;
  