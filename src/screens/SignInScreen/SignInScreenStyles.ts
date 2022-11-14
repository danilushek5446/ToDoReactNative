import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const signInScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    flexDirection: 'column',
    maxWidth: wp('85%'),
  },
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F0F0F0',
    flexDirection: 'column',
  },
  inputPadding: {
    margin: 15,
    width: wp('85%'),
  },
  inputStyles: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#F0F0F0',
    flex: 1,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titlePaddig: {
    paddingBottom: 10,
  },
  passwordIcon: {
    position: 'absolute',
    right: 20,
    top: 18,
  },
  forgotPassContainer: {
    alignSelf: 'flex-end',
    paddingTop: 5,
  },
  forgotPassText: {
    color: '#3FBFBF',
  },
  activeCheckbox: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: 'palegreen',
    borderRadius: 10,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    paddingBottom: 40,
    alignSelf: 'center',
    paddingTop: 10,
  },
  signUpButton: {
    paddingLeft: 3,
  },
});
