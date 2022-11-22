import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const onboardingScreenStyles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    backgroundColor: '#F0F0F0',
    justifyContent: 'space-between',
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainTextContainer: {
    maxWidth: 267,
  },
  mainText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    margin: 24,
    width: wp('100%'),
    paddingLeft: 24,
    paddingRight: 24,
    maxHeight: 62,
  },
});
