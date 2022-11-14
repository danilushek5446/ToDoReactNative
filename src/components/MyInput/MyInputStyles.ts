import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const MyInputStyles = StyleSheet.create({
  inputStyles: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'relative',
  },
  titlePaddig: {
    paddingBottom: 10,
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
    top: 46,
  },
  inputPadding: {
    margin: 5,
    width: wp('85%'),
  },
});
