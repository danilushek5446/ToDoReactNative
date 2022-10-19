import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({

  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f0ffff",
  },

  itemList: {
    backgroundColor: 'beige',
    borderWidth: 1,
  },

  flatList: {
    flexGrow: 0
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
