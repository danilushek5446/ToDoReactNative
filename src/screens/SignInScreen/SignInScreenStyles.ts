import { StyleSheet } from 'react-native';

export const signInScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
    flexDirection: 'column',
  },
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#DCDCDC',
    flexDirection: 'column',
  },
  inputPadding: {
    paddingTop: 20,
  },
  inputStyles: {
    width: 200,
    height: 40,
    color: 'black',
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#DCDCDC',
    flex: 1,
  },
  navigateButton: {
    maxWidth: 120,
    alignSelf: 'flex-end',
    margin: 15,
  },
});
