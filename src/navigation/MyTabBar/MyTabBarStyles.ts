import { StyleSheet } from 'react-native';

export const MyTabBarStyles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#282828',
    borderRadius: 40,
    overflow: 'hidden',
    width: 230,
    height: 40,
    justifyContent: 'center',
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
    color: 'white',
    flex: 1,
    alignItems: 'center',
  },
  tabButtonNotActive: {
    color: '#696969',
    flex: 1,
    alignItems: 'center',
  },

  activeColor: {
    color: 'white',
  },
  notActive: {
    color: '#696969',
  },
});
