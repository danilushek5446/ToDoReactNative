import type {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import type {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import type { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { MyTabBarStyles } from './MyTabBarStyles';

type PropsType = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const MyTabBar: FC<PropsType> = ({ state, descriptors, navigation }) => {
  return (
    <View style={MyTabBarStyles.barStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(`${route.name}`, route.params);
          }
        };
        return (
          <TouchableOpacity
            key={index}
            style={
              isFocused
                ? MyTabBarStyles.tabButtonActive
                : MyTabBarStyles.tabButtonNotActive
            }
            onPress={onPress}
>
            {options.tabBarIcon &&
              options.tabBarIcon({
                color: `${
                  isFocused
                    ? MyTabBarStyles.activeColor.color
                    : MyTabBarStyles.notActive.color
                }`,
                focused: isFocused,
                size: 23,
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
