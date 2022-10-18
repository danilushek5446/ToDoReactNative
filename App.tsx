import React, { FC } from 'react';
import {
  Text,
  useColorScheme,
} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { Provider } from 'react-redux';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/components/HomeScreen';
import type { RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from '/Users/fusion/Desktop/react-native/AwesomeTSProject/src/store/store';
import ComplitedScreen from './src/components/ComplitedScreen';

type PropType = {
  route?: RouteProp<{ params: { name: string } }>
}

export type NavigatorRootStackParamList = {
  Home: undefined;
  ComplitedScreen: undefined;
}

const Tab = createBottomTabNavigator<NavigatorRootStackParamList>();

const ProfileScreen: FC<PropType> = ({ route }) => {
  return <Text>This is {route?.params.name}'s profile</Text>;
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStysle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            name="ComplitedScreen"
            component={ComplitedScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
