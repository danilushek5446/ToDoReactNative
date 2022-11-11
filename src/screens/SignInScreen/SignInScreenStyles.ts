import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const signInScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    flexDirection: 'column',
  },
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F0F0F0',
    flexDirection: 'column',
  },
  inputPadding: {
    margin: 24,
    width: wp('80%'),
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
  navigateButton: {
    maxWidth: 120,
    margin: 15,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
