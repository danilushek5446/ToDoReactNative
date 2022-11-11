import { StyleSheet } from 'react-native';

export const profileScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  inputPadding: {
    paddingTop: 20,
  },

  loginContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'EncodeSans-Regular',
    color: 'black',
  },

  languagePicker: {
    maxWidth: 120,
    alignSelf: 'flex-end',
  },
});
