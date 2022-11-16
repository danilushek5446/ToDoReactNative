import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000060'
  },
  modalView: {
    width: wp('95%'),
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    // width: 60,
    paddingVertical: 15,
    paddingHorizontal: 55,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonOpen: {
    backgroundColor: '#43E88E',
  },
  buttonClose: {
    backgroundColor: '#DF3547',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  buttonscontainer: {
    width: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
