import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const todoItemStyles = StyleSheet.create({
  input: {
    width: wp('85%'),
    margin: 8,
    borderWidth: 0,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 16,
    border: 'none',
    outline: 'none',
    fontSize: 20,
    color: 'black',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  button: {
    width: 25,
    height: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  checkbox: {
    marginRight: 10,
  },
  textCheked: {
    maxWidth: wp('65%'),
    fontFamily: 'EncodeSans-Regular',
    fontSize: 18,
    color: 'black',
    backgroundColor: 'palegreen',
    textDecorationLine: 'line-through',
  },
  textActive: {
    maxWidth: wp('65%'),
    fontFamily: 'EncodeSans-Regular',
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
    textDecorationLine: 'none',
  },
  activeCheckbox: {
    backgroundColor: '#DCDCDC',
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
});
