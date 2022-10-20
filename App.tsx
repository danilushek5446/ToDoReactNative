import React, { useEffect } from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RNBootSplash from "react-native-bootsplash";

import HomeScreen from './src/components/HomeScreen';

import store from '/Users/fusion/Desktop/react-native/AwesomeTSProject/src/store/store';


export type NavigatorRootStackParamList = {
  All: { name: string };
  Completed: { name: string };
  Active: { name: string };
}

const Tab = createBottomTabNavigator<NavigatorRootStackParamList>();

const App = () => {
  useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
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
