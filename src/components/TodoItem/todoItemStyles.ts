import {StyleSheet} from 'react-native';

export const todoItemStyles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    margin: 8,
    borderWidth: 0,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    border: 'none',
    outline: 'none',
    fontSize: 40,
  },
  button: {
    width: 25,
    height: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checkbox: {
    marginRight: 10,
  },
  textCheked: {
    fontSize: 18,
    color: 'black',
    backgroundColor: 'palegreen',
    textDecorationLine: 'line-through',
  },
  textActive: {
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
