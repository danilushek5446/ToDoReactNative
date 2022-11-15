import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const signInScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00000000',
    position: 'relative',
  },
  container: {
    flex: 1,
    maxWidth: wp('85%'),
    backgroundColor: '#00000000',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  screenContainer: {
    alignItems: 'center',
    backgroundColor: '#00000000',
    maxWidth: wp('85%'),
  },
  inputPadding: {
    margin: 5,
    width: wp('85%'),
  },
  inputStyles: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  titlePaddig: {
    paddingBottom: 10,
  },
  passwordIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
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
    alignSelf: 'center',
    paddingTop: 10,
  },
  signUpButton: {
    paddingLeft: 3,
  },
  elipsisContainer: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
  },
  logocontainer: {
    alignItems: 'center',
    backgroundColor: '#00000000',
    maxWidth: wp('85%'),
    paddingTop: hp('10%'),
  },
});
