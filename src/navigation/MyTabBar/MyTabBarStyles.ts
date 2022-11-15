import { StyleSheet } from 'react-native';

export const MyTabBarStyles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#282828',
    borderRadius: 40,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    bottom: 20,
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: 10,
    paddingBottom: 10,
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
  },
});
