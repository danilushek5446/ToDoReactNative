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
import React, { useMemo, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring } from 'react-native-reanimated';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setActiveTubNumber } from 'src/store/activeTubNumberSlice/activeTubNumberSlice';
import { MyTabBarStyles } from './MyTabBarStyles';

type PropsType = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const MyTabBar: FC<PropsType> = ({ state, descriptors, navigation }) => {
  const activeTabNumber = useAppSelector((state) => state.activeTubNumber.activeTab);
  const dispathc = useAppDispatch();

  const leftPadding = 14;
  const offset = useSharedValue(leftPadding);
  const width = useSharedValue(30);
  const height = useSharedValue(30);

  const distanceBetweenTubs = useMemo(() => {
    return MyTabBarStyles.barStyle.width / state.routes.length;
  }, [state.routes.length]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      left: offset.value,
      width: width.value,
      height: height.value,
    };
  });

  useEffect(() => {
    withSequence(
      width.value = 10,
      height.value = 5,
      offset.value = withSpring(distanceBetweenTubs * activeTabNumber + leftPadding,
        { overshootClamping: true }),
      width.value = withSpring(30),
      height.value = withSpring(30),
    );
  }, [activeTabNumber, distanceBetweenTubs]);

  return (
    <Animated.View style={MyTabBarStyles.barStyle}>
      <Animated.View style={[MyTabBarStyles.animatedBackground, animatedStyles]} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = (index: number) => {
          const navigationEvent = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          dispathc(setActiveTubNumber(index));

          if (!isFocused && !navigationEvent.defaultPrevented) {
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
            onPress={() => onPress(index)}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                color: `${isFocused
                  ? MyTabBarStyles.activeColor.color
                  : MyTabBarStyles.notActive.color
                }`,
                focused: isFocused,
                size: 23,
              })}
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

export default MyTabBar;
