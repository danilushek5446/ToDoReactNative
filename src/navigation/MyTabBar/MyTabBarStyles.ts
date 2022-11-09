import { StyleSheet } from 'react-native';

export const MyTabBarStyles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#282828',
    borderRadius: 40,
    overflow: 'hidden',
    width: 240,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  navigatorStyle: {
    backgroundColor: '#DCDCDC',
  },
  tabButtonActive: {
    zIndex: 999,
    color: '#696969',
    flex: 1,
    alignItems: 'center',
  },
  tabButtonNotActive: {
    zIndex: 999,
    color: '#696969',
    flex: 1,
    alignItems: 'center',
  },

  activeColor: {
    color: '#696969',
  },
  notActive: {
    color: '#696969',
  },
  animatedBackground: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    position: 'absolute',
    left: 0,
    borderRadius: 30,
  }
});
