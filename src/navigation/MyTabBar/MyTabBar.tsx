import type {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import type {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { FC, SetStateAction, useEffect, useState } from 'react';
import React from 'react';
import { View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { GestureEvent, TapGestureHandler, TapGestureHandlerEventPayload } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring } from 'react-native-reanimated';

import { MyTabBarStyles } from './MyTabBarStyles';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setActiveTubNumber } from 'src/store/activeTubNumberSlice/activeTubNumberSlice';

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

  const animatedStyles = useAnimatedStyle(() => {
    return {
      left: offset.value,
      width: width.value,
      height: height.value,
    };
  });

  // const eventHandler = useAnimatedGestureHandler<GestureEvent<TapGestureHandlerEventPayload>>({
  //   onStart: (event, ctx) => {
  //     console.log('asd')
  //     pressed.value = true;
  //   },
  //   onActive: (event, ctx) => {
  //     console.log('asd')
  //     x.value = startingPosition + event.x;
  //     y.value = startingPosition + event.y;
  //   },
  //   onEnd: (event, ctx) => {
  //     console.log('asd')
  //     pressed.value = false;
  //     x.value = withSpring(startingPosition);
  //     y.value = withSpring(startingPosition);
  //   },
  // });

  useEffect(() => {
    const distanceBetweenTubs = MyTabBarStyles.barStyle.width / state.routes.length;

    withSequence(
      width.value = 10,
      height.value = 5,
      offset.value = withSpring(distanceBetweenTubs * activeTabNumber + leftPadding),
      width.value = withSpring(30),
      height.value = withSpring(30),
    )
  }, [activeTabNumber])

  return (
    <Animated.View style={MyTabBarStyles.barStyle}>
      {/* <TapGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[MyTabBarStyles.animatedBackground, uas]} />
      </TapGestureHandler> */}
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
