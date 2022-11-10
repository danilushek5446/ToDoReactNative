import { StyleSheet } from 'react-native';

export const signUpScreenStyles = StyleSheet.create({
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
    backgroundColor: 'white',
  },
  navigateButton: {
    maxWidth: 120,
    alignSelf: 'flex-end',
    margin: 15,
  },
  container: {
    backgroundColor: '#DCDCDC',
    flex: 1,
  },
});
