import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
    color: '#BDBDBD',
    textDecorationLine: 'line-through',
  },
  textActive: {
    maxWidth: wp('65%'),
    fontFamily: 'EncodeSans-Regular',
    fontSize: 18,
    color: '#00000090',
    backgroundColor: 'white',
    textDecorationLine: 'none',
  },
  activeCheckbox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    width: 20,
    height: 20,
    marginRight: 10,
    borderColor: '#89E3E3',
    borderWidth: 1,
  },
  checkedCheckbox: {
    backgroundColor: '#89E3E3',
    borderRadius: 2,
    width: 20,
    height: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDownContainer: {
    width: 72,
    height: 72,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    width: 46,
    height: 35,
  },
  menuItemText: {
    width: 46,
    height: 20,
    fontSize: 14,
    lineHeight: 18,
    marginTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
