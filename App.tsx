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

type PropType = {
  route?: RouteProp<{ params: { name: string } }>
}

export type NavigatorRootStackParamList = {
  All: { name: string };
  Completed: { name: string };
  Active: { name: string };
}

const Tab = createBottomTabNavigator<NavigatorRootStackParamList>();

const ProfileScreen: FC<PropType> = ({ route }) => {
  return <Text>This is {route?.params.name}'s profile</Text>;
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="All"
            options={{ title: 'all' }}
            component={HomeScreen}
            initialParams={{name: 'All'}}
          />
          <Tab.Screen
            name="Completed"
            options={{ title: 'Completed' }}
            component={HomeScreen}
            initialParams={{name: 'Completed'}}
          />
          <Tab.Screen
            name="Active"
            options={{ title: 'Active' }}
            component={HomeScreen}
            initialParams={{name: 'Active'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
