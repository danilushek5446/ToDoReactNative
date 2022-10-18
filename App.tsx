import React, { FC } from 'react';
import {
  Text,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/components/HomeScreen';
import type { RouteProp } from '@react-navigation/native';

type PropType = {
  route?: RouteProp<{ params: { name: string } }>
}

export type NavigatorRootStackParamList = {
Home: undefined;
Profile: { name: string };
}

const Stack = createNativeStackNavigator<NavigatorRootStackParamList>();

const ProfileScreen: FC<PropType> = ({ route }) => {
  return <Text>This is {route?.params.name}'s profile</Text>;
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStysle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'ToDo' }}
        />
        <Stack.Screen
          name="Profile"
          options={{ title: 'profile' }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
