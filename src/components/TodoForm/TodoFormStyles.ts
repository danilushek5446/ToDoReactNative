import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const formStyles = StyleSheet.create({
  input: {
    width: wp('65%'),
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFAFA',
    borderRadius: 20,
    border: 'none',
    outline: 'none',
    color: 'black',
  },

  itemList: {
    backgroundColor: '#00000000',
    borderRadius: 16,
    borderWidth: 0,
    border: 0,
    height: hp('40%'),
    width: wp('95%'),
    padding: 10,
  },

  flatList: {
    flexGrow: 0,
    borderRadius: 16,
  },

  titleInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
  },

  title: {
    width: 50,
    height: 50,
  },

  screen: {
    flex: 1,
    backgroundColor: '#00000000',
    position: 'relative',
  },

  contentContaiber: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00000000',
    paddingTop: 59,
  },

  elipsisContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },

  header: {
    backgroundColor: '#3FBFBF',
    height: hp('35%'),
    maxWidth: hp('100%'),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  userAvater: {
    maxHeight: 106,
    maxWidth: 106,
    resizeMode: 'contain',
  },

  userAvaterContainer: {
    paddingBottom: 13,
    paddingLeft: hp('3%'),
    zIndex: 200,
  },

  textStyles: {
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'EncodeSans-Regular',
    paddingBottom: 4,
  },

  textContainer: {
    paddingLeft: hp('3%'),
  },

  taskTitlesContainer: {
    paddingTop: 70,
    paddingBottom: 13,
  },

  addTodoButton: {
    alignSelf: 'flex-end',
    padding: 20,
    width: 100,
    height: 100,
    zIndex: 200,
  },
});
