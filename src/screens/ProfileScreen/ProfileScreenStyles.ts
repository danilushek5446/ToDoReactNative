import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const profileScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#3FBFBF',
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
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 14,
  },

  languagePicker: {
    maxWidth: 120,
    alignSelf: 'flex-end',
  },

  changePhotoContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 48,
    marginTop: 30,
  },

  photoChangeButton: {
    width: wp('60%'),
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
  },

  signOutButton: {
    width: wp('60%'),
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#A0616A',
    borderRadius: 10,
  },

  photoChangeText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },

  avatar: {
    width: 106,
    height: 106,
    borderRadius: 100,
    resizeMode: 'contain',
    margin: 5,
  },

  signOutText: {
    color: '#A0616A',
    textAlign: 'center',
  },

  elipsisContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    right: 0,
    transform: [
      { rotateX: '180deg' },
      { rotateY: '180deg' },
    ],
  },
});
