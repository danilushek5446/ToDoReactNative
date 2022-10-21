import { StyleSheet } from "react-native";

export const todoItemStyles = StyleSheet.create({
  input: {
    width: 230,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#f0ffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    border: 'none',
    outline: 'none'
  },
  button: {
    width: 25,
    height: 25,
  }
});