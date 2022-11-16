import * as React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar, SceneRendererProps, NavigationState } from 'react-native-tab-view';
import HomeScreen from 'src/screens/HomeScreen/HomeScreen';
import { useAppDispatch } from 'src/store/hooks';
import { changeFilter } from 'src/store/todoSlice/todoSlice';

type RouteType = {
  key: string;
  title: string;
}

type PropsType = {
  props: TabBarPropType;
};

type TabBarPropType = {
  props: SceneRendererProps;
  navigationState: NavigationState<RouteType>;
}


const FirstRoute: React.FC = () => (
  <HomeScreen />
);

const SecondRoute: React.FC = () => (
  <HomeScreen />
);

const ThirdRoute: React.FC = () => (
  <HomeScreen />
);

const renderTabBar = (props: SceneRendererProps & { navigationState: NavigationState<RouteType>; }) => {
  return (
    <View style={{position: 'absolute', top: 250, zIndex: 9, width: '100%'}}>
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#3FBFBF', width: '25%', height: 2, zIndex: 2, position: 'absolute', bottom: -2, left: 20  }}
        activeColor='#3FBFBF'
        inactiveColor='#BDBDBD'
        style={{ backgroundColor: '#00000000', borderBottomWidth: 2, borderBottomColor: '#BDBDBD', elevation: 0, paddingBottom: 3, zIndex: 1 }} />
    </View>
  )
}

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
  }, [index])


  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      sceneContainerStyle={{ position: 'relative' }}
      pagerStyle={{ position: 'relative' }}
      style={{ position: 'relative' }}
      renderTabBar={renderTabBar}
    />
  );
}

export default MyTabView;
