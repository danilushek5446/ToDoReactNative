import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#00000060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: wp('95%'),
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    width: wp('35%'),
    paddingVertical: 15,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: '#3FBFBF',
  },
  buttonClose: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#3FBFBF',
  },
  modalText: {
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center',
  },
  buttonscontainer: {
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelText: {
    color: '#3FBFBF',
    maxWidth: 60,
    fontFamily: 'Poppins-Bold',
    lineHeight: 20,
  },
  addText: {
    color: '#FFFFFF',
    maxWidth: 70,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    lineHeight: 20,
    textAlign: 'center',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#3FBFBF',
    marginBottom: 10,
  },
  inputText: {
    padding: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },

  countSymbolsContainer: {
    paddingBottom: 28,
  },
});

export default styles;
