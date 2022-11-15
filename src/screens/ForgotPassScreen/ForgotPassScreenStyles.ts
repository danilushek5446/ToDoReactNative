import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const ForgotPassScreenStyles = StyleSheet.create({
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
    // paddingTop: hp('20%'),
  },
  forgotPasswordText: {
    textAlign: 'center',
    maxWidth: wp('60%'),
  },
});
