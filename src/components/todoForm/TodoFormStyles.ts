import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({

  input: {
    width: 250,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFFAFA",
    borderRadius: 20,
    border: 'none',
    outline: 'none'
  },

  itemList: {
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    borderWidth: 0,
    border: 0,
  },

  flatList: {
    flexGrow: 0,
    borderRadius: 20,
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
});
