import { StyleSheet } from 'react-native';

export const MyBarStyles = StyleSheet.create({
  barStyleContainer: {
    position: 'absolute',
    top: 250,
    zIndex: 1,
    width: '100%',
  },

  indicatorStyle: {
    backgroundColor: '#3FBFBF',
    width: '25%',
    height: 2,
    zIndex: 2,
    position: 'absolute',
    bottom: -2,
    left: 20,
  },

  tabBarStyle: {
    backgroundColor: '#00000000',
    borderBottomWidth: 2,
    borderBottomColor: '#BDBDBD',
    elevation: 0,
    paddingBottom: 3,
    zIndex: 1,
  },
});
