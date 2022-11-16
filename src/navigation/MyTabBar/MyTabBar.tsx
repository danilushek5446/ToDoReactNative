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
import React, { useState, useMemo, useEffect } from 'react';
import type { LayoutChangeEvent } from 'react-native';
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

  const [layotwidth, setLayotwidth] = useState(0);
  const [padding, setPadding] = useState(0);

  const activeIconWidth = 30;
  const offset = useSharedValue(padding);
  const width = useSharedValue(activeIconWidth);
  const height = useSharedValue(activeIconWidth);

  const distanceBetweenTubs = useMemo(() => {
    return layotwidth / state.routes.length;
  }, [layotwidth, state.routes.length]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      left: offset.value,
      width: width.value,
      height: height.value,
    };
  });

  const onBarLayout = (event: LayoutChangeEvent) => {
    setLayotwidth(event.nativeEvent.layout.width);
  };

  const onIconLayout = (event: LayoutChangeEvent) => {
    const iconWidth = event.nativeEvent.layout.width;

    setPadding((iconWidth - activeIconWidth) / 2);
    offset.value = (iconWidth - activeIconWidth) / 2;
  };

  useEffect(() => {
    withSequence(
      width.value = 10,
      height.value = 5,
      offset.value = withSpring(
        distanceBetweenTubs * activeTabNumber + padding,
        { overshootClamping: true },
      ),
      width.value = withSpring(activeIconWidth),
      height.value = withSpring(activeIconWidth),
    );
  }, [activeTabNumber, distanceBetweenTubs]);

  return (
    <Animated.View style={MyTabBarStyles.barStyle} onLayout={onBarLayout}>
      <Animated.View style={[MyTabBarStyles.animatedBackground, animatedStyles]} />
      {state.routes.map((route, index) => {
        if (route.name === 'Profile') {
          return;
        }
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
            onLayout={onIconLayout}
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
