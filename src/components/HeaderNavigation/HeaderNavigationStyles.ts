import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#3FBFBF',
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('7%'),
    alignItems: 'center',
    paddingLeft: 30,
    paddingTop: 10,
  },
  textStyles: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 22,
    fontFamily: 'EncodeSans-Bold',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  titlePadding: {
    paddingLeft: 100,
  },
});

export default styles;
