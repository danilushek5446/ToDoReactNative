import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({

  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f0ffff",
    borderRadius: 20,
    border: 'none',
    outline: 'none'
  },

  itemList: {
    backgroundColor: 'beige',
    borderWidth: 1,
    borderRadius: 20,
  },

  flatList: {
    flexGrow: 0,
    borderRadius: 20,
  },

  titleInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    width: 50,
    height: 50,
  },
});
