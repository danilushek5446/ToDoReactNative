import * as React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import type { SceneRendererProps, NavigationState } from 'react-native-tab-view';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import type { Scene } from 'react-native-tab-view/lib/typescript/types';

import HomeScreen from 'src/screens/HomeScreen';
import { useAppDispatch } from 'src/store/hooks';
import { changeFilter } from 'src/store/todoSlice';
import { MyBarStyles } from './MyTabViewStyles';

type RouteType = {
  key: string;
  title: string;
};

const FirstRoute: React.FC = () => (
  <HomeScreen />
);

const SecondRoute: React.FC = () => (
  <HomeScreen />
);

const ThirdRoute: React.FC = () => (
  <HomeScreen />
);

const renderTabBar = (
  props: SceneRendererProps
  & { navigationState: NavigationState<RouteType> },
) => {
  return (
    <View style={MyBarStyles.barStyleContainer}>
      <TabBar
        {...props}
        indicatorStyle={MyBarStyles.indicatorStyle}
        activeColor="#3FBFBF"
        inactiveColor="#BDBDBD"
        renderLabel={renderLabel}
        style={MyBarStyles.tabBarStyle}
/>
    </View>
  );
};

const renderLabel = (scene: Scene<RouteType> & {
  focused: boolean;
  color: string;
}) => {
  const color = scene.color;

  return (
    <Text style={[MyBarStyles.labelTextStyle, { color }]}>
      {scene.route.title}
    </Text>
  );
};

const MyTabView: React.FC = () => {
  const layout = useWindowDimensions();
  const dispatch = useAppDispatch();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<RouteType[]>([
    { key: 'first', title: 'All Tasks' },
    { key: 'second', title: 'In Progress' },
    { key: 'third', title: 'Completed' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  React.useEffect(() => {
    if (index === 0) {
      dispatch(changeFilter('All'));

      return;
    }

    if (index === 1) {
      dispatch(changeFilter('Active'));

      return;
    }

    dispatch(changeFilter('Completed'));
  }, [index]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default MyTabView;
