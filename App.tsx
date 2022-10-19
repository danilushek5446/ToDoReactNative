import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/components/HomeScreen';

import store from '/Users/fusion/Desktop/react-native/AwesomeTSProject/src/store/store';


export type NavigatorRootStackParamList = {
  All: { name: string };
  Completed: { name: string };
  Active: { name: string };
}

const Tab = createBottomTabNavigator<NavigatorRootStackParamList>();

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
